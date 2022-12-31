class Post < ApplicationRecord
  belongs_to :user
  belongs_to :concert

  validates :body, presence: true, length: { minimum: 6}
  validates :tickets, presence: true, numericality: { greater_than: 0, only_integer: true }



end
