import { html } from 'lit';
import '../../.storybook/components/f-po/f-po';
import { spread } from '../../directives/spread';
import './layout-container';

export default {
  title: 'Molecules/Layout & Containers/Layout Container',
  component: 'layout-container'
};

export const Default = (args) => html`<fusion-layout-container ${spread(args)}>
  <f-po>Layout Container</f-po>
</fusion-layout-container>`;
