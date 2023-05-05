import { html } from 'lit';
import { spread } from '../../directives/spread';
import './nav-container';

export default {
  title: 'Molecules/Layout & Containers/Nav Container',
  component: 'fusion-nav-container'
};

export const Default = (args) => html`<fusion-text-passage size="sm" ?capLinelength=${true}>
    <p>
      Nav container is used for the panel that can be toggled on/off on small screens with the header menu button. This is why it does not show up on
      small screens.
    </p>
  </fusion-text-passage>
  <fusion-nav-container ${spread(args)}>
    <f-po style="flex: 1 0 auto;">Nav container contents (primary nav, utility nav, etc.)</f-po>
  </fusion-nav-container>`;
