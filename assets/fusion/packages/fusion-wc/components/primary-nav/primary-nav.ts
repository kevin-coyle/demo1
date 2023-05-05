import { html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { FusionElement } from '../FusionElement';
import styles from './primary-nav.scss';

/**
 * @slot - The primary navigation items
 */
@customElement('fusion-primary-nav')
export class FusionPrimaryNav extends FusionElement {
  static get styles() {
    return unsafeCSS(styles);
  }

  /**
   * Behavior variant
   * <fusion-text-passage size="sm">
   * <ul>
   * <li>**side-by-side** keeps the primary nav item always in a horizontal pattern</li>
   * </ul>
   * </fusion-text-passage>
   */
  @property()
  behavior?: 'side-by-side';

  render() {
    const componentClassName = this.componentClassNames('fusion-c-primary-nav', {
      'fusion-c-primary-nav--side-by-side': this.behavior === 'side-by-side'
    });

    return html`
      <nav class="${componentClassName}">
        <ul class="fusion-c-primary-nav__list">
          <slot></slot>
        </ul>
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fusion-primary-nav': FusionPrimaryNav;
  }
}
