class Website < ApplicationRecord
  validates :title, presence: true
  validates :url, presence: true, uniqueness: true

  belongs_to :user
  has_many :visits, dependent: :destroy
end