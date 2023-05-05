import { html } from 'lit';
import { spread } from '../../directives/spread';
import './header';

export default {
  title: 'Organisms/Global/Header',
  component: 'fusion-header'
};

export const Default = (args) => html`<fusion-header ${spread(args)}>
  <f-po slot="top">Optional header top</f-po>
  <f-po>Header middle</f-po>
  <f-po slot="bottom">Optional header bottom</f-po>
</fusion-header>`;
