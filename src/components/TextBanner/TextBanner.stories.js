import React from 'react';
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";

import TextBanner from './TextBanner';

storiesOf("UI | 04 - Blocks/Banners", module)
  .addDecorator(withKnobs({ escapeHTML: false }))
  .add("Text Banner", () => (
    <TextBanner
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
