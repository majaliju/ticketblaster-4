class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email

  has_many :posts, serializer: PostSerializer
  # has_many :concerts, through: :posts, serializer: ConcertSerializer do object.concerts.distinct end
  has_many :concerts, through: :posts, serializer: ConcertSerializer 
end
