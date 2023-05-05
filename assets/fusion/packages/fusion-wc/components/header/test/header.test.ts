/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { CnHeader } from '../fusion-header.js';

import { fixture, html } from '@open-wc/testing';

const assert = chai.assert;

suite('fusion-header', () => {
  test('is defined', () => {
    const el = document.createElement('fusion-header');
    assert.instanceOf(el, CnHeader);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<fusion-header></fusion-header>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('renders with a set name', async () => {
    const el = await fixture(html`<fusion-header name="Test"></fusion-header>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, Test!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('handles a click', async () => {
    const el = (await fixture(html`<fusion-header></fusion-header>`)) as CnHeader;
    const button = el.shadowRoot!.querySelector('button')!;
    button.click();
    await el.updateComplete;
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 1</button>
      <slot></slot>
    `
    );
  });

  test('styling applied', async () => {
    const el = (await fixture(html`<fusion-header></fusion-header>`)) as CnHeader;
    await el.updateComplete;
    assert.equal(getComputedStyle(el).paddingTop, '16px');
  });
});
