import { html } from 'lit';
import '../../.storybook/components/f-po/f-po';
import { spread } from '../../directives/spread';
import './section';

export default {
  title: 'Organisms/Layout & Containers/Section',
  component: 'fusion-section'
};

export const Default = (args) => {
  return html`
    <fusion-section ${spread(args)}>
      <fusion-heading slot="header" tagName="h2" variant="display">Section Title</fusion-heading> <f-po>Section content</f-po>
      <f-po>Section content</f-po>
    </fusion-section>
  `;
};

export const WithDescription = () => {
  return html`
    <fusion-section>
      <fusion-heading class="fusion-u-display-block fusion-u-margin-bottom-md" slot="header" tagName="h2" variant="display"
        >Section Title</fusion-heading
      >
      <fusion-text-passage slot="header"
        >This is the section description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam</fusion-text-passage
      >
      <f-po>Section content</f-po>
    </fusion-section>
  `;
};
