import { html, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { FusionElement } from '../FusionElement';
import styles from './header.scss';

/**
 * @slot - The header content
 */
@customElement('fusion-header')
export class FusionHeader extends FusionElement {
  static get styles() {
    return unsafeCSS(styles);
  }

  /**
   * Is active state
   * 1) Set to true when small screen menu is open
   */
  @state()
  isActive?: boolean;

  render() {
    const componentClassName = this.componentClassNames('fusion-c-header', {
      'fusion-is-active': this.isActive === true
    });

    return html`
      <header class="${componentClassName}">
        ${this.slotNotEmpty('top') &&
        html`<div class="fusion-c-header__top">
          <fusion-layout-container>
            <div class="fusion-c-header__top-inner">
              <slot name="top"></slot>
            </div>
          </fusion-layout-container>
        </div>`}
        <div class="fusion-c-header__middle">
          <fusion-layout-container>
            <div class="fusion-c-header__middle-inner">
              <slot></slot>
            </div>
          </fusion-layout-container>
        </div>
        ${this.slotNotEmpty('bottom') &&
        html`<div class="fusion-c-header__bottom">
          <fusion-layout-container>
            <slot name="bottom"></slot>
          </fusion-layout-container>
        </div>`}
      </header>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fusion-header': FusionHeader;
  }
}
