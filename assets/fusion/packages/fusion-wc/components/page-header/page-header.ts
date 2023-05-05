import { html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { FusionElement } from '../FusionElement';
import styles from './page-header.scss';

/**
 * @slot - The page header content
 */
@customElement('fusion-page-header')
export class FusionPageHeader extends FusionElement {
  static get styles() {
    return unsafeCSS(styles);
  }

  /**
   * Page header title
   */
  @property({ type: String })
  heading: string = 'Page header title';

  render() {
    const componentClassName = this.componentClassNames('fusion-c-page-header', {});

    return html`
      <div class="${componentClassName}">
        <h1 class="fusion-c-page-header__title">
          ${this.heading}${this.slotNotEmpty('titleAfter') &&
          html`<div class="fusion-c-page-header__title-after"><slot name="titleAfter"></slot></div>`}
        </h1>
        <div class="fusion-c-page-header__description">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fusion-page-header': FusionPageHeader;
  }
}
