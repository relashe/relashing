import React from 'react';
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";

import Header from './Header';
import PageMain from '../pages/PageMain/PageMain';

storiesOf("UI | 04 - Blocks", module)
  .add("Header", () => (
    <PageMain>
      <Header />
    </PageMain>
  ));
