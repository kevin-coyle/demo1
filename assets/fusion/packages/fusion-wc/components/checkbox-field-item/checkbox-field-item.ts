import { html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { nanoid } from 'nanoid';
import { FusionElement } from '../FusionElement';
import styles from './checkbox-field-item.scss';

/**
 * @slot - The component content
 */
@customElement('fusion-checkbox-field-item')
export class FusionCheckboxFieldItem extends FusionElement {
  static get styles() {
    return unsafeCSS(styles.toString());
  }

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
   * Adds a hover effect for the checkbox item
   */
  @property({ type: Boolean })
  hasHover?: boolean;

  /**
   * disabled attribute
   */
  @property({ type: Boolean })
  disabled?: boolean;

  /**
   * value attribute
   */
  @property()
  value?: string;

  /**
   * Id
   */
  @property()
  fieldId?: string;

  /**
   * Name attribute
   */
  @property()
  name?: string;

  /**
   * Hide label?
   */
  @property({ type: Boolean })
  hideLabel?: boolean;

  /**
   * Indeterminate property
   */
  @property({ type: Boolean })
  indeterminate?: boolean;

  /**
   * Checked property
   */
  @property({ type: Boolean })
  checked?: boolean;

  /**
   *  Error message for the field
   */
  @property()
  errorNote?: string;

  /**
   * Description or Error message for the field
   */
  @property()
  fieldNote?: any;

  /**
   * Required attribute
   */
  @property({ type: Boolean })
  required?: boolean;

  /**
   * Optional label to appear after label text
   */
  @property()
  optionalLabel?: string = '(optional)';

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

  connectedCallback() {
    super.connectedCallback();
    this.fieldId = this.fieldId || nanoid();
    if (this.fieldNote) {
      this.ariaDescribedBy = this.ariaDescribedBy || nanoid();
    }
  }

  private handleOnChange(): void {
    this.checked = !this.checked;
    if (this.indeterminate === true) {
      this.indeterminate = false;
    }
    this.dispatch({
      eventName: 'change',
      detailObj: {
        checked: this.checked,
        indeterminate: this.indeterminate,
        value: this.value
      }
    });
  }

  /**
   * Handle on keydown events
   * 1) If the Enter key is pressed, then check the checkbox
   */
  handleKeydown(e: KeyboardEvent) {
    if (e.code === 'Enter') {
      this.handleOnChange();
    }
  }

  render() {
    const componentClassNames = this.componentClassNames('fusion-c-checkbox-field-item', {
      'fusion-is-indeterminate': this.indeterminate === true,
      'fusion-c-checkbox-field-item--hidden-label': this.hideLabel,
      'fusion-has-hover': this.hasHover === true,
      'fusion-is-disabled': this.disabled === true
    });

    return html`
      <div role="listitem" class="${componentClassNames}">
        <div class="fusion-c-checkbox-field-item__container">
          <input
            id="${this.fieldId}"
            type="checkbox"
            name="${this.name}"
            class="fusion-c-checkbox__input"
            .value="${this.value}"
            .checked="${this.checked}"
            ?disabled="${this.disabled}"
            ?required=${ifDefined(this.required)}
            @change=${this.handleOnChange}
            @keydown=${this.handleKeydown}
            aria-describedby="${ifDefined(this.ariaDescribedBy)}"
          />
          <span class="fusion-c-checkbox__custom-check">
            <fusion-icon name="check"></fusion-icon>
          </span>
          <label class="fusion-c-checkbox-field-item__label" for="${this.fieldId}">
            <slot></slot>
          </label>
        </div>
        ${this.fieldNote || this.slotNotEmpty('field-note')
          ? html`
              <fusion-field-note ?isDisabled=${this.disabled} id=${ifDefined(this.ariaDescribedBy)} ?isSuccess=${this.isSuccess}>
                <slot name="field-note">${this.fieldNote}</slot>
              </fusion-field-note>
            `
          : html``}
        ${this.errorNote || this.slotNotEmpty('error')
          ? html`
              <fusion-field-note ?isDisabled=${this.disabled} id=${ifDefined(this.ariaDescribedBy)} ?isError=${true}>
                <slot name="error">${this.errorNote}</slot>
              </fusion-field-note>
            `
          : html``}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fusion-checkbox-field-item': FusionCheckboxFieldItem;
  }
}
