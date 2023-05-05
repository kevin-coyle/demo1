/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { CnCard } from '../fusion-card.js';

import { fixture, html } from '@open-wc/testing';

const assert = chai.assert;

suite('fusion-card', () => {
  test('is defined', () => {
    const el = document.createElement('fusion-card');
    assert.instanceOf(el, CnCard);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<fusion-card></fusion-card>`);
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
    const el = await fixture(html`<fusion-card name="Test"></fusion-card>`);
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
    const el = (await fixture(html`<fusion-card></fusion-card>`)) as CnCard;
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
    const el = (await fixture(html`<fusion-card></fusion-card>`)) as CnCard;
    await el.updateComplete;
    assert.equal(getComputedStyle(el).paddingTop, '16px');
  });
});
