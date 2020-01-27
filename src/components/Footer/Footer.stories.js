import React from 'react';
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";

import Footer from './Footer';

storiesOf("UI | 04 - Blocks/Footer", module)
  .addDecorator(withKnobs({ escapeHTML: false }))
  .add("Footer", () => (
    <Footer />
  ));
