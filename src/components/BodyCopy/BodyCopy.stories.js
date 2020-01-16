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
        This is a <span className="t-font-bold">normal</span> paragraph with a link in it: <a href="#link" className="t-link">organisation</a> and some more Lipsum.
        In pellentesque ligula lectus, vitae maximus justo venenatis quis. Vivamus at arcu viverra, pellentesque ipsum et, convallis
        urna. Etiam et diam in elit pulvinar placerat.
      </p>

      <p className="t-copy-small">
        This is a <span className="t-font-bold">small</span> paragraph with a link in it: <a href="#link" className="t-link-small">organisation</a> and some more Lipsum.
        In pellentesque ligula lectus, vitae maximus justo venenatis quis. Vivamus at arcu viverra, pellentesque ipsum et, convallis
        urna. Etiam et diam in elit pulvinar placerat.
      </p>

      <p className="t-copy-large">
        This is a <span className="t-font-bold">large</span> paragraph with a link in it: <a href="#link" className="t-link-large">organisation</a> and some more Lipsum.
        In pellentesque ligula lectus, vitae maximus justo venenatis quis. Vivamus at arcu viverra, pellentesque ipsum et, convallis
        urna. Etiam et diam in elit pulvinar placerat.
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
          Now, this is a small Quote with the author cited below. 
        </p>
        <cite>Arthur Priddle</cite>
      </blockquote>
      <p>
        <a href="#link" className="t-link-large">This is a large link</a>
      </p>
      <p>
        <a href="#link" className="t-link">This is a normal link</a>
      </p>
      <p>
        <a href="#link" className="t-link-small">This is a small link</a>
      </p>
    </BodyCopy>
  ));
