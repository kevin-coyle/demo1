import {html} from 'lit';
import {spread} from '../../directives/spread';
import './progress-tracker-item';

export default {
  title: 'Molecules/Category/Progress Tracker Item',
  component: 'fusion-progress-tracker-item',
  parameters: { status: { type: 'beta' } },
};

export const Default = (args) => html`<fusion-progress-tracker-item ${spread(args)}>Hello world</fusion-progress-tracker-item>`