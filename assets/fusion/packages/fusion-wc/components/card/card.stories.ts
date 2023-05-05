import { html } from 'lit';
import { spread } from '../../directives/spread';
import './card';

export default {
  title: 'Molecules/Blocks/Card',
  component: 'fusion-card'
};

export const Default = (args) => html`<fusion-card ${spread(args)}>
  <f-po slot="header">Header</f-po>
  <f-po>Body</f-po>
  <f-po slot="footer">Footer</f-po>
</fusion-card>`;

export const Bare = () => html`<fusion-card variant="bare">
  <f-po slot="header">Bare Header</f-po>
  <f-po>Bare Body</f-po>
  <f-po slot="footer">Bare Footer</f-po>
</fusion-card>`;
