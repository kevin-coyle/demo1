import { html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { FusionElement } from '../FusionElement';
import styles from './progress-tracker.scss';

/**
 * @slot - The component content
 */

@customElement('fusion-progress-tracker')
export class FusionProgressTracker extends FusionElement {
  static get styles() {
    return unsafeCSS(styles.toString());
  }

  @property()
  orientation?: 'horizontal';

  render() {
    const componentClassNames = this.componentClassNames('fusion-c-progress-tracker', {
      'fusion-c-progress-tracker--horizontal': this.orientation === 'horizontal'
    });

    return html`
      <ol class="${componentClassNames}" role="list-item">
        <slot></slot>
      </ol>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fusion-progress-tracker': FusionProgressTracker;
  }
}
