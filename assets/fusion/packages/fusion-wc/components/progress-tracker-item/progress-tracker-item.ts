import { html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { FusionElement } from '../FusionElement';
import styles from './progress-tracker-item.scss';

/**
 * @slot - The component content
 */

@customElement('fusion-progress-tracker-item')
export class FusionProgressTrackerItem extends FusionElement {
  static get styles() {
    return unsafeCSS(styles.toString());
  }

  @property({ type: Boolean })
  isActive?: boolean;

  render() {
    const componentClassNames = this.componentClassNames('fusion-c-progress-tracker-item', {
      'fusion-is-active': this.isActive
    });

    return html`
      <li class="${componentClassNames}" role="listitem">
        <a class="fusion-c-progress-track__link" href="#">
          <slot></slot>
        </a>
      </li>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fusion-progress-tracker-item': FusionProgressTrackerItem;
  }
}
