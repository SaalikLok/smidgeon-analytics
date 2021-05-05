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
    params.require(:website).permit(:title, :url, :user)
  end

  def authorize_user
    if !user_signed_in? || !(current_user.role == "admin")
      render json: {error: ["Only admins have access to this feature"]}
    end
  end

  def authenticate_user
    if !user_signed_in?
      render json: {error: ["You need to be signed in first"]}
    end
  end
end