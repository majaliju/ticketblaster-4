class Post < ApplicationRecord
  belongs_to :user
  belongs_to :concert

  validates :body, presence: true
  validates :tickets, presence: true, numericality: { greater_than: 0 }


end
