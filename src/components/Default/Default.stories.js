import React from 'react';
import { Button } from '@storybook/react/demo';
import { storiesOf } from "@storybook/react";

storiesOf("UI Kit Elements | Alert", module)
//   .addDecorator(addReadme)
//   .addParameters({
//     readme: {
//       content: README,
//     },
//   })
  .add("Default Button", () => (
    <Button>Hello Button</Button>
  ));
