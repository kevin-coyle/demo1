import { html } from 'lit';
import { spread } from '../../directives/spread';
import '../link-list-item/link-list-item';
import './link-list';

export default {
  title: 'Molecules/Navigation/Link List',
  component: 'fusion-link-list'
};

export const Default = (args) => html`<fusion-link-list ${spread(args)}>
  <fusion-link-list-item href="#" text="Link item 1"></fusion-link-list-item>
  <fusion-link-list-item href="#" text="Link item 2"></fusion-link-list-item>
  <fusion-link-list-item href="#" text="Link item 3 with a longer title"></fusion-link-list-item>
  <fusion-link-list-item href="#" text="Link item 4"></fusion-link-list-item>
  <fusion-link-list-item href="#" text="Link item 5"></fusion-link-list-item>
</fusion-link-list>`;

export const Secondary = () => html`<fusion-link-list variant="secondary">
  <fusion-link-list-item href="#" text="Link item 1"></fusion-link-list-item>
  <fusion-link-list-item href="#" text="Link item 2"></fusion-link-list-item>
  <fusion-link-list-item href="#" text="Link item 3 with a longer title"></fusion-link-list-item>
  <fusion-link-list-item href="#" text="Link item 4"></fusion-link-list-item>
  <fusion-link-list-item href="#" text="Link item 5"></fusion-link-list-item>
</fusion-link-list>`;

export const Inverted = () => html`<div style="background: black">
  <fusion-link-list inverted="true">
    <fusion-link-list-item href="#" text="Link item 1"></fusion-link-list-item>
    <fusion-link-list-item href="#" text="Link item 2"></fusion-link-list-item>
    <fusion-link-list-item href="#" text="Link item 3 with a longer title"></fusion-link-list-item>
    <fusion-link-list-item href="#" text="Link item 4"></fusion-link-list-item>
    <fusion-link-list-item href="#" text="Link item 5"></fusion-link-list-item>
  </fusion-link-list>
</div>`;

export const Display = () => html` <fusion-link-list variant="display">
  <fusion-link-list-item href="#" text="Link item 1"></fusion-link-list-item>
  <fusion-link-list-item href="#" text="Link item 2"></fusion-link-list-item>
  <fusion-link-list-item href="#" text="Link item 3 with a longer title"></fusion-link-list-item>
  <fusion-link-list-item href="#" text="Link item 4"></fusion-link-list-item>
  <fusion-link-list-item href="#" text="Link item 5"></fusion-link-list-item>
</fusion-link-list>`;

export const SecondaryInverted = () => html`<div style="background: black">
  <fusion-link-list variant="secondary" inverted="true">
    <fusion-link-list-item href="#" text="Link item 1"></fusion-link-list-item>
    <fusion-link-list-item href="#" text="Link item 2"></fusion-link-list-item>
    <fusion-link-list-item href="#" text="Link item 3 with a longer title"></fusion-link-list-item>
    <fusion-link-list-item href="#" text="Link item 4"></fusion-link-list-item>
    <fusion-link-list-item href="#" text="Link item 5"></fusion-link-list-item>
  </fusion-link-list>
</div>`;

export const Condensed = () => html`<fusion-link-list spacing="condensed">
  <fusion-link-list-item href="#" text="Link item 1"></fusion-link-list-item>
  <fusion-link-list-item href="#" text="Link item 2"></fusion-link-list-item>
  <fusion-link-list-item href="#" text="Link item 3 with a longer title"></fusion-link-list-item>
  <fusion-link-list-item href="#" text="Link item 4"></fusion-link-list-item>
  <fusion-link-list-item href="#" text="Link item 5"></fusion-link-list-item>
</fusion-link-list>`;

export const Small = () => html`<fusion-link-list size="sm">
  <fusion-link-list-item href="#" text="Link item 1"></fusion-link-list-item>
  <fusion-link-list-item href="#" text="Link item 2"></fusion-link-list-item>
  <fusion-link-list-item href="#" text="Link item 3 with a longer title"></fusion-link-list-item>
  <fusion-link-list-item href="#" text="Link item 4"></fusion-link-list-item>
  <fusion-link-list-item href="#" text="Link item 5"></fusion-link-list-item>
</fusion-link-list>`;

export const SmallCondensed = () => html`<fusion-link-list size="sm" spacing="condensed">
  <fusion-link-list-item href="#" text="Link item 1"></fusion-link-list-item>
  <fusion-link-list-item href="#" text="Link item 2"></fusion-link-list-item>
  <fusion-link-list-item href="#" text="Link item 3 with a longer title"></fusion-link-list-item>
  <fusion-link-list-item href="#" text="Link item 4"></fusion-link-list-item>
  <fusion-link-list-item href="#" text="Link item 5"></fusion-link-list-item>
</fusion-link-list>`;

export const Responsive = () => html`<fusion-link-list behavior="responsive">
  <fusion-link-list-item href="#" text="Link item 1"></fusion-link-list-item>
  <fusion-link-list-item href="#" text="Link item 2"></fusion-link-list-item>
  <fusion-link-list-item href="#" text="Link item 3 with a longer title"></fusion-link-list-item>
  <fusion-link-list-item href="#" text="Link item 4"></fusion-link-list-item>
  <fusion-link-list-item href="#" text="Link item 5"></fusion-link-list-item>
</fusion-link-list>`;

export const Horizontal = () => html`<fusion-link-list behavior="horizontal">
  <fusion-link-list-item href="#" text="Link item 1"></fusion-link-list-item>
  <fusion-link-list-item href="#" text="Link item 2"></fusion-link-list-item>
  <fusion-link-list-item href="#" text="Link item 3 with a longer title"></fusion-link-list-item>
  <fusion-link-list-item href="#" text="Link item 4"></fusion-link-list-item>
  <fusion-link-list-item href="#" text="Link item 5"></fusion-link-list-item>
</fusion-link-list>`;

export const WithBadge = () => html`<fusion-link-list>
  <fusion-link-list-item href="#" text="Link item 1"></fusion-link-list-item>
  <fusion-link-list-item href="#" text="Link item 2"><fusion-badge slot="itemAfter" text="Badge"></fusion-badge></fusion-link-list-item>
  <fusion-link-list-item href="#" text="Link item 3 with a longer title"></fusion-link-list-item>
  <fusion-link-list-item href="#" text="Link item 4"></fusion-link-list-item>
  <fusion-link-list-item href="#" text="Link item 5"></fusion-link-list-item>
</fusion-link-list>`;
