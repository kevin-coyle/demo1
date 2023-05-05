import { html } from 'lit';
import { spread } from '../../directives/spread';
import './definition-list-item';

export default {
  title: 'Molecules/Category/Definition List Item',
  component: 'fusion-definition-list-item',
  parameters: { status: { type: 'beta' } }
};

export const Default = (args) => html`<fusion-definition-list-item ${spread(args)}>Hello world</fusion-definition-list-item>`;
