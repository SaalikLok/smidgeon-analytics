class VisitsSerializer < ActiveModel::Serializer
  attributes :id, :path_visited, :referring_url

  belongs_to :website
end
