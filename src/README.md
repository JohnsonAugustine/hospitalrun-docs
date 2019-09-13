# Documentation Application
> Application that servers public documentation on how to use Hospital Run. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available CRA Scripts

In the project directory, you can run:
### `npm storybook`

Runs the app in the storybook mode.<br>
Will open [http://localhost:9009](http://localhost:9009) automatically

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# Modules Export

## StoryBook Components

### [**Readme.tsx**](https://github.com/HospitalRun/hospitalrun-docs/blob/next/src/pages/ReadmePage.tsx) 
A standard README component, accepts Markdown string that is wrapped with the shared
header and about us templates.
```
import React from 'react';

import { storiesOf } from '@storybook/react';
import ReadmePage from '@hospitalrun-org/docs';

storiesOf('@hospitalrun-org/my-component', module)
    .add('ReadmePage', () => <ReadmePage markdown={require("../src/README.md")}/>)
```

## CLI 

### generate
Looks for a `./src/README.md` and pads it with About and Header from 
[templates](https://github.com/HospitalRun/hospitalrun-docs/tree/next/src/templates) to
generate the `./README.md`. This also looks for a `./github` folder and copies from the
[github template](https://github.com/HospitalRun/hospitalrun-docs/tree/next/src/templates/github)
if it does not exist  

**Adding documentation generator**
```
npm install @hospitalrun-org/docs --save-dev
```

**Running**
```
npx hospitalrun-docs generate
```

## Metadata
 - commands: Loaded by @hospitalrun-org/cli
 - distPath: Useful for CI