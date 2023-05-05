import { html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { FusionElement } from '../FusionElement';
import styles from './definition-list.scss';

/**
 * @slot - The component content
 */

@customElement('fusion-definition-list')
export class FusionDefinitionList extends FusionElement {
  static get styles() {
    return unsafeCSS(styles.toString());
  }

  render() {
    const componentClassNames = this.componentClassNames('fusion-c-definition-list', {});

    return html`
      <dl class="${componentClassNames}" role="list">
        <slot></slot>
      </dl>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fusion-definition-list': FusionDefinitionList;
  }
}
