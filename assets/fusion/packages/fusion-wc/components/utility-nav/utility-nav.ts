import { html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { FusionElement } from '../FusionElement';
import styles from './utility-nav.scss';

/**
 * @slot - The utility nav items
 */
@customElement('fusion-utility-nav')
export class FusionUtilityNav extends FusionElement {
  static get styles() {
    return unsafeCSS(styles);
  }

  render() {
    const componentClassName = this.componentClassNames('fusion-c-utility-nav', {});

    return html`
      <nav class="${componentClassName}">
        <ul class="fusion-c-utility-nav__list">
          <slot></slot>
        </ul>
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fusion-utility-nav': FusionUtilityNav;
  }
}
