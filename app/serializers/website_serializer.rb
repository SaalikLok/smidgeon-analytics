class WebsiteSerializer < ActiveModel::Serializer
  attributes :id, :title, :url, :user

  belongs_to :user
end
