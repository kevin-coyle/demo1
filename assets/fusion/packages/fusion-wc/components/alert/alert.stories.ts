import { html } from 'lit';
import { spread } from '../../directives/spread';
import '../text-passage/text-passage';
import './alert';

export default {
  title: 'Molecules/Messaging/Alert',
  component: 'fusion-alert'
};

export const Default = (args) => html`<fusion-alert ${spread(args)} heading="This is the alert heading" iconName="info">
  <fusion-text-passage size="sm" ?capLinelength=${true}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </fusion-text-passage>
</fusion-alert>`;

export const Success = () => html`<fusion-alert variant="success" heading="This is the alert heading" iconName="check">
  <fusion-text-passage size="sm" ?capLinelength=${true}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </fusion-text-passage>
</fusion-alert>`;

export const Error = () => html`<fusion-alert variant="error" heading="This is the alert heading" iconName="error">
  <fusion-text-passage size="sm" ?capLinelength=${true}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </fusion-text-passage>
</fusion-alert>`;
