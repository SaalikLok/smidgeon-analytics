class VisitsSerializer < ActiveModel::Serializer
  attributes :path_visited, :referring_url, :created_at

  belongs_to :website
end
