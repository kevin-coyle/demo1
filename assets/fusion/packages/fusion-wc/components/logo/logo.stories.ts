/* eslint-disable max-len */
import { html } from 'lit';
import { spread } from '../../directives/spread';
import './logo';

export default {
  title: 'Molecules/Global/Logo',
  component: 'fusion-logo'
};

export const Default = (args) => html`<fusion-logo ${spread(args)}></fusion-logo>`;
