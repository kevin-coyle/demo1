import { html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { FusionElement } from '../FusionElement';
import styles from './section.scss';
/**
 * @slot - The section content
 *
 * @slot sectionHeaderAfter - Right-aligned area that appears to the right of the section header area
 */
@customElement('fusion-section')
export class FusionSection extends FusionElement {
  static get styles() {
    return unsafeCSS(styles);
  }

  render() {
    const componentClassName = this.componentClassNames('fusion-c-section', {});

    return html`
      <section class="${componentClassName}">
        <header class="fusion-c-section-header">
          <div class="fusion-c-section-header__body">
            <slot name="header"></slot>
          </div>
        </header>
        <div class="fusion-c-section__body">
          <slot></slot>
        </div>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fusion-section': FusionSection;
  }
}
