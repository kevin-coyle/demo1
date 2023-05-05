import { html } from 'lit';
import { spread } from '../../directives/spread';
import './toggle';

export default {
  title: 'Components/Toggle',
  component: 'fusion-toggle',
  parameters: {
    status: { type: 'stable' },
    actions: {
      handles: ['change']
    }
  }
};

export const Default = (args) => html` <fusion-toggle label="Toggle label" ${spread(args)}></fusion-toggle> `;

export const DefaultChecked = () => html` <fusion-toggle label="Toggle label" ?checked=${true}></fusion-toggle> `;

export const DefaultDisabled = () => html` <fusion-toggle label="Toggle label" ?disabled=${true}></fusion-toggle> `;

export const DefaultDisabledChecked = () => html` <fusion-toggle label="Toggle label" ?disabled=${true} ?checked=${true}></fusion-toggle> `;

export const WithFieldNote = () => html` <fusion-toggle label="Toggle label" fieldNote="This is a field note"></fusion-toggle> `;

export const WithFieldNoteSlot = () => html`
  <fusion-toggle label="Toggle label">
    <span slot="field-note">This is a field note as slot</span>
  </fusion-toggle>
`;

export const WithFieldNoteDisabled = () => html`
  <fusion-toggle label="Toggle label" ?disabled=${true} fieldNote="This is a disabled field note"></fusion-toggle>
`;

export const WithSuccess = () =>
  html` <fusion-toggle label="Toggle label" ?isSuccess=${true} fieldNote="This is a success field note"></fusion-toggle> `;

export const WithError = () => html` <fusion-toggle label="Toggle label" ?isError=${true} errorNote="This is an error field note"></fusion-toggle> `;

export const WithRequired = () => html` <fusion-toggle label="Toggle label" fieldNote="This is required toggle" required></fusion-toggle> `;
