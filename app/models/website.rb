class Website < ApplicationRecord
  validates :title, presence: true
  validates :url, presence: true, format: URI::regexp(%w[http https]), uniqueness: true

  belongs_to :user
end