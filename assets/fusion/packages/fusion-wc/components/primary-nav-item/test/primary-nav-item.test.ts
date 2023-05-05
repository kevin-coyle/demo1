/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { CnPrimaryNavItem } from '../fusion-primary-nav-item.js';

import { fixture, html } from '@open-wc/testing';

const assert = chai.assert;

suite('fusion-primary-nav-item', () => {
  test('is defined', () => {
    const el = document.createElement('fusion-primary-nav-item');
    assert.instanceOf(el, CnPrimaryNavItem);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<fusion-primary-nav-item></fusion-primary-nav-item>`);
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
    const el = await fixture(html`<fusion-primary-nav-item name="Test"></fusion-primary-nav-item>`);
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
    const el = (await fixture(html`<fusion-primary-nav-item></fusion-primary-nav-item>`)) as CnPrimaryNavItem;
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
    const el = (await fixture(html`<fusion-primary-nav-item></fusion-primary-nav-item>`)) as CnPrimaryNavItem;
    await el.updateComplete;
    assert.equal(getComputedStyle(el).paddingTop, '16px');
  });
});
