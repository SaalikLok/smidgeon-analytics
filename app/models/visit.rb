class Visit < ApplicationRecord
  validates :path_visited, presence: true

  belongs_to :website
end