import { html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { nanoid } from 'nanoid';
import { FusionElement } from '../FusionElement';
import styles from './fieldset.scss';

/**
 * @slot - The component content
 */
@customElement('fusion-fieldset')
export class FusionFieldset extends FusionElement {
  static get styles() {
    return unsafeCSS(styles.toString());
  }

  /**
   * Align property
   * - **center** centers the label and items in the container
   */
  @property()
  align?: 'center';

  /**
   * Error switch
   */
  @property({ type: Boolean })
  isError?: boolean;

  /**
   * Success switch
   */
  @property({ type: Boolean })
  isSuccess?: boolean;

  /**
   * disabled attribute
   */
  @property({ type: Boolean })
  disabled?: boolean;

  /**
   *fieldnote for checkbox
   */
  @property()
  fieldNote?: string;

  /**
   * Errornote text
   */

  @property()
  errorNote?: string;
  /**
   * Required attribute
   */
  @property({ type: Boolean })
  required?: boolean;

  /**
   * Visibly hide the legend
   * 1) Removes the legend from visual users but can still be read by assistive technology
   */
  @property({ type: Boolean })
  hideLegend?: boolean;

  /**
   * Inverted variant
   * 1) Used for dark backgrounds
   */
  @property({ type: Boolean })
  inverted?: boolean;

  /**
   * aria-describedby attribute property
   */
  @property()
  ariaDescribedBy?: string;

  /**
   * The form field's label
   */
  @property()
  label?: string;

  /**
   * Horizontal checkbox display
   */
  @property()
  orientation: 'horizontal';

  /**
   * Size property
   * - **lg** creates a larger label and fieldset
   */
  @property()
  size?: 'lg';

  /**
   * Variant property
   * - **boxed** creates a boxed version of the radio field
   */
  @property()
  variant?: 'boxed';

  /**
   * Autogenerate
   */
  connectedCallback() {
    super.connectedCallback();
    if (this.fieldNote || this.errorNote || this.slotNotEmpty('field-note') || this.slotNotEmpty('error')) {
      this.ariaDescribedBy = this.ariaDescribedBy || nanoid();
    }
  }

  render() {
    const componentClassNames = this.componentClassNames('fusion-c-fieldset', {
      'fusion-c-fieldset--inverted': this.inverted === true,
      'fusion-c-fieldset--required': this.required,
      'fusion-c-fieldset--disabled': this.disabled === true,
      'fusion-c-fieldset--horizontal': this.orientation === 'horizontal',
      'fusion-c-fieldset--align-center': this.align === 'center',
      'fusion-c-fieldset--lg': this.size === 'lg',
      'fusion-c-fieldset--boxed': this.variant === 'boxed'
    });

    return html` <fieldset class="${componentClassNames}">
      <legend
        class=${this.hideLegend || !this.label ? 'fusion-c-fieldset__legend fusion-u-is-vishidden' : 'fusion-c-fieldset__legend'}
        aria-describedby="${this.ariaDescribedBy}"
      >
        ${this.label}
      </legend>

      <div class="fusion-c-fieldset__body">
        <div role="list" class="fusion-c-fieldset__list">
          <slot></slot>
        </div>
      </div>
      ${this.fieldNote || this.slotNotEmpty('field-note')
        ? html`
            <fusion-field-note
              ?isDisabled=${this.disabled}
              ?inverted=${this.inverted}
              id=${ifDefined(this.ariaDescribedBy)}
              ?isSuccess=${this.isSuccess}
            >
              <slot name="field-note">${this.fieldNote}</slot>
            </fusion-field-note>
          `
        : html``}
      ${this.errorNote || this.slotNotEmpty('error')
        ? html`
            <fusion-field-note ?isDisabled=${this.disabled} ?inverted=${this.inverted} id=${ifDefined(this.ariaDescribedBy)} ?isError=${true}>
              <slot name="error">${this.errorNote}</slot>
            </fusion-field-note>
          `
        : html``}
    </fieldset>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fusion-fieldset': FusionFieldset;
  }
}
