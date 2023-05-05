import { html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { FusionElement } from '../FusionElement';
import styles from './list-item.scss';

/**
 * @slot - The content of the list item
 */
@customElement('fusion-list-item')
export class FusionListItem extends FusionElement {
  static get styles() {
    return unsafeCSS(styles);
  }

  render() {
    const componentClassName = this.componentClassNames('fusion-c-list__item', {});

    return html`
      <li class="${componentClassName}">
        <slot></slot>
      </li>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fusion-list-item': FusionListItem;
  }
}
