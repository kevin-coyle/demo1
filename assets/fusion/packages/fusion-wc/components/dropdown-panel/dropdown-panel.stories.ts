import { html } from 'lit';
import { spread } from '../../directives/spread';
import '../list-item/list-item';
import '../list/list';
import './dropdown-panel';

export default {
  title: 'Components/Dropdown Panel',
  component: 'fusion-dropdown-panel',
  parameters: { status: { type: 'stable' } }
};

export const Default = (args) => html`
  <fusion-dropdown-panel ${spread(args)}>
    <fusion-list>
      <fusion-list-item>List item</fusion-list-item>
      <fusion-list-item>List item</fusion-list-item>
      <fusion-list-item>List item</fusion-list-item>
      <fusion-list-item>List item</fusion-list-item>
      <fusion-list-item>List item</fusion-list-item>
      <fusion-list-item>List item</fusion-list-item>
      <fusion-list-item>List item</fusion-list-item>
      <fusion-list-item>List item</fusion-list-item>
      <fusion-list-item>List item</fusion-list-item>
      <fusion-list-item>List item</fusion-list-item>
    </fusion-list>
  </fusion-dropdown-panel>
`;

export const Bare = () => html`
  <fusion-dropdown-panel variant="bare">
    <fusion-list>
      <fusion-list-item>List item</fusion-list-item>
      <fusion-list-item>List item</fusion-list-item>
      <fusion-list-item>List item</fusion-list-item>
      <fusion-list-item>List item</fusion-list-item>
      <fusion-list-item>List item</fusion-list-item>
      <fusion-list-item>List item</fusion-list-item>
      <fusion-list-item>List item</fusion-list-item>
      <fusion-list-item>List item</fusion-list-item>
      <fusion-list-item>List item</fusion-list-item>
      <fusion-list-item>List item</fusion-list-item>
    </fusion-list>
  </fusion-dropdown-panel>
`;

export const WithScroll = () => html`
  <fusion-dropdown-panel hasScroll=${true}>
    <fusion-list>
      <fusion-list-item>List item</fusion-list-item>
      <fusion-list-item>List item</fusion-list-item>
      <fusion-list-item>List item</fusion-list-item>
      <fusion-list-item>List item</fusion-list-item>
      <fusion-list-item>List item</fusion-list-item>
      <fusion-list-item>List item</fusion-list-item>
      <fusion-list-item>List item</fusion-list-item>
      <fusion-list-item>List item</fusion-list-item>
      <fusion-list-item>List item</fusion-list-item>
      <fusion-list-item>List item</fusion-list-item>
    </fusion-list>
  </fusion-dropdown-panel>
`;

export const WithIconList = () => html`
  <fusion-dropdown-panel>
    <fusion-list>
      <fusion-list-item><fusion-icon-check slot="before"></fusion-icon-check>List Item</fusion-list-item>
      <fusion-list-item><fusion-icon-check slot="before"></fusion-icon-check>List Item</fusion-list-item>
      <fusion-list-item><fusion-icon-check slot="before"></fusion-icon-check>List Item</fusion-list-item>
      <fusion-list-item><fusion-icon-check slot="before"></fusion-icon-check>List Item</fusion-list-item>
      <fusion-list-item><fusion-icon-check slot="before"></fusion-icon-check>List Item</fusion-list-item>
      <fusion-list-item><fusion-icon-check slot="before"></fusion-icon-check>List Item</fusion-list-item>
      <fusion-list-item><fusion-icon-check slot="before"></fusion-icon-check>List Item</fusion-list-item>
      <fusion-list-item><fusion-icon-check slot="before"></fusion-icon-check>List Item</fusion-list-item>
    </fusion-list>
  </fusion-dropdown-panel>
`;

export const WithChecklistAndFooter = () => html`
  <fusion-dropdown-panel ?hasFooter=${true}>
    <fusion-fieldset ?hideLegend=${true} ?isSuccess=${true}>
      <fusion-checkbox-field-item name="checkbox-example">Checkbox field item 1</fusion-checkbox-field-item>
      <fusion-checkbox-field-item name="checkbox-example">Checkbox field item 2</fusion-checkbox-field-item>
      <fusion-checkbox-field-item name="checkbox-example">Checkbox field item 3</fusion-checkbox-field-item>
      <fusion-checkbox-field-item name="checkbox-example">Checkbox field item 4</fusion-checkbox-field-item>
    </fusion-fieldset>
    <fusion-button-group slot="footer" ?fullWidth=${true}>
      <fusion-button>Apply</fusion-button>
      <fusion-button variant="link">Cancel</fusion-button>
    </fusion-button-group>
  </fusion-dropdown-panel>
`;

export const WithSearch = () => html`
  <fusion-dropdown-panel ?hasHeader=${true} hasScroll=${true}>
    <fusion-search-form slot="header" .value=${''} ?isEmpty=${true}> </fusion-search-form>
    <fusion-list>
      <fusion-list-item>List Item</fusion-list-item>
      <fusion-list-item>List Item</fusion-list-item>
      <fusion-list-item>List Item</fusion-list-item>
      <fusion-list-item>List Item</fusion-list-item>
      <fusion-list-item>List Item</fusion-list-item>
      <fusion-list-item>List Item</fusion-list-item>
      <fusion-list-item>List Item</fusion-list-item>
      <fusion-list-item>List Item</fusion-list-item>
    </fusion-list>
  </fusion-dropdown-panel>
`;
