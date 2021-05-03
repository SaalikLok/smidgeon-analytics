class Api::V1::WebsitesController < ApplicationController
  before_action :authenticate_user!

  def index
    @user = current_user
    render json: @user.websites
  end
end