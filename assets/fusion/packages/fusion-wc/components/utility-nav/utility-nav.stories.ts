import { html } from 'lit';
import { spread } from '../../directives/spread';
import '../utility-nav-item/utility-nav-item';
import './utility-nav';

export default {
  title: 'Molecules/Navigation/Utility Nav',
  component: 'fusion-utility-nav'
};

export const Default = (args) => html` <fusion-utility-nav ${spread(args)}>
  <fusion-utility-nav-item text="Utility Item 1"></fusion-utility-nav-item>
  <fusion-utility-nav-item text="Utility Item 2"></fusion-utility-nav-item>
</fusion-utility-nav>`;

export const IconOnly = () => html` <fusion-utility-nav>
  <fusion-utility-nav-item text="Login" iconPosition="before" iconName="person" ?hideText=${true}></fusion-utility-nav-item>
  <fusion-utility-nav-item
    class="c-site-header__utility-nav-search"
    text="Utility Item 2"
    iconPosition="before"
    iconName="search"
    ?hideText=${true}
  ></fusion-utility-nav-item>
</fusion-utility-nav>`;
