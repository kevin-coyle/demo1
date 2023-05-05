import { html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { FusionElement } from '../FusionElement';
import styles from './field-note.scss';

/**
 * @slot - The note content
 */
@customElement('fusion-field-note')
export class FusionFieldNote extends FusionElement {
  static get styles() {
    return unsafeCSS(styles);
  }

  /**
   * Error state
   * 1) Changes the component's treatment to represent an error
   */
  @property({ type: Boolean })
  isError?: boolean;

  /**
   * Success state
   * 1) Changes the component's treatment to represent a success
   */
  @property({ type: Boolean })
  isSuccess?: boolean;

  /**
   * Icon  name
   */
  @property()
  iconName?: string;

  /**
   * Inverted variant
   * 1) Used for dark backgrounds
   */
  @property({ type: Boolean })
  inverted?: boolean;

  render() {
    const componentClassName = this.componentClassNames('fusion-c-field-note', {
      'fusion-is-error': this.isError,
      'fusion-is-success': this.isSuccess,
      'fusion-c-field-note--inverted': this.inverted === true
    });

    return html`
      <div class="${componentClassName}">
        ${this.iconName && html`<fusion-icon name="${this.iconName}"></fusion-icon>`}
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fusion-field-note': FusionFieldNote;
  }
}
