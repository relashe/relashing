import React from 'react';
import { storiesOf } from "@storybook/react";

import Homepage from "./Homepage";

storiesOf("UI | 06 - Pages", module)
  .add("Homepage", () => (
    <Homepage>
        This is the homepage
    </Homepage>
  ));
