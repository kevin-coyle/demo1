import { html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { FusionElement } from '../FusionElement';
import styles from './dropdown-panel.scss';

/**
 * @slot - The component content
 */
@customElement('fusion-dropdown-panel')
export class FusionDropdownPanel extends FusionElement {
  static get styles() {
    return unsafeCSS(styles.toString());
  }

  /**
   * Adds a max height and scrolling of the panel
   */
  @property({ type: Boolean })
  hasScroll?: boolean;

  /**
   * Changes styling on panel for variant with header
   */
  @property({ type: Boolean })
  hasHeader?: boolean = false;

  /**
   * Changes styling on panel for variant with footer
   */
  @property({ type: Boolean })
  hasFooter?: boolean = false;

  /**
   * Style variants
   * <fusion-text-passage size="sm">
   * <ul>
   * <li>**bare** removes border from dropdown panel</li>
   * </ul>
   * </fusion-text-passage>
   */
  @property()
  variant?: 'bare';

  render() {
    const componentClassNames = this.componentClassNames('fusion-c-dropdown-panel', {
      'fusion-c-dropdown-panel--bare': this.variant === 'bare',
      'fusion-has-header': this.hasHeader === true,
      'fusion-has-footer': this.hasFooter === true,
      'fusion-has-scroll': this.hasScroll === true
    });

    return html`
      <div class="${componentClassNames}">
        ${this.slotNotEmpty('header') &&
        html`
          <div class="fusion-c-dropdown-panel__header">
            <slot name="header"></slot>
          </div>
        `}
        <div class="fusion-c-dropdown-panel__body">
          <slot></slot>
        </div>
        ${this.slotNotEmpty('footer') &&
        html`
          <div class="fusion-c-dropdown-panel__footer">
            <slot name="footer"></slot>
          </div>
        `}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fusion-dropdown-panel': FusionDropdownPanel;
  }
}
