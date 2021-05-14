require "rails_helper"

describe Api::V1::WebsitesController, type: :controller do
  let!(:user) { User.create!(email: "someone@gmail.com", password: "123456", password_confirmation: "123456") }
  let!(:website) { Website.create!(title: "My site", url: "mysite.com", user: user) }
  let!(:visit) { Visit.create!(path_visited: "/", referring_url: "https://twitter.com", website: website) }

  describe "GET#index" do
    it "should get all websites of the currently signed in user" do
      sign_in user

      get :index
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json["websites"][0]["title"]).to eq "My site"
      expect(returned_json["websites"][0]["url"]).to eq "mysite.com"
      expect(returned_json["websites"][0]["user"]["email"]).to eq "someone@gmail.com"
    end
  end

  describe "POST#create" do
    it "should create a new website" do
      post_json = {
        title: "Website",
        url: "somewebsite.com"
      }
      sign_in user

      prev_count = Website.count
      post(:create, params: post_json, format: :json)
      expect(Website.count).to eq(prev_count + 1)
    end

    it "should return website data" do
      post_json = {
        title: "Website",
        url: "somewebsite.com"
      }
      sign_in user

      post(:create, params: post_json, format: :json)
      returned_json = JSON.parse(response.body)

      expect(returned_json["website"]["title"]).to eq("Website")
      expect(returned_json["website"]["url"]).to eq("somewebsite.com")
      expect(returned_json["website"]["user"]["id"]).to eq(user.id)
    end
  end

  describe "GET#show" do
    it "should get the data of a single website" do
      sign_in user

      get :show, params: {id: website.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      
      expect(returned_json["website"]["title"]).to eq "My site"
      expect(returned_json["website"]["url"]).to eq "mysite.com"
    end
  end

  describe "DELETE#destroy" do
    it "should delete a website from the db and return the deleted website" do
      sign_in user

      delete :destroy, params: {id: website.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(Website.count).to eq 0
    end

    it "should return the deleted website" do
      sign_in user

      delete :destroy, params: {id: website.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(returned_json["website"]["title"]).to eq website.title
    end

    it "should delete a website's associated visits" do
      sign_in user

      delete :destroy, params: {id: website.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(website.visits.count).to eq 0
    end
  end
end
