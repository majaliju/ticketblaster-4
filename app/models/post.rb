class Post < ApplicationRecord
  belongs_to :user
  belongs_to :concert

  validates :body, presence: true
  validates :tickets, presence: true, numericality: { greater_than: 0 }
  validates :user_id, uniqueness: { scope: :concert_id }
  validates :concert_id, uniqueness: {scope: :user_id}


end
