import { html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { FusionElement } from '../FusionElement';
import styles from './linelength-container.scss';

/**
 * @slot - The component content
 */
@customElement('fusion-linelength-container')
export class FusionLinelengthContainer extends FusionElement {
  static get styles() {
    return unsafeCSS(styles.toString());
  }

  render() {
    const componentClassNames = this.componentClassNames('fusion-c-linelength-container', {});

    return html`
      <div class="${componentClassNames}">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fusion-linelength-container': FusionLinelengthContainer;
  }
}
