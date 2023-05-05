import { html } from 'lit';
import { spread } from '../../directives/spread';
import './field-note';

export default {
  title: 'Atoms/Forms/Field Note',
  component: 'fusion-field-note'
};

export const Default = (args) => html`<fusion-field-note ${spread(args)}>This is a field note.</fusion-field-note>`;

export const Success = () =>
  html`<fusion-field-note iconName="check" ?isSuccess=${true}>This is a field note with a success state.</fusion-field-note>`;

export const Error = () => html`<fusion-field-note iconName="error" ?isError=${true}>This is a field note with an error state.</fusion-field-note>`;
