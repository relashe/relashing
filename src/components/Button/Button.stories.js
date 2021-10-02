import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import Button from "./Button";

storiesOf("UI | 02 - Elements/Buttons", module)
  .addDecorator(withKnobs({ escapeHTML: false }))
  .add("Button - default", () => <Button text="button" />);
