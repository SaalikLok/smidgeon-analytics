class VisitsController < ApplicationController
  def create
    @visit = Visit.new(visit_params)

    binding.pry

    # find correct website by matching the domain name of the full path use pry for finding params
    @visit.website = Website.find(1)

    if @visit.save
      render json: @visit
    else
      render json: @visit.errors.full_messages.to_sentence
    end
  end

  protected

  def visit_params
    binding.pry
    params.permit()
  end
end