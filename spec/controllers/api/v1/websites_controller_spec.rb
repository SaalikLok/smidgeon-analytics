require "rails_helper"

describe Api::V1::WebsitesController, type: :controller do
  let!(:user) { User.create(email: "someone@gmail.com", password: "123456") }
  let!(:website) { Website.create(title: "My site", url: "https://mysite.com", user: user) }

  describe "GET#index" do
    it "should get all websites of the currently signed in user" do
      sign_in user

      get :index
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json["websites"][0]["title"]).to eq "My site"
      expect(returned_json["websites"][0]["url"]).to eq "https://mysite.com"
      expect(returned_json["websites"][0]["user"]["email"]).to eq "someone@gmail.com"
    end
  end

  describe "POST#create" do
    it "should create a new website" do
      post_json = {
        title: "Website",
        url: "https://somewebsite.com"
      }
      sign_in user

      prev_count = Website.count
      post(:create, params: post_json, format: :json)
      expect(Website.count).to eq(prev_count + 1)
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
      expect(returned_json["website"]["url"]).to eq "https://mysite.com"
    end
  end
end