class CreateConcerts < ActiveRecord::Migration[6.1]
  def change
    create_table :concerts do |t|
      t.date :date
      t.string :location
      t.string :image
      t.integer :artist_id

      t.timestamps
    end
  end
end
