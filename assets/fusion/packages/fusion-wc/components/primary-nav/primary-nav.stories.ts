import { html } from 'lit';
import { spread } from '../../directives/spread';
import '../primary-nav-item/primary-nav-item';
import './primary-nav';

export default {
  title: 'Molecules/Navigation/Primary Nav',
  component: 'fusion-primary-nav'
};

export const Default = (args) => html`<fusion-primary-nav ${spread(args)}>
  <fusion-primary-nav-item href="#" text="Nav item 1"></fusion-primary-nav-item>
  <fusion-primary-nav-item href="#" text="Nav item 2"></fusion-primary-nav-item>
  <fusion-primary-nav-item href="#" text="Nav item 3"></fusion-primary-nav-item>
</fusion-primary-nav>`;

export const SideBySide = () => html`<fusion-primary-nav behavior="side-by-side">
  <fusion-primary-nav-item href="#" text="Nav item 1"></fusion-primary-nav-item>
  <fusion-primary-nav-item href="#" text="Nav item 2"></fusion-primary-nav-item>
  <fusion-primary-nav-item href="#" text="Nav item 3"></fusion-primary-nav-item>
</fusion-primary-nav>`;

export const WithMegamenu = () => html`
<fusion-text-passage size="sm">
  <p>A div is added around the primary nav in this instance to create a position relative wrapper for the megamenu to be positioned to. This wrapper will be the header when actually used.</p>
</fusion-text-passage>
<div style="position: relative">
<fusion-primary-nav>

</fusion-primary-nav-item>

</fusion-primary-nav>
</div>`;
