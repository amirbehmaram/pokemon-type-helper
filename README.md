# pokemon-type-helper
React app that helps you determine what strengths &amp; weaknesses various Pokémon types have.

As I'm continuing to learn React I figured this would be something handy to build that I would
actually use.

At the moment the plan is for this to just live on Github Pages as a standalone React app and that's it.
I might look into a domain name if it actually ends up looking presentable.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn deploy`

Deploys the app up to Github pages. Runs the predeploy task first which just runs `yarn build` then takes the output of that
and pushes it up to the gh-pages branch which houses the actual code for the app.
