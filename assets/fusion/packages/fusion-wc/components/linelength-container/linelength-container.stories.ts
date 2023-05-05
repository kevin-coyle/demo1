import { html } from 'lit';
import '../../.storybook/components/f-po/f-po';
import { spread } from '../../directives/spread';
import './linelength-container';

export default {
  title: 'Molecules/Layout & Containers/Linelength Container',
  component: 'fusion-linelength-container'
};

export const Default = (args) => html`<fusion-linelength-container ${spread(args)}>
  <f-po>Linelength container</f-po>
</fusion-linelength-container>`;
