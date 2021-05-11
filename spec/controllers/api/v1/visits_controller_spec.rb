require "rails_helper"

describe Api::V1::VisitsController, type: :controller do
  let!(:user) { User.create!(email: "someone@gmail.com", password: "123456", password_confirmation: "123456") }
  let!(:website) { Website.create!(title: "My site", url: "mysite.com", user: user) }

  describe "POST#create" do
    it "should create a new visit" do
      post_json = {
        referring_url: "https://twitter.com",
        path_visited: "/",
        website_id: website.id
      }
      sign_in user

      prev_count = Visit.count
      post(:create, params: post_json, format: :json)
      returned_json = JSON.parse(response.body)
      binding.pry

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(Visit.count).to eq(prev_count + 1)
    end
  end
end