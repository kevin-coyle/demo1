import { html } from 'lit';
import { spread } from '../../directives/spread';
import './definition-list';

export default {
  title: 'Molecules/Category/Definition List',
  component: 'fusion-definition-list',
  parameters: { status: { type: 'beta' } }
};

export const Default = (args) => html`<fusion-definition-list ${spread(args)}>
  <fusion-definition-list-item>
    <span slot="term">Term 1</span>
    <div slot="definition">This is the definition of term 1</div>
  </fusion-definition-list-item>
  <fusion-definition-list-item>
    <span slot="term">Term 2</span>
    <div slot="definition">This is the definition of term 2</div>
  </fusion-definition-list-item>
  <fusion-definition-list-item>
    <span slot="term">Term 3</span>
    <div slot="definition">This is the definition of term 3</div>
  </fusion-definition-list-item>
</fusion-definition-list>`;
