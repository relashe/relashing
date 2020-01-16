import React from 'react';
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";

import Teaser from './Teaser';

storiesOf("UI | 04 - Blocks/Banners", module)
  .addDecorator(withKnobs({ escapeHTML: false }))
  .add("Teaser", () => (
    <Teaser
      title={text("title", "This is the text heading component")}
      intro={text("intro", "This is the intro line")}
      content={
        <p>
          Suspendisse potenti. Ut semper dolor in odio rutrum laoreet. Nunc quis maximus turpis.
          Orci varius natoque penatibus et <a href="#">magnis dis parturient</a> montes, nascetur ridiculus mus.
        </p>
      }
    />
  ));
