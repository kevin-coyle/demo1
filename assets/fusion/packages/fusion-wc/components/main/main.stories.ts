import { html } from 'lit';
import { spread } from '../../directives/spread';
import './main';

export default {
  title: 'Molecules/Layout & Containers/Main',
  component: 'fusion-main'
};

export const Default = (args) => html`<fusion-main ${spread(args)}><f-po>Main Content Block Between Header and Footer</f-po></fusion-main>`;
