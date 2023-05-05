import { html, unsafeCSS } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { customElement, property } from 'lit/decorators.js';
import { FusionElement } from '../FusionElement';
import styles from './link-list-item.scss';

/**
 * @slot - The default slot to put badges or other components
 */
@customElement('fusion-link-list-item')
export class FusionLinkListItem extends FusionElement {
  static get styles() {
    return unsafeCSS(styles);
  }

  /**
   * The link text
   */
  @property()
  text?: string;

  /**
   * Active link
   */
  @property({ type: Boolean })
  isActive?: boolean;

  /**
   * The link URL
   */
  @property()
  href?: string;

  render() {
    const componentClassName = this.componentClassNames('fusion-c-link-list__item', {
      'fusion-is-active': this.isActive === true
    });

    return html`
      <li class="${componentClassName}">
        <a class="fusion-c-link-list__link" href="${ifDefined(this.href)}"> ${this.text} </a>
        ${this.slotNotEmpty('itemAfter') && html`<div class="fusion-c-link-list__item-after"><slot name="itemAfter"></slot></div>`}
      </li>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fusion-link-list-item': FusionLinkListItem;
  }
}
