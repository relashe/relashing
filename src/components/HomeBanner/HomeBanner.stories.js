import React from 'react';
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";

import HomeBanner from './HomeBanner';

storiesOf("UI | 04 - Blocks/Page Banners", module)
  .addDecorator(withKnobs({ escapeHTML: false }))
  .add("Home Banner", () => (
    <HomeBanner
      title={text("title", "This is the text heading component")}
      intro={text("intro", `Suspendisse potenti. Ut semper dolor in odio rutrum laoreet. Nunc quis maximus turpis.
      Orci varius natoque penatibus et <a href="#">magnis dis parturient</a> montes, nascetur ridiculus mus.`)}
      className="scheme--brand-blue-dark"
    />
  ));
