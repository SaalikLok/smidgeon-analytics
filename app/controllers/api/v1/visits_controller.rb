class Api::V1::VisitsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @visit = Visit.new(visit_params)
    origin_website = params[:origin]
    @visit.website = Website.find_by url: origin_website

    if @visit.save
      render json: @visit
    else
      render json: @visit.errors.full_messages.to_sentence
    end
  end

  protected

  def visit_params
    params.permit(:path_visited, :referring_url)
  end
end