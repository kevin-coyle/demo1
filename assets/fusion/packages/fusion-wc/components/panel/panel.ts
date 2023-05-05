import { html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { FusionElement } from '../FusionElement';
import styles from './panel.scss';

/**
 * @slot - The component content
 */

@customElement('fusion-panel')
export class FusionPanel extends FusionElement {
  static get styles() {
    return unsafeCSS(styles.toString());
  }

  @property()
  spacing?: 'condensed';

  @property({ type: Boolean })
  removeSm?: boolean;

  @property()
  variant?: 'dotted';

  render() {
    const componentClassNames = this.componentClassNames('fusion-c-panel', {
      'fusion-c-panel--condensed': this.spacing === 'condensed',
      'fusion-c-panel--remove-sm': this.removeSm === true,
      'fusion-c-panel--dotted': this.variant === 'dotted'
    });

    return html`
      <div class="${componentClassNames}">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fusion-panel': FusionPanel;
  }
}
