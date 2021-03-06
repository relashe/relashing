import React from "react";
import { storiesOf } from "@storybook/react";
import ColorSwatch from "../../storybook-components/ColorSwatch/ColorSwatch";

storiesOf("Core | Colours", module)
  .addParameters({
    options: { showPanel: false },
  })

const palettes = storiesOf("Core | Colours/Palettes", module)
  .addParameters({
    options: { showPanel: false },
  });

palettes
  .add("Core brand colours", () => (
    <div className="grid-x grid-margin-x grid-margin-y">
      <div className="cell screen768-6">
        <ColorSwatch name="Relashe Blue" color="#173450" variable="get-colour(brand-blue)" />
      </div>
      <div className="cell screen768-6">
        <ColorSwatch name="Relashe Blue Light" color="#3C6183" variable="get-colour(brand-blue-light)" />
      </div>
      <div className="cell screen768-6">
        <ColorSwatch name="Relashe Blue Dark" color="#161724" variable="get-colour(brand-blue-dark)" />
      </div>
      <div className="cell screen768-6">
        <ColorSwatch name="Relashe Grey" color="#f0f0f0" variable="get-colour(brand-grey)" />
      </div>
    </div>
  ))
  .add("Typography colours", () => (
    <div className="grid-x grid-margin-x grid-margin-y">
      <div className="cell screen768-6">
        <ColorSwatch name="Title" color="#000000" variable="get-colour(brand-title)" />
      </div>
      <div className="cell screen768-6">
        <ColorSwatch name="Text" color="#000000" variable="get-colour(brand-text)" />
      </div>
      <div className="cell screen768-6">
        <ColorSwatch name="Link" color="currentColor" variable="get-colour(brand-link)" />
      </div>
    </div>
  ));
