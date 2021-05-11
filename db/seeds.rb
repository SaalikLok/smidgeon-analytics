# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create!(email: "testing@gmail.com", password: "123456", password_confirmation: "123456")

website = Website.create(title: "Snippet Testing Site", url: "testing-snippets.surge.sh", user: user)

53.times do
  Visit.create(referring_url: "", path_visited: "/index.html", website: website, created_at: "2021-01-05T14:48:00.000Z")
end

36.times do
  Visit.create(referring_url: "", path_visited: "/about.html", website: website, created_at: "2021-02-05T14:48:00.000Z")
end

76.times do
  Visit.create(referring_url: "", path_visited: "/index.html", website: website, created_at: "2021-03-05T14:48:00.000Z")
end

47.times do
  Visit.create(referring_url: "", path_visited: "/index.html", website: website, created_at: "2021-04-05T14:48:00.000Z")
end

25.times do
  Visit.create(referring_url: "", path_visited: "/index.html", website: website, created_at: "2021-05-05T14:48:00.000Z")
end
