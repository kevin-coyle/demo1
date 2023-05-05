import { html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { FusionElement } from '../FusionElement';
import styles from './avatar.scss';

/**
 * @slot - The component content
 */

@customElement('fusion-avatar')
export class FusionAvatar extends FusionElement {
  static get styles() {
    return unsafeCSS(styles.toString());
  }

  render() {
    const componentClassNames = this.componentClassNames('fusion-c-avatar', {});

    return html`
      <div class="${componentClassNames}">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fusion-avatar': FusionAvatar;
  }
}
