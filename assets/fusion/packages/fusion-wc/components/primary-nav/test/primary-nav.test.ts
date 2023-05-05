/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { CnPrimaryNav } from '../fusion-primary-nav.js';

import { fixture, html } from '@open-wc/testing';

const assert = chai.assert;

suite('fusion-primary-nav', () => {
  test('is defined', () => {
    const el = document.createElement('fusion-primary-nav');
    assert.instanceOf(el, CnPrimaryNav);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<fusion-primary-nav></fusion-primary-nav>`);
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
    const el = await fixture(html`<fusion-primary-nav name="Test"></fusion-primary-nav>`);
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
    const el = (await fixture(html`<fusion-primary-nav></fusion-primary-nav>`)) as CnPrimaryNav;
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
    const el = (await fixture(html`<fusion-primary-nav></fusion-primary-nav>`)) as CnPrimaryNav;
    await el.updateComplete;
    assert.equal(getComputedStyle(el).paddingTop, '16px');
  });
});
