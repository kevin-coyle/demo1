import { html } from 'lit';
import { spread } from '../../directives/spread';
import './badge';

export default {
  title: 'Molecules/Messaging/Badge',
  component: 'fusion-badge'
};

export const Default = (args) => html`<fusion-badge ${spread(args)} text="Badge"></fusion-badge>`;
export const Success = () => html`<fusion-badge variant="success" text="Badge"></fusion-badge>`;
export const Warning = () => html`<fusion-badge variant="warning" text="Badge"></fusion-badge>`;
export const Error = () => html`<fusion-badge variant="error" text="Badge"></fusion-badge>`;
