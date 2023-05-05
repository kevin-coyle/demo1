import { html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { FusionElement } from '../FusionElement';
import styles from './nav-container.scss';

/**
 * @slot - The navigation container content
 */
@customElement('fusion-nav-container')
export class FusionNavContainer extends FusionElement {
  static get styles() {
    return unsafeCSS(styles);
  }

  render() {
    const componentClassName = this.componentClassNames('fusion-c-nav-container', {});

    return html`
      <div class="${componentClassName}">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fusion-nav-container': FusionNavContainer;
  }
}
