class CreateVisits < ActiveRecord::Migration[5.2]
  def change
    create_table :visits do |t|
      t.string :path_visited, null: false
      t.string :referring_url, null: false
      t.timestamps

      t.belongs_to :website
    end
  end
end
