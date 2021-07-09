import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import PageBanner from "./PageBanner";

storiesOf("UI | 04 - Blocks/Page Banners", module)
  .addDecorator(withKnobs({ escapeHTML: false }))
  .add("Page Banner", () => (
    <PageBanner
      title={text("title", "This is the text heading component")}
      intro={text("intro", "This is the intro line")}
      content={`<p>
          Suspendisse potenti. Ut semper dolor in odio rutrum laoreet. Nunc quis
          maximus turpis. Orci varius natoque penatibus et{" "}
          <a href="#">magnis dis parturient</a> montes, nascetur ridiculus mus.
        </p>`}
      className={select(
        "Background",
        ["scheme--brand-grey", "scheme--brand-blue", "scheme--brand-blue-dark"],
        "scheme--brand-grey"
      )}
    />
  ));
