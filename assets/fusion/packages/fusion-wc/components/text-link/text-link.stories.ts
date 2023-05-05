import { html } from 'lit';
import { spread } from '../../directives/spread';
import './text-link';

export default {
  title: 'Atoms/Text/Text Link',
  component: 'fusion-text-link'
};

export const Default = (args) => html`<fusion-text-link ${spread(args)} href="#">Text Link</fusion-text-link>`;
export const Secondary = () => html`<fusion-text-link variant="secondary" href="#">Secondary Text Link</fusion-text-link>`;
export const Display = () => html`<fusion-text-link variant="display" href="#">Display Text Link</fusion-text-link>`;
export const Inverted = () =>
  html`<div style="padding: 1rem; background:#000"><fusion-text-link ?inverted=${true} href="#">Inverted Text Link</fusion-text-link></div>`;
export const Small = () => html`<fusion-text-link size="sm" href="#">Small Text Link</fusion-text-link>`;
