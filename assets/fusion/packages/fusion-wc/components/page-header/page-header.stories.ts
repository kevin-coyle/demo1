import { html } from 'lit';
import { spread } from '../../directives/spread';
import './page-header';

export default {
  title: 'Molecules/Text/Page Header',
  component: 'fusion-page-header'
};

export const Default = (args) => html`<fusion-page-header ${spread(args)} heading="Page header title"> Page header description </fusion-page-header>`;

export const WithTitleAfter = () =>
  html`<fusion-page-header heading="Page header title">
    Page header description <fusion-badge size="lg" slot="titleAfter" text="Badge"></fusion-badge>
  </fusion-page-header>`;
