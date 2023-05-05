import { html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { FusionElement } from '../FusionElement';
import styles from './footer.scss';

/**
 * @slot - The footer content
 * @slot top - The top content (above the default slot)
 * @slot bottom - The bottom content (below the default slot)
 */
@customElement('fusion-footer')
export class FusionFooter extends FusionElement {
  static get styles() {
    return unsafeCSS(styles);
  }

  render() {
    const componentClassName = this.componentClassNames('fusion-c-footer', {});

    return html`
      <footer class="${componentClassName}" role="contentinfo">
        ${this.slotNotEmpty('top') &&
        html`<div class="fusion-c-footer__top">
          <fusion-layout-container>
            <slot name="top"></slot>
          </fusion-layout-container>
        </div>`}
        <div class="fusion-c-footer__middle">
          <fusion-layout-container>
            <slot></slot>
          </fusion-layout-container>
        </div>
        ${this.slotNotEmpty('bottom') &&
        html`<div class="fusion-c-footer__bottom">
          <fusion-layout-container>
            <slot name="bottom"></slot>
          </fusion-layout-container>
        </div>`}
      </footer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fusion-footer': FusionFooter;
  }
}
