import { html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { FusionElement } from '../FusionElement';
import styles from './definition-list-item.scss';

/**
 * @slot - The component content
 */

@customElement('fusion-definition-list-item')
export class FusionDefinitionListItem extends FusionElement {
  static get styles() {
    return unsafeCSS(styles.toString());
  }
  render() {
    const componentClassNames = this.componentClassNames('fusion-c-definition-list__item', {});

    return html`
      <div class="${componentClassNames}" role="listitem">
        <dt class="fusion-c-definition-list__term"><slot name="term"></slot></dt>
        <dd class="fusion-c-definition-list__description"><slot name="definition"></slot></dd>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fusion-definition-list-item': FusionDefinitionListItem;
  }
}
