# nodejs-api-framework

An API framework using Nodejs, Express, Mongo

## Purpose

Provides a simple framework for creating an API service using Node with Mongo DB.

The data model provided is based on a User - Adding, Listing, Deleting, Updating DB Collections.

The framework defines Middleware to isolate the HTTP Protocol Routes making it cleaner to manage.

## Packages Installed

- node
- nodemon
- express
- mongodb
- dotenv

## Third-party Utilities

These tools and services are used for testing.

- MongoDb Atlas for DB hosting (https://www.mongodb.com/)
- Mongo Compass for a DB GUI (https://www.mongodb.com/products/compass)
- Postman for testing (https://www.postman.com/)

## Mongo Database Configuration

Change the .env.example file to .env locally on your system and update the DB_CONNECTION string with your MongoDB Atlas User/Password.

TIP: Insure you grant user permissions and network permissions within your DB service to avoid connection issues.

You can also replace this with your prefered Mongo DB connection string.
