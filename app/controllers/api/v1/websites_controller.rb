class Api::V1::WebsitesController < ApplicationController
  before_action :authenticate_user!
  skip_before_action :verify_authenticity_token

  def index
    @user = current_user
    render json: @user.websites
  end

  def create
    website = Website.new(website_params)
    website.user = current_user

    if website.save
      render json: website
    else
      render json: website.errors.full_messages.to_sentence
    end
  end

  protected

  def website_params
    params.permit(:title, :url)
  end

  def authenticate_user
    if !user_signed_in?
      render json: {error: ["You need to be signed in first"]}
    end
  end
end