import { html } from 'lit';
import '../radio-field-item/radio-field-item';
import './fieldset';

export default {
  title: 'Components/Fieldset',
  component: 'fusion-fieldset',
  subcomponents: { FusionRadioFieldItem: 'fusion-radio-field-item' },
  parameters: {
    status: { type: 'stable' },
    actions: {
      handles: ['change']
    }
  }
};

export const RadioFieldset = (args) => html`
  <fusion-fieldset label="Radio field legend">
    <fusion-radio-field-item ?disabled=${true} name="radio-example">Disabled radio field item 1</fusion-radio-field-item>
    <fusion-radio-field-item ?checked=${true} name="radio-example">Radio field item 2</fusion-radio-field-item>
    <fusion-radio-field-item name="radio-example">Radio field item 3</fusion-radio-field-item>
  </fusion-fieldset>
`;

export const RadioFieldsetBoxed = (args) => html`
  <fusion-fieldset label="Radio field legend" variant="boxed">
    <fusion-radio-field-item name="radio-example">Disabled radio field item 1</fusion-radio-field-item>
    <fusion-radio-field-item ?checked=${true} name="radio-example">Radio field item 2</fusion-radio-field-item>
    <fusion-radio-field-item name="radio-example">Radio field item 3</fusion-radio-field-item>
  </fusion-fieldset>
`;

export const RadioFieldsetHorizontal = () => html`
  <fusion-fieldset label="Radio field legend" orientation="horizontal">
    <fusion-radio-field-item name="radio-example">Radio field item 1</fusion-radio-field-item>
    <fusion-radio-field-item name="radio-example">Radio field item 2</fusion-radio-field-item>
    <fusion-radio-field-item name="radio-example">Radio field item 3</fusion-radio-field-item>
  </fusion-fieldset>
`;

export const RadioFieldsetHorizontalBoxed = () => html`
  <fusion-fieldset label="Radio field legend" orientation="horizontal" variant="boxed">
    <fusion-radio-field-item name="radio-example">Radio field item 1</fusion-radio-field-item>
    <fusion-radio-field-item name="radio-example">Radio field item 2</fusion-radio-field-item>
    <fusion-radio-field-item name="radio-example">Radio field item 3</fusion-radio-field-item>
  </fusion-fieldset>
`;

export const RadioFieldsetSuccess = () => html`
  <fusion-fieldset ariaDescribedBy="these-cool-items" label="Radio field legend" ?isSuccess=${true}>
    <fusion-radio-field-item name="radio-example">Radio field item 1</fusion-radio-field-item>
    <fusion-radio-field-item name="radio-example">Radio field item 2</fusion-radio-field-item>
    <fusion-radio-field-item name="radio-example">Radio field item 3</fusion-radio-field-item>
    <div slot="field-note">
      This is a success field note. <br />
      And this should start on the next line.
    </div>
  </fusion-fieldset>
`;

export const RadioFieldsetErrorNote = () => html`
  <fusion-fieldset label="Radio field legend" ?isError=${true} errorNote="This is an error field note.">
    <fusion-radio-field-item name="radio-example">Radio field item 1</fusion-radio-field-item>
    <fusion-radio-field-item name="radio-example">Radio field item 2</fusion-radio-field-item>
    <fusion-radio-field-item name="radio-example">Radio field item 3</fusion-radio-field-item>
  </fusion-fieldset>
`;

export const RadioFieldsetHiddenLegend = (args) => html`
  <fusion-fieldset label="Radio field legend" ?hideLegend=${true}>
    <fusion-radio-field-item ?disabled=${true} name="radio-example">Disabled radio field item 1</fusion-radio-field-item>
    <fusion-radio-field-item ?checked=${true} name="radio-example">Radio field item 2</fusion-radio-field-item>
    <fusion-radio-field-item name="radio-example">Radio field item 3</fusion-radio-field-item>
  </fusion-fieldset>
`;

export const RadioFieldsetInverted = () => html`
  <div style="background: #000; padding: 2rem;">
    <fusion-fieldset label="Radio field legend" ?inverted=${true} fieldNote="This is an inverted field note.">
      <fusion-radio-field-item name="radio-example">Radio field item 1</fusion-radio-field-item>
      <fusion-radio-field-item name="radio-example">Radio field item 2</fusion-radio-field-item>
      <fusion-radio-field-item name="radio-example">Radio field item 3</fusion-radio-field-item>
    </fusion-fieldset>
  </div>
`;

export const RadioFieldsetHiddenLabel = () => html`
  <fusion-fieldset label="Radio field legend">
    <fusion-radio-field-item name="radio-example">Radio field item 1</fusion-radio-field-item>
    <fusion-radio-field-item name="radio-example">Radio field item 2</fusion-radio-field-item>
    <fusion-radio-field-item name="radio-example" ?hideLabel=${true}>Radio field item 3</fusion-radio-field-item>
  </fusion-fieldset>
`;

export const RadioFieldsetFieldnote_as_slot = () => html`
  <fusion-fieldset label="Radio field legend">
    <fusion-field-note slot="field-note">This is fieldnote given as slot</fusion-field-note>
    <fusion-radio-field-item name="radio-example">Radio field item 1</fusion-radio-field-item>
    <fusion-radio-field-item name="radio-example">Radio field item 2</fusion-radio-field-item>
    <fusion-radio-field-item name="radio-example">Radio field item 3</fusion-radio-field-item>
  </fusion-fieldset>
`;

export const RadioFieldsetErrornote_as_slot = () => html`
  <fusion-fieldset label="Radio field legend">
    <fusion-field-note slot="error">This is errornote given as slot</fusion-field-note>
    <fusion-radio-field-item name="radio-example">Radio field item 1</fusion-radio-field-item>
    <fusion-radio-field-item name="radio-example">Radio field item 2</fusion-radio-field-item>
    <fusion-radio-field-item name="radio-example">Radio field item 3</fusion-radio-field-item>
  </fusion-fieldset>
`;

export const Disabled = () => html`
  <fusion-fieldset label="Radio field legend">
    <fusion-radio-field-item name="radio-example">Radio field item 1</fusion-radio-field-item>
    <fusion-radio-field-item name="radio-example" ?disabled=${true} ?checked=${true}>Radio field item 2</fusion-radio-field-item>
    <fusion-radio-field-item name="radio-example">Radio field item 3</fusion-radio-field-item>
  </fusion-fieldset>
`;
