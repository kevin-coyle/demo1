import { html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { FusionElement } from '../FusionElement';
import styles from './grid-item.scss';

/**
 * @slot - The content of the grid item
 */
@customElement('fusion-grid-item')
export class FusionGridItem extends FusionElement {
  static get styles() {
    return unsafeCSS(styles);
  }

  render() {
    const componentClassName = this.componentClassNames('fusion-c-grid__item', {});

    return html`
      <div class="${componentClassName}">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fusion-grid-item': FusionGridItem;
  }
}
