ES6 modules setup
- mkdir es6modules
- create entry point - file app.js
- npm init in this directory - answer all questions
- npm install lodash flickity jsonp --save (jsonp needed for fetch api)
- in app.js | import { uniq } from 'lodash';
- create index.html
- - import is not supported, we need a webpack to save the deal)
- npm install webpack --save-dev
- npm install babel-loader babel-core babel-preset-es2015-native-modules --save-dev
- create webpack.config.js and require webpack there and nodeEnv
- fill in the rest of the webpack config
- setup build script in package.json
- npm run build
- change in app.js source link to bundle.js



Steps to create your own js modules
