# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

How RTe-render works: Scenario:
Divided into the Render phase and Commit Phase

Render Phase:
1. Find all elements flagged for update.
2. For each flagged component, convert JSX to React element using the createElement() method and store the result
3. Perform reconcilliation - Diff old and new tree od the react elelements (a.k.a Virtual DOM).
4. Handover to changes to the next phase

Commit Phase 
1. Apply changes to the DOM.


React by default logs one log statement twice. This is because of the strict mode encouraged by react. In the index.js, the <App /> is wrapped within the <React.StrictMode> which intentionally double invokes the functional component only in developer mode, but logs one in production mode. The solution is to comment the restrict mode out.

UseState:
Render Phase - React will go thorugh the component tree and flag the changed components and finds only use state needs an update. React then uses the createElement() method to convert the JSX to a React Element. It will then diff the element created from the previous render to the new render, identify the changes and handover to the commit phase then have them applied to the DOM.
1. After the intial render - if you call a set of functions and set the state to the same value the component will not re-render
2. After the component has been rerendered, if you set the state to the same value the component will rerender but only one more time.

React flags the components that have been changed. React requires that useState updates must pass in or return a new reference as the state value. If the state is a primitive type, it has to be a new string, number or boolean. If not the case React will bail out. The bailing out can be a result of two cases:
1. If the initial render is completed and the value passed in is the same as before it bails out.
2. If the component has been re-rendered already, it will proceed and renders once then bails out without going to the commit since the value is the same.

Summary on UseState:
The setter function from a useState hook will cause the component to re-render.
The exception is when you update a state Hook to the same value as the current state.
Same value after the initial render? The component will not rerender.
Same value after re-renders? React will render that specific component one more time and then bail out from any subsequenct renders.

UseReducer:
Behaves similar to the UseState hook with regards flagging and the render and commit phases.
If you reload the page, the component does its intial render. If you click on the reset button which passes the same intial value, However, in the recent versions of react the bail out has been removed.
