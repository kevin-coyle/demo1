/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { CnLogo } from '../fusion-logo.js';

import { fixture, html } from '@open-wc/testing';

const assert = chai.assert;

suite('fusion-logo', () => {
  test('is defined', () => {
    const el = document.createElement('fusion-logo');
    assert.instanceOf(el, CnLogo);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<fusion-logo></fusion-logo>`);
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
    const el = await fixture(html`<fusion-logo name="Test"></fusion-logo>`);
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
    const el = (await fixture(html`<fusion-logo></fusion-logo>`)) as CnLogo;
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
    const el = (await fixture(html`<fusion-logo></fusion-logo>`)) as CnLogo;
    await el.updateComplete;
    assert.equal(getComputedStyle(el).paddingTop, '16px');
  });
});
