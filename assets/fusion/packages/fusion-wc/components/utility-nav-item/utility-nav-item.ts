import { html, unsafeCSS } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { customElement, property } from 'lit/decorators.js';
import { FusionElement } from '../FusionElement';
import styles from './utility-nav-item.scss';

@customElement('fusion-utility-nav-item')
export class FusionUtilityNavItem extends FusionElement {
  static get styles() {
    return unsafeCSS(styles);
  }

  /**
   * Hide text toggle
   * 1) Visually hides the text so screenreaders can still read for accessibility when set to true.
   */
  @property({ type: Boolean })
  hideText?: boolean;

  /**
   * URL of the utility nav item
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
   * <li>**before** places the icon before the text</li>
   * <li>**after** places the icon after the text</li>
   * </ul>
   * </fusion-text-passage>
   */
  @property()
  iconPosition?: 'before' | 'after' = undefined;

  /**
   * Text of the utility nav item
   */
  @property()
  text?: string;

  render() {
    const componentClassName = this.componentClassNames('fusion-c-utility-nav__item', {});

    if (this.href) {
      return html`
        <li class="${componentClassName}">
          <a href="${this.href}" class="fusion-c-utility-nav__link">
            ${this.iconPosition === 'before'
              ? html`<fusion-icon styleModifier="fusion-c-utility-nav__icon" aria-hidden="true" name="${ifDefined(this.iconName)}"></fusion-icon>`
              : html``}
            <span class="${this.hideText ? 'fusion-u-is-vishidden fusion-c-utility-nav__text' : 'fusion-c-utility-nav__text'}">${this.text}</span>
            ${this.iconPosition === 'after'
              ? html`<fusion-icon styleModifier="fusion-c-utility-nav__icon" aria-hidden="true" name="${ifDefined(this.iconName)}"></fusion-icon>`
              : html``}
          </a>
        </li>
      `;
    } else {
      return html`
        <li class="${componentClassName}">
          <button class="fusion-c-utility-nav__link">
            ${this.iconPosition === 'before'
              ? html`<fusion-icon styleModifier="fusion-c-utility-nav__icon" aria-hidden="true" name="${ifDefined(this.iconName)}"></fusion-icon>`
              : html``}
            <span class="${this.hideText ? 'fusion-u-is-vishidden fusion-c-utility-nav__text' : 'fusion-c-utility-nav__text'}">${this.text}</span>
            ${this.iconPosition === 'after'
              ? html`<fusion-icon styleModifier="fusion-c-utility-nav__icon" aria-hidden="true" name="${ifDefined(this.iconName)}"></fusion-icon>`
              : html``}
          </button>
        </li>
      `;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fusion-utility-nav-item': FusionUtilityNavItem;
  }
}
