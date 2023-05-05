import { html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { FusionElement } from '../FusionElement';
import styles from './band.scss';

/**
 * @slot - The band content
 */
@customElement('fusion-band')
export class FusionBand extends FusionElement {
  static get styles() {
    return unsafeCSS(styles);
  }

  /**
   * Gradient variant
   * <fusion-text-passage size="sm">
   * <ul>
   * <li>**1** renders the band with the set gradient background</li>
   * </ul>
   * </fusion-text-passage>
   */
  @property()
  variant?: 'branded';

  render() {
    const componentClassName = this.componentClassNames('fusion-c-band', {
      'fusion-c-band--branded': this.variant === 'branded'
    });

    return html`
      <div class="${componentClassName}">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fusion-band': FusionBand;
  }
}
