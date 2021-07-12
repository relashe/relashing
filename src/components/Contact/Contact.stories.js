import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import BodyCopy from "../BodyCopy/BodyCopy";
import Contact from "./Contact";

storiesOf("UI | 04 - Blocks/Containers", module)
  .addDecorator(withKnobs({ escapeHTML: false }))
  .add("Content container", () => (
    <Contact heading={`Contact heading`} className="scheme--brand-blue-dark" />
  ));
