import { html, unsafeCSS } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { customElement, property } from 'lit/decorators.js';
import { FusionElement } from '../FusionElement';
import styles from './button.scss';

@customElement('fusion-button')
export class FusionButton extends FusionElement {
  static get styles() {
    return unsafeCSS(styles);
  }

  /**
   * The button text
   */
  @property()
  text: string;

  /**
   * Style variant
   * <fusion-text-passage size="sm">
   * <ul>
   * <li>**primary** renders the button used for primary actions</li>
   * <li>**danger** renders the button used for caution actions</li>
   * <li>**bare** renders a button a bare background and no border</li>
   * <li>**link** renders a button that looks like a text link</li>
   * </ul>
   * </fusion-text-passage>
   */
  @property()
  variant?: 'primary' | 'danger' | 'bare' | 'link' | 'tertiary';

  /**
   * Disabled attribute
   */
  @property({ type: Boolean })
  disabled?: boolean;

  /**
   * Target attribute for a link (i.e. set to _blank to open in new tab)
   * - **_blank** yields a link that opens in a new tab
   * - **_self** yields a link that loads the URL into the same browsing context as the current one. This is the default behavior
   * - **_parent** yields a link that loads the URL into the parent browsing context of the current one.
   *   If there is no parent, this behaves the same way as _self
   * - **_top** yields a link that loads the URL into the top-level browsing context. If there is no parent, this behaves the same way as _self.
   */
  @property()
  target?: '_blank' | '_self' | '_parent' | '_top';

  /**
   * Strong variation for dark backgrounds
   */
  @property({ type: Boolean })
  strong?: boolean;

  /**
   * URL if this is an <a> element - this swaps <button> for <a>
   */
  @property()
  href?: string;

  /**
   * Icon name
   */
  @property()
  iconName?: string;

  /**
   * Icon position
   * <fusion-text-passage size="sm">
   * <ul>
   * <li>**top** places the icon on top of the button text</li>
   * <li>**before** places the icon before the button text</li>
   * <li>**after** places the icon after the button text</li>
   * </ul>
   * </fusion-text-passage>
   */
  @property()
  iconPosition?: 'top' | 'before' | 'after' = undefined;

  /**
   * Size variant
   * <fusion-text-passage size="sm">
   * <ul>
   * <li>**sm** shrinks the button typography and overall size</li>
   * <li>**lg** increases the button typography size and overall size</li>
   * </ul>
   * </fusion-text-passage>
   */
  @property()
  size?: 'sm' | 'lg';

  /**
   * Visually hide button text (but text is still accessible to assistive technology)
   * 1) Use this for icon-only buttons for accessibility
   */
  @property({ type: Boolean })
  hideText = false;

  /**
   * Full width button
   */
  @property({ type: Boolean })
  fullWidth = false;

  /**
   * Inverted property
   */
  @property({ type: Boolean })
  inverted?: boolean;

  render() {
    const componentClassName = this.componentClassNames('fusion-c-button', {
      'fusion-c-button--primary': this.variant === 'primary',
      'fusion-c-button--tertiary': this.variant === 'tertiary',
      'fusion-c-button--bare': this.variant === 'bare',
      'fusion-c-button--link': this.variant === 'link',
      'fusion-c-button--inverted': this.inverted === true,
      'fusion-c-button--full-width': this.fullWidth === true,
      'fusion-c-button--sm': this.size === 'sm',
      'fusion-c-button--lg': this.size === 'lg'
    });

    if (this.href) {
      return html`
        <a href="${ifDefined(this.href)}" class="${componentClassName}" target=${this.target}>
          ${this.iconPosition === 'before' || this.iconPosition === 'top'
            ? html` <fusion-icon styleModifier="fusion-c-button__icon" aria-hidden="true" name="${ifDefined(this.iconName)}"></fusion-icon> `
            : html``}
          <span class="${this.hideText ? 'fusion-u-is-vishidden fusion-c-button__text' : 'fusion-c-button__text'}">${this.text}</span>
          ${this.iconPosition === 'after'
            ? html` <fusion-icon styleModifier="fusion-c-button__icon" aria-hidden="true" name="${ifDefined(this.iconName)}"></fusion-icon> `
            : html``}
        </a>
      `;
    } else {
      return html`
        <button class="${componentClassName}" ?disabled=${this.disabled}>
          ${this.iconPosition === 'before' || this.iconPosition === 'top'
            ? html` <fusion-icon styleModifier="fusion-c-button__icon" aria-hidden="true" name="${ifDefined(this.iconName)}"></fusion-icon> `
            : html``}
          <span class="${this.hideText ? 'fusion-u-is-vishidden fusion-c-button__text' : 'fusion-c-button__text'}">${this.text}</span>
          ${this.iconPosition === 'after'
            ? html` <fusion-icon styleModifier="fusion-c-button__icon" aria-hidden="true" name="${ifDefined(this.iconName)}"></fusion-icon> `
            : html``}
        </button>
      `;
    }
  }
}
