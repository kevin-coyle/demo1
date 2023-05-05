import { html } from 'lit';
import { spread } from '../../directives/spread';
import './panel';

export default {
  title: 'Molecules/Category/Panel',
  component: 'fusion-panel',
  parameters: { status: { type: 'beta' } }
};

export const Default = (args) => html`<fusion-panel ${spread(args)}>Hello world</fusion-panel>`;
