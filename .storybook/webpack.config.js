// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const path = require('path');
module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      }, 
      {
          test: /\.css/,
          use: [
            'style-loader',
            {loader: 'css-loader', options: {url: false}},
          ],
        },
        {
          test: /\.(jpg|png)$/,
          loaders: 'url-loader'
        }
    ],
  },
};
