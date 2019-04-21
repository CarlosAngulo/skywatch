# Skywatch

This project is a forecast application which displays some european cities weather information using the Open Weather Map API.
It was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1.

## Runing Skywatch

Before runing this application, please clone this on your local and then:

- Run `npm install` to install all the dependencies.
- Run `ng serve -o`
- Your browser will open a new table in the URL `http://localhost:4200/` where the app will be runing.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Routes
- `/` Home
- `/dashboard` Shows the list of the cities with the information or their weather.
- `/city/:id` Shows the forecast of the choosen city.
