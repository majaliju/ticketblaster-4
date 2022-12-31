class Post < ApplicationRecord
  belongs_to :user
  belongs_to :concert

  validates :body, length: { minimum: 6}
  validates :tickets, numericality: { greater_than: 0, only_integer: true }



end
