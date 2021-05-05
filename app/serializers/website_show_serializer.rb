class WebsiteShowSerializer < ActiveModel::Serializer
  attributes :id, :title, :url, :user, :visits

  belongs_to :user
  has_many :visits
end
