import { configure } from '@storybook/react';

import "../src/styles/app.scss"; // this is where you link your global styles

const req = require.context("../src", true, /\.stories\.js$/);

function loadStories() {
//   require("../src/guidelines/welcome/welcome.stories.js");
//   require("../src/core/colours/colours.stories.js");

  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);