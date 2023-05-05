import {html} from 'lit';
import {spread} from '../../directives/spread';
import './progress-tracker';

export default {
  title: 'Molecules/Category/Progress Tracker',
  component: 'fusion-progress-tracker',
  parameters: { status: { type: 'beta' } },
};

export const Default = (args) => html`<fusion-progress-tracker ${spread(args)}>Hello world</fusion-progress-tracker>`