import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import BodyCopy from "../BodyCopy/BodyCopy";
import ContentContainer from "./ContentContainer";

storiesOf("UI | 04 - Blocks/Containers", module)
  .addDecorator(withKnobs({ escapeHTML: false }))
  .add("Content container", () => (
    <ContentContainer className="scheme--brand-blue-dark">
      <BodyCopy>
        <h2 className="t-heading-2">This is a title</h2>
        <p>
          This is a <span className="t-font-bold">normal</span> paragraph with a
          link in it:{" "}
          <a href="#link" className="t-link">
            organisation
          </a>{" "}
          and some more Lipsum. In pellentesque ligula lectus, vitae maximus
          justo venenatis quis. Vivamus at arcu viverra, pellentesque ipsum et,
          convallis urna. Etiam et diam in elit pulvinar placerat.
        </p>
      </BodyCopy>
    </ContentContainer>
  ));
