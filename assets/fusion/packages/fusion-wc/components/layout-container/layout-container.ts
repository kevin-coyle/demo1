import { html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { FusionElement } from '../FusionElement';
import styles from './layout-container.scss';

/**
 * @slot - The contents of the layout container
 */
@customElement('fusion-layout-container')
export class FusionLayoutContainer extends FusionElement {
  static get styles() {
    return unsafeCSS(styles);
  }

  /**
   * Size variant
   * - **narrow** renders a layout container narrower than the default
   */
  @property()
  variant?: 'narrow';

  render() {
    const componentClassName = this.componentClassNames('fusion-l-layout-container', {
      'fusion-l-layout-container--narrow': this.variant === 'narrow'
    });

    return html`
      <div class="${componentClassName}">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fusion-layout-container': FusionLayoutContainer;
  }
}
