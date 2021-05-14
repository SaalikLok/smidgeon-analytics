[![Codeship Status for SaalikLok/smidgeon-analytics](https://app.codeship.com/projects/ba7db401-22c9-477a-9297-faabe91164ce/status?branch=main)](https://app.codeship.com/projects/443342)

# Smidgeon Analytics 🦜
A small, dead-simple, and open source analytics tool that tracks page views on your website or blog.

## Using the App
A hosted version of Smidgeon is available for you to use! Simply use the link in this repository. Note that it's using a free or hobby Heroku instance, so this free-to-use hosted version isn't as performant for websites that get a high volume of traffic.

If you're a developer, and want to run Smidgeon locally or create your own instance of it, read on.

## Running Locally
To get Smidgeon running locally on your machine:

**Have These Installed**
- Ruby v2.7.3
- Ruby on Rails
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


## Future Features

- Advanced data visualizations for referring urls and paths visited
- Granular time-based filtering

## Contributing
If you'd like to contribute to Smidgeon Analytics, feel free to clone the repository (see Running Locally for detailed setup), make changes, and create a pull request!


MIT Licensed.
