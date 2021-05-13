require "rails_helper"

describe Api::V1::VisitsController, type: :controller do
  let!(:user) { User.create!(email: "someone@gmail.com", password: "123456", password_confirmation: "123456") }
  let!(:website) { Website.create!(title: "My site 1", url: "mysite1.com", user: user) }

  describe "POST#create" do
    it "should create a new visit" do
      sign_in user
      
      post_json = {
        referring_url: "https://twitter.com",
        path_visited: "/",
        origin: website.url
      }

      prev_count = Visit.count
      post(:create, params: post_json, format: :json)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(Visit.count).to eq(prev_count + 1)
    end

    it "should return the visit data" do
      sign_in user
      
      post_json = {
        referring_url: "https://twitter.com",
        path_visited: "/",
        origin: website.url
      }

      post(:create, params: post_json, format: :json)
      returned_json = JSON.parse(response.body)

      expect(returned_json["path_visited"]).to eq("/")
      expect(returned_json["referring_url"]).to eq("https://twitter.com")
      expect(returned_json["website_id"]).to eq(website.id)
    end
  end
end