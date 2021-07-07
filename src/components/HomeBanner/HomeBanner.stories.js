import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import HomeBanner from "./HomeBanner";

storiesOf("UI | 04 - Blocks/Page Banners", module).add("Home Banner", () => (
  <HomeBanner
    title={text("title", "Relashe")}
    titleLines={[
      "we got it.",
      "we got you.",
      "we can help you.",
      "we'll get there - together.",
      "let us help you.",
      "we care about you.",
      "we're on it.",
      "it's you and me.",
      "it's DAY_OF_THE_WEEK.",
    ]}
    intro={text("intro", `Intro goes here`)}
    className="scheme--brand-blue-dark"
  />
));
