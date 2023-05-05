import { html } from 'lit';
import { spread } from '../../directives/spread';
import './button-group';

export default {
  title: 'Molecules/Category/Button Group',
  component: 'fusion-button-group',
  parameters: { status: { type: 'beta' } }
};

export const Default = (args) => html`
  <fusion-button-group ${spread(args)}>
    <fusion-button variant="primary" text="Button 1"></fusion-button>
    <fusion-button variant="link" text="Button 2"></fusion-button>
  </fusion-button-group>
`;
