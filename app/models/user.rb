class User < ApplicationRecord
  has_secure_password

  validates_uniqueness_of :username, presence: true

  validates :username, presence: true, uniqueness: true
  validates :password, length: { minimum: 8, maximum: 254}
  validates_presence_of :email
    validates_format_of :email, with: URI::MailTo::EMAIL_REGEXP
  # validates :my_email_attribute, email: true, presence: true

  has_many :posts
  has_many :concerts, -> { distinct }, through: :posts


end
