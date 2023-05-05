import { html } from 'lit';
import { spread } from '../../directives/spread';
import './text-field';

export default {
  title: 'Molecules/Forms/Text Field',
  component: 'fusion-text-field'
};

export const Default = (args) => {
  return html`
    <fusion-text-field
      ${spread(args)}
      placeholder="Placeholder"
      fieldId="text-field-1"
      fieldNote="This is a field note."
      ariaDescribedBy="text-field-aria-1"
    ></fusion-text-field>
  `;
};

export const Success = () =>
  html` <fusion-text-field ?isSuccess=${true} iconName="check" fieldNote="This is a success field note."></fusion-text-field> `;

export const Error = () => html` <fusion-text-field ?isError=${true} iconName="error" fieldNote="This is an error field note."></fusion-text-field> `;

export const Inverted = () => html`
  <div style="background: #000; padding: 2rem;">
    <fusion-text-field ?inverted=${true} placeholder="Placeholder" fieldNote="This is a field note."></fusion-text-field>
  </div>
`;
