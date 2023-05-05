import { html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { FusionElement } from '../FusionElement';
import styles from './layout-section.scss';

/**
 * @slot - The content of the layout section
 */
@customElement('fusion-layout-section')
export class FusionLayoutSection extends FusionElement {
  static get styles() {
    return unsafeCSS(styles);
  }

  /**
   * Behavioral variants
   * <fusion-text-passage size="sm">
   * <ul>
   * <li>**sticky** allows the layout section to stick to the screen until the section reaches the bottom of the layout or the next layout section.</li>
   * </ul>
   * </fusion-text-passage>
   */
  @property()
  behavior?: 'sticky';

  /**
   * Top style
   * 1) Used to create dynamic sticky containers that can be adjusted based on the content
   */
  @property()
  top?: string = '1rem';

  render() {
    const componentClassName = this.componentClassNames('fusion-c-layout-section', {
      'fusion-c-layout-section--sticky': this.behavior === 'sticky'
    });

    return html`
      <div class="${componentClassName}" style=${'top: ' + this.top}>
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fusion-layout-section': FusionLayoutSection;
  }
}
