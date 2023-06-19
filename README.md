New-horizons is a simple application to get people to expand their horizons and try new things. We wanted to be able to recommend users new activities based on previous activities they've tried. We built a simple collaborative filtering recommendations system with the mathjs library and using user rankings to find new things for users to try that they might like. 
We have plenty of features we would still like to add like connecting users on our platform so they can try out new activities together and giving feedback to users about the features we think they would like most in an activity. We may also want to suggest new activities to users either at random or specifically against our own recommendations to get people to really push their boundaries and maybe find out that they would like something they might never have even considered. 
We would also like to expand our database to have even more activities and users to give more and better recommendations. 

## Start
run npm `run install` to install dependencies from package.json.
create a local postgres database called new-horizons
Sync and seed your database by running `npm run seed`. Running npm run start:dev or start:dev-win will make great things happen! The server will run on port 8080.

- start:dev will both start your server and build your client side files using webpack
- start:dev:logger is the same as start:dev, but you will see your SQL queries (can be helpful for debugging)
- start:dev:seed will start your server and also seed your database (this is useful when you are making schema changes and you don't want to run your seed script separately)


### Heroku
Deployed but not yet fully set up
https://new-horizons-app.herokuapp.com/
