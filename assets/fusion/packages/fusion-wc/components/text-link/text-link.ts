import { html, unsafeCSS } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { customElement, property } from 'lit/decorators.js';
import { FusionElement } from '../FusionElement';
import styles from './text-link.scss';

/**
 * @slot - The component content
 */
@customElement('fusion-text-link')
export class FusionTextLink extends FusionElement {
  static get styles() {
    return unsafeCSS(styles.toString());
  }

  /**
   * The link URL
   */
  @property()
  href?: string;

  /**
   * Style variant
   * <fusion-text-passage size="sm">
   * <ul>
   * <li> **display** applies display treatment to the text link (e.g. article title link)</li>
   * <li> **secondary** applies secondary treatment to the text link (e.g. non-prominent links)</li>
   * </ul>
   * </fusion-text-passage>
   */
  @property()
  variant?: 'display' | 'secondary';

  /**
   * Size variant
   * <fusion-text-passage size="sm">
   * <ul>
   * <li> **sm** renders a smaller typography preset than the default</li>
   * </ul>
   * </fusion-text-passage>
   */
  @property()
  size?: 'sm';

  /**
   * Inverted variant
   * 1) Used for dark backgrounds
   */
  @property({ type: Boolean })
  inverted?: boolean;

  render() {
    const componentClassName = this.componentClassNames('fusion-c-text-link', {
      'fusion-c-text-link--inverted': this.inverted === true,
      'fusion-c-text-link--display': this.variant === 'display',
      'fusion-c-text-link--secondary': this.variant === 'secondary',
      'fusion-c-text-link--sm': this.size === 'sm'
    });

    return html`
      <a href="${ifDefined(this.href)}" class="${componentClassName}">
        <slot></slot>
        ${this.slotNotEmpty('linkAfter') &&
        html`<div class="fusion-c-text-link__after">
          <slot name="linkAfter"></slot>
        </div>`}
      </a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fusion-text-link': FusionTextLink;
  }
}
