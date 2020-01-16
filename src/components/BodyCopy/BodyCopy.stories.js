import React from 'react';
import { storiesOf } from "@storybook/react";

import PreviewContainer from "../../storybook-components/PreviewContainer/PreviewContainer";

import BodyCopy from './BodyCopy';

storiesOf("UI | 02 - Elements", module)
.addDecorator(story => (
  <PreviewContainer innerStyle={{ maxWidth: "52rem" }}>{story()}</PreviewContainer>
))
  .add("Body Copy", () => (
    <BodyCopy>
      <h1 className="t-heading-1">This is a title</h1>
      <h2 className="t-heading-2">This is a title</h2>
      <h3 className="t-title-1">This is a title</h3>
      <h4 className="t-title-2">This is a title</h4>

      <p>
        Business leadership is looking to the audit function to assess not only tone and conduct at
        the top of the <a href="#link">organisation</a>, but also how and if those things are
        reflected throughout the business.
      </p>
      <ul>
        <li>
          This is a bullet item
          <ul>
            <li>This is a bullet item</li>
            <li>This is another bullet item</li>
            <li>This is what it looks like over two lines</li>
            <li>This is the last bullet item</li>
          </ul>
        </li>
        <li>This is another bullet item</li>
        <li>This is what it looks like over two lines</li>
        <li>This is the last bullet item</li>
      </ul>
      <ol>
        <li>
          This is a bullet item
          <ol>
            <li>This is a bullet item</li>
            <li>This is another bullet item</li>
            <li>This is what it looks like over two lines</li>
            <li>This is the last bullet item</li>
          </ol>
        </li>
        <li>This is another bullet item</li>
        <li>This is what it looks like over two lines</li>
        <li>This is the last bullet item</li>
      </ol>
      <blockquote>
        <p>
          Internal auditing is an independent, <a href="#link">objective assurance</a> and
          consulting activity designed to add value and improve an organisation’s operations.
        </p>
        <cite>Arthur Priddle</cite>
      </blockquote>
    </BodyCopy>
  ));
