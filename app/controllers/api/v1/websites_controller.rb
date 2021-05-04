class Api::V1::WebsitesController < ApplicationController
  before_action :authenticate_user!
  skip_before_action :verify_authenticity_token

  def index
    @user = current_user
    render json: @user.websites
  end

  def create
    @user = current_user
    website = Website.new(title: params[:title], url: params[:url], user: @user)

    if website.save
      render json: website
    else
      render json: website.errors.full_messages.to_sentence
    end
  end
end