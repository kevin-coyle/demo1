import { html } from 'lit';
import { spread } from '../../directives/spread';
import './icon';

export default {
  title: 'Atoms/Icons/Icon',
  component: 'fusion-icon'
};

export const Default = (args) => {
  return html`<fusion-icon ${spread(args)}></fusion-icon>`;
};
