const path = require('path');
module.exports = {
  plugins: [],
  module: {
    rules: [{
        test: /\.tsx?$/,
        use: 'ts-loader'
      },
      {
        test: /\.css/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
        ],
      },
      {
        test: /\.(jpg|png)$/,
        loaders: 'url-loader'
      }
    ],
  },
};