import React from "react";
import { storiesOf } from "@storybook/react";
import FontSet from "../../storybook-components/FontSet/FontSet";

storiesOf("Core | Typography", module)
  .addParameters({
    options: { showPanel: false },
  })
  .add("Font Families", () => (
    <div className="grid-x grid-margin-x grid-margin-y">
      <div className="cell">
        <p class="t-heading-2 t-font-arapey-light t-font-heading">Arapey</p>
        <p class="t-heading-2 t-font-title-2">Raleway Semi-bold</p>
        <p class="t-heading-2 t-font-default">Raleway Light</p>
      </div>
    </div>
  ))
  .add("Font Sizes", () => (
    <div className="grid-x grid-margin-x grid-margin-y">
      <div className="cell">
        <FontSet name="Heading 1" fontClass="t-heading-1" sizePx={["56px", "82px"]} lineHeightPx="1.1" />
      </div>
      <div className="cell">
        <FontSet name="Heading 2" fontClass="t-heading-2" sizePx={["42px", "60px"]} lineHeightPx="1.2" />
      </div>
      <div className="cell">
        <FontSet name="Heading 3"fontClass="t-heading-3" sizePx={["32px", "40px"]} lineHeightPx="1.6" />
      </div>
      <div className="cell">
        <FontSet name="Title 1"fontClass="t-title-1" sizePx={["24px"]} lineHeightPx="1.6" />
      </div>
      <div className="cell">
        <FontSet name="Title 2"fontClass="t-title-2" sizePx={["20px"]} lineHeightPx="1.2" />
      </div>
      <div className="cell">
        <FontSet name="Body copy (large)" fontClass="t-copy-large" sizePx={["16px"]} lineHeightPx="2" />
      </div>
      <div className="cell">
        <FontSet name="Body copy (default)"fontClass="t-copy" sizePx={["14px"]} lineHeightPx="2" />
      </div>
      <div className="cell">
        <FontSet name="Body copy (small)"fontClass="t-copy-small" sizePx={["12px"]} lineHeightPx="1.8" />
      </div>
    </div>
  ));
