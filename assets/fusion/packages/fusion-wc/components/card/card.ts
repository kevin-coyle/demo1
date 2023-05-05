import { html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { FusionElement } from '../FusionElement';
import styles from './card.scss';

/**
 * An example element.
 *
 * @slot - The card contents
 */
@customElement('fusion-card')
export class FusionCard extends FusionElement {
  static get styles() {
    return unsafeCSS(styles);
  }

  /**
   * Style variants
   * <fusion-text-passage size="sm">
   * <ul>
   * <li>**bare** renders a card without a border and without padding around the content</li>
   * </ul>
   * </fusion-text-passage>
   */
  @property()
  variant?: 'bare';

  /**
   * Align variants
   * <fusion-text-passage size="sm">
   * <ul>
   * <li>**center** renders a card that has center aligned content/text</li>
   * </ul>
   * </fusion-text-passage>
   */
  @property()
  align?: 'center';

  render() {
    const componentClassNames = this.componentClassNames('fusion-c-card', {
      'fusion-c-card--bare': this.variant === 'bare',
      'fusion-c-card--align-center': this.align === 'center'
    });

    return html`
      <div class="${componentClassNames}">
        ${this.slotNotEmpty('header') && html`<div class="fusion-c-card__header"><slot name="header"></slot></div>`}
        <div class="fusion-c-card__body">
          <slot></slot>
        </div>
        ${this.slotNotEmpty('footer') && html`<div class="fusion-c-card__footer"><slot name="footer"></slot></div>`}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fusion-card': FusionCard;
  }
}
