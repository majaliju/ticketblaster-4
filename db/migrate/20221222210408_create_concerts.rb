class CreateConcerts < ActiveRecord::Migration[6.1]
  def change
    create_table :concerts do |t|
      t.datetime :date
      t.string :location
      t.integer :artist_id

      t.timestamps
    end
  end
end
