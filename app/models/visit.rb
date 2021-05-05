class Visit < ApplicationRecord
  validates :path_visited, presence: true
  validates :referring_url, presence: true

  belongs_to :website
end