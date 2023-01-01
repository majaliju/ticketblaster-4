class AddVenueImageToConcerts < ActiveRecord::Migration[6.1]
  def change
    add_column :concerts, :venue_image, :string
  end
end
