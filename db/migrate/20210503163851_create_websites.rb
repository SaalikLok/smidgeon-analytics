class CreateWebsites < ActiveRecord::Migration[5.2]
  def change
    create_table :websites do |t|
      t.string :title, null: false
      t.string :url, null: false
      t.timestamps

      t.belongs_to :user
    end
  end
end
