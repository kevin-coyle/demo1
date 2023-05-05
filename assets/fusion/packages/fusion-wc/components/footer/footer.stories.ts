import { html } from 'lit';
import { spread } from '../../directives/spread';
import './footer';

export default {
  title: 'Organisms/Global/Footer',
  component: 'fusion-footer'
};

export const Default = (args) => html`<fusion-footer ${spread(args)}>
  <f-po slot="top">Optional footer top</f-po>
  <f-po>Footer middle</f-po>
  <f-po slot="bottom">Optional footer bottom</f-po>
</fusion-footer>`;
