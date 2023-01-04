Heads up: This project is not actively developed or maintained.

# Smidgeon Analytics 🦜
A small, dead-simple, and open source analytics tool that tracks page views on your website or blog.
Originally written as my bootcamp breakable toy.

Feel free to check out the code or self-host it if you like.

## Running Locally
To get Smidgeon running locally on your machine:

**Uses**

- Ruby 2.7.3
- Rails 5
- PostgreSQL
- NodeJS

**Follow These Steps**

1. Clone this repository.
2. `cd` to the directory and create the database locally with `bundle exec rake db:create`
3. Apply database migrations `bundle exec rake db:migrate`
4. To start the Rails backend: `bundle exec rails s`
5. In another terminal tab, install frontend dependencies: `yarn`
6. Start the webpack dev server: `yarn start`
7. Navigate to `localhost:3000` to see the app running

