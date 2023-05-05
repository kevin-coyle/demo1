import { html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { FusionElement } from '../FusionElement';
import styles from './main.scss';

/**
 * @slot - The main content
 */
@customElement('fusion-main')
export class FusionMain extends FusionElement {
  static get styles() {
    return unsafeCSS(styles);
  }

  render() {
    const componentClassName = this.componentClassNames('fusion-c-main', {});

    return html`<main class=${componentClassName}><slot></slot></main>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fusion-main': FusionMain;
  }
}
