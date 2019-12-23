const path = require("path");

const sourcePath = path.join(__dirname, "../src");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "resolve-url-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
    //   {
    //     test: /\.svg$/,
    //     use: [
    //       {
    //         loader: "babel-loader",
    //       },
    //       {
    //         loader: "react-svg-loader",
    //         options: {
    //           jsx: true,
    //         },
    //       },
    //     ],
    //     include: path.resolve(sourcePath, "assets/svg"),
    //   },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        include: path.resolve(sourcePath, "assets/fonts"),
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/fonts/",
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        include: path.resolve(sourcePath, "assets/images"),
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "assets/images/",
          },
        },
      },
    ],
  },
};
