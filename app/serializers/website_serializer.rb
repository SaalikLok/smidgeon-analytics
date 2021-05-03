class WebsiteSerializer < ActiveModel::Serializer
  attributes :title, :url, :user

  belongs_to :user
end
