import { html } from 'lit';
import { spread } from '../../directives/spread';
import './avatar';

export default {
  title: 'Molecules/Category/Avatar',
  component: 'fusion-avatar',
  parameters: { status: { type: 'beta' } }
};

export const Default = (args) => html`<fusion-avatar ${spread(args)}>Hello world</fusion-avatar>`;
