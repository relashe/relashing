import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import ServiceCard from "./ServiceCard";
import ServiceCardContainer from "./ServiceCardContainer";

storiesOf("UI | 04 - Blocks/Cards", module)
  .addDecorator(withKnobs({ escapeHTML: false }))
  .add("Service Card", () => (
    <ServiceCard
      title="The Service Card"
      description="
          Suspendisse potenti. Ut semper dolor in odio rutrum laoreet. Nunc quis
          maximus turpis. Orci varius natoque penatibus et
          "
    />
  ));

storiesOf("UI | 04 - Blocks/Containers", module)
  .addDecorator(withKnobs({ escapeHTML: false }))
  .add("Service Card Container", () => (
    <ServiceCardContainer>
      <ServiceCard
        title="The Service Card"
        description="
        Suspendisse potenti. Ut semper dolor in odio rutrum laoreet. Nunc quis
        maximus turpis. Orci varius natoque penatibus et
        "
        imageClassName="scheme--brand-blue-light"
      />
      <ServiceCard
        title="The Service Card"
        description="
        Suspendisse potenti. Ut semper dolor in odio rutrum laoreet. Nunc quis
        maximus turpis. Orci varius natoque penatibus et
        "
        imageClassName="scheme--brand-blue-dark"
      />
      <ServiceCard
        title="The Service Card"
        description="
        Suspendisse potenti. Ut semper dolor in odio rutrum laoreet. Nunc quis
        maximus turpis. Orci varius natoque penatibus et
        maximus turpis. Orci varius natoque penatibus et
        maximus turpis. Orci varius natoque penatibus et
        maximus turpis. Orci varius natoque penatibus et
        "
      />
    </ServiceCardContainer>
  ));
