# React.js application starter 2020

Usage: create fast prototypes, solve test tasks.

## Features:
* Routing
* Login and Main pages
* UI toolkit
* Redux configured. State can be saved/restored from localStorage.
* ApiService configured (abstraction level)
* PostCSS configured
* Custom build (dev, prod)
* Linting (JS, CSS), code formatting

## Tools:
* Babel, Webpack
* Separate webpack config for development and production. There is also a common part.
* webpack dev server with hot reloading
* ESlint, Stylelint
* Prettier
* PostCSS and autoprefixer
* Redux, redux-thunk + setup redux dev tools for development
* File structure
* Routing configured
* axios
* antd as default UI toolkit. Can be easily removed if not needed.
* As an example, the login and main page were added to the project.

## Building and running on localhost

First install dependencies:

```sh
npm install
```

To run in hot module reloading mode:

```sh
npm start
```

Open the file `http://localhost:8080` in your browser


To create a production build:

```sh
npm run build
```
