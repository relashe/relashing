import React from "react";
import { storiesOf } from "@storybook/react";

storiesOf("Core | Layout", module)
  .addParameters({
    options: { showPanel: false },
  })
  .add("Grid", () => (
    <div className="sg-grids grid-container fluid scheme--brand-white" style={{height: '100vh'}}>
      <div className="grid-x grid-margin-x grid-margin-y" style={{height: '100%'}}>

        <div className="cell screen460-6 scheme--brand-grey">6</div>
        <div className="cell screen460-6 scheme--brand-grey">6</div>

        <div className="cell screen460-6 screen768-2 scheme--brand-grey">2</div>
        <div className="cell screen460-6 screen768-2 scheme--brand-grey">2</div>
        <div className="cell screen460-6 screen768-2 scheme--brand-grey">2</div>
        <div className="cell screen460-6 screen768-2 scheme--brand-grey">2</div>
        <div className="cell screen460-6 screen768-2 scheme--brand-grey">2</div>
        <div className="cell screen460-6 screen768-2 scheme--brand-grey">2</div>

        <div className="cell screen460-6 screen768-1 scheme--brand-grey">1</div>
        <div className="cell screen460-6 screen768-1 scheme--brand-grey">1</div>
        <div className="cell screen460-6 screen768-1 scheme--brand-grey">1</div>
        <div className="cell screen460-6 screen768-1 scheme--brand-grey">1</div>
        <div className="cell screen460-6 screen768-1 scheme--brand-grey">1</div>
        <div className="cell screen460-6 screen768-1 scheme--brand-grey">1</div>
        <div className="cell screen460-6 screen768-1 scheme--brand-grey">1</div>
        <div className="cell screen460-6 screen768-1 scheme--brand-grey">1</div>
        <div className="cell screen460-6 screen768-1 scheme--brand-grey">1</div>
        <div className="cell screen460-6 screen768-1 scheme--brand-grey">1</div>
        <div className="cell screen460-6 screen768-1 scheme--brand-grey">1</div>
        <div className="cell screen460-6 screen768-1 scheme--brand-grey">1</div>

        <div className="cell screen460-6 screen768-3 scheme--brand-grey">3</div>
        <div className="cell screen460-6 screen768-3 scheme--brand-grey">3</div>
        <div className="cell screen460-6 screen768-3 scheme--brand-grey">3</div>
        <div className="cell screen460-6 screen768-3 scheme--brand-grey">3</div>

        <div className="cell screen460-6 screen768-4 scheme--brand-grey">4</div>
        <div className="cell screen460-6 screen768-4 scheme--brand-grey">4</div>
        <div className="cell screen460-6 screen768-4 scheme--brand-grey">4</div>

        <div className="cell screen460-6 screen768-7 scheme--brand-grey">7</div>
        <div className="cell screen460-6 screen768-5 scheme--brand-grey">5</div>

        <div className="cell screen460-6 screen768-3 scheme--brand-grey">3</div>
        <div className="cell screen460-6 screen768-9 scheme--brand-grey">9</div>

        <div className="cell screen460-6 screen768-10 screen768-offset-2 scheme--brand-grey">10 offset-2</div>

        <div className="cell screen460-6 screen768-4 screen768-offset-2 scheme--brand-grey">4 offset-2</div>
        <div className="cell screen460-6 screen768-4 screen768-offset-2 scheme--brand-grey">4 offset-2</div>

        <div className="cell screen768-3 screen768-offset-3 scheme--brand-grey">3 offset-3</div>
        <div className="cell screen768-3 screen768-offset-2 scheme--brand-grey">3 offset-2</div>

      </div>
    </div>
  ))
  .add("Page Layout", () => (
    <main class="page-main" id="main-content" style={{height: '100vh'}}>
      <div class="page-content" aria-disabled="false" style={{height: '100%'}}>
        <div
          class="scheme--brand-grey" 
          style={{
            height: '100%',
            width: '80%',
            margin: '0 10%',
            padding: '50px 10px'
          }}
        >
          <p>Page content goes here</p>
        </div>
      </div>
    </main>
  ));
