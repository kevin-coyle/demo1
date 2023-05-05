import { html } from 'lit';
import { spread } from '../../directives/spread';
import './band';

export default {
  title: 'Molecules/Layout & Containers/Band',
  component: 'fusion-band'
};

export const Default = (args) => html`<fusion-band ${spread(args)}>Default band</fusion-band>`;

export const Branded = () => html`<fusion-band variant="branded">Branded Band</fusion-band>`;
