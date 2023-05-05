import { html } from 'lit';
import { spread } from '../../directives/spread';
import './list';

export default {
  title: 'Molecules/Lists/List',
  component: 'fusion-list'
};

export const Default = (args) => html`<fusion-list ${spread(args)}>
  <fusion-list-item><f-po>List item</f-po></fusion-list-item>
  <fusion-list-item><f-po>List item</f-po></fusion-list-item>
  <fusion-list-item><f-po>List item</f-po></fusion-list-item>
  <fusion-list-item><f-po>List item</f-po></fusion-list-item>
  <fusion-list-item><f-po>List item</f-po></fusion-list-item>
</fusion-list>`;

export const Bare = () => html`<fusion-list variant="bare">
  <fusion-list-item><f-po>Bare list item</f-po></fusion-list-item>
  <fusion-list-item><f-po>Bare list item</f-po></fusion-list-item>
  <fusion-list-item><f-po>Bare list item</f-po></fusion-list-item>
  <fusion-list-item><f-po>Bare list item</f-po></fusion-list-item>
  <fusion-list-item><f-po>Bare list item</f-po></fusion-list-item>
</fusion-list>`;

export const Padded = () => html`<fusion-list spacing="padded">
  <fusion-list-item><f-po>Padded list item</f-po></fusion-list-item>
  <fusion-list-item><f-po>Padded list item</f-po></fusion-list-item>
  <fusion-list-item><f-po>Padded list item</f-po></fusion-list-item>
  <fusion-list-item><f-po>Padded list item</f-po></fusion-list-item>
  <fusion-list-item><f-po>Padded list item</f-po></fusion-list-item>
</fusion-list>`;

export const Condensed = () => html`<fusion-list spacing="condensed">
  <fusion-list-item><f-po>Condensed list item</f-po></fusion-list-item>
  <fusion-list-item><f-po>Condensed list item</f-po></fusion-list-item>
  <fusion-list-item><f-po>Condensed list item</f-po></fusion-list-item>
  <fusion-list-item><f-po>Condensed list item</f-po></fusion-list-item>
  <fusion-list-item><f-po>Condensed list item</f-po></fusion-list-item>
</fusion-list>`;
