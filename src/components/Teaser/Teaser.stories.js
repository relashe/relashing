import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import Teaser from "./Teaser";

storiesOf("UI | 04 - Blocks/Banners", module)
  .addDecorator(withKnobs({ escapeHTML: false }))
  .add("Teaser", () => (
    <Teaser
      content={
        <p>
          Suspendisse potenti. Ut semper dolor in odio rutrum laoreet. Nunc quis
          maximus turpis. Orci varius natoque penatibus et{" "}
          <a href="#">magnis dis parturient</a> montes, nascetur ridiculus mus.
        </p>
      }
      // className={select(
      //   "Background",
      //   ["scheme--brand-grey", "scheme--brand-blue", "scheme--brand-blue-dark"],
      //   "scheme--brand-grey"
      // )}
      className="scheme--brand-grey"
    />
  ));
