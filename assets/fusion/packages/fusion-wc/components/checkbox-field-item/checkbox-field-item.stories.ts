import { html } from 'lit';
import { spread } from '../../directives/spread';
import './checkbox-field-item';

export default {
  title: 'Components/Checkbox Field Item',
  component: 'fusion-checkbox-field-item',
  parameters: {
    status: { type: 'stable' },
    actions: {
      handles: ['change']
    }
  }
};

const showValue = (e: any) => {
  console.log(e.detail.value);
};

export const Default = (args) =>
  html`
    <fusion-checkbox-field-item ${spread(args)} value="inline checkbox value" @change=${(e) => showValue(e)}
      >This is an inline checkbox label</fusion-checkbox-field-item
    >
  `;

export const Checked = () => html` <fusion-checkbox-field-item ?checked=${true}>This is an inline checkbox label</fusion-checkbox-field-item> `;

export const Disabled = () => html` <fusion-checkbox-field-item ?disabled=${true}>This is an inline checkbox label</fusion-checkbox-field-item> `;

export const DisabledChecked = () => html`
  <fusion-checkbox-field-item ?checked=${true} ?disabled=${true}>This is an inline checkbox label</fusion-checkbox-field-item>
`;

export const Indeterminate = () => html`
  <fusion-checkbox-field-item ?checked=${true} ?indeterminate=${true}>This is an inline checkbox label</fusion-checkbox-field-item>
`;

export const DisabledIndeterminate = () => html`
  <fusion-checkbox-field-item ?disabled=${true} ?indeterminate=${true}>This is an inline checkbox label</fusion-checkbox-field-item>
`;

export const WithFieldNote = () => html`
  <fusion-checkbox-field-item fieldNote="This is a field note.">This is an inline checkbox label with field note</fusion-checkbox-field-item>
`;

export const Success = () => html`
  <fusion-checkbox-field-item ?isSuccess=${true} fieldNote="This is a success field note.">
    This is an inline checkbox label
  </fusion-checkbox-field-item>
`;

export const ErrorNote = () => html`
  <fusion-checkbox-field-item ?isError=${true} errorNote="This is an error field note.">
    This is an inline checkbox label
  </fusion-checkbox-field-item>
`;

export const Fieldnote_as_slot = () => html`
  <fusion-checkbox-field-item>
    <span slot="field-note">This is fieldnote text as slot</span>
    This is an inline checkbox label
  </fusion-checkbox-field-item>
`;
export const Errornote_as_slot = () => html`
  <fusion-checkbox-field-item>
    <span slot="error" style="color:red">This is errornote text as slot</span>
    This is an inline checkbox label
  </fusion-checkbox-field-item>
`;
