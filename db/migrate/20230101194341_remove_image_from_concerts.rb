class RemoveImageFromConcerts < ActiveRecord::Migration[6.1]
  def change
    remove_column :concerts, :image, :string
  end
end
