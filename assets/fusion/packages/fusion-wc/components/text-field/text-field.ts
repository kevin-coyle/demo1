import { html, unsafeCSS } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { customElement, property } from 'lit/decorators.js';
import { nanoid } from 'nanoid';
import { FusionElement } from '../FusionElement';
import styles from './text-field.scss';

@customElement('fusion-text-field')
export class FusionTextField extends FusionElement {
  static get styles() {
    return unsafeCSS(styles);
  }

  /**
   * The unique id of the field
   */
  @property()
  fieldId: string;

  /**
   * The form field's label
   */
  @property()
  label: string = 'Label';

  /**
   * Checkbox name attribute property
   */
  @property()
  name?: string;

  /**
   * Value
   */
  @property()
  value?: string;

  /**
   * Fieldnote text
   */
  @property()
  fieldNote?: string;

  /**
   * Aria describedby
   * 1) Used to connect the field note in select field to the select menu for accessibility
   */
  @property()
  ariaDescribedBy?: string;

  /**
   * Required attribute
   */
  @property({ type: Boolean })
  required: boolean = false;

  /**
   * Disabled attribute
   */
  @property({ type: Boolean })
  disabled?: boolean;
  /**
   * Type variants
   * <fusion-text-passage size="sm">
   * <ul>
   * <li>**text** renders a standar text input</li>
   * <li>**email** renders a text input specificall for an email format.</li>
   * <li>**number** renders an input for number values only</li>
   * <li>**url** renders an input for urls only</li>
   * <li>**tel** renders an input for telephone number values only</li>
   * </ul>
   * </fusion-text-passage>
   */
  @property()
  type: 'text' | 'email' | 'number' | 'url' | 'tel' = 'text';

  /**
   * Inverted variant
   * 1) Used for dark backgrounds
   */
  @property({ type: Boolean })
  inverted?: boolean;

  /**
   * Placeholder text
   */
  @property()
  placeholder?: string;

  /**
   * Error state
   */
  @property({ type: Boolean })
  isError?: boolean;

  /**
   * Success state
   */
  @property({ type: Boolean })
  isSuccess?: boolean;

  /**
   * Field note icon name
   */
  @property()
  iconName?: string;

  connectedCallback() {
    super.connectedCallback();
    this.fieldId = this.fieldId || nanoid();
    if (this.fieldNote) {
      this.ariaDescribedBy = this.ariaDescribedBy || nanoid();
    }
  }

  render() {
    const componentClassNames = this.componentClassNames('fusion-c-text-field', {
      'fusion-c-text-field--inverted': this.inverted === true,
      'fusion-is-error': this.isError,
      'fusion-is-success': this.isSuccess
    });

    return html`
      <div class="${componentClassNames}">
        <div class="fusion-c-text-field__body">
          <input
            class="fusion-c-text-field__input"
            type="${this.type}"
            id="${this.fieldId}"
            name="${ifDefined(this.name)}"
            value="${ifDefined(this.value)}"
            ?required="${this.required}"
            ?disabled="${this.disabled}"
            aria-describedby="${ifDefined(this.ariaDescribedBy)}"
            placeholder="${ifDefined(this.placeholder)}"
          />
          <label class="fusion-c-text-field__label" for="${this.fieldId}">${this.label}</label>
        </div>
        ${this.fieldNote &&
        html`<fusion-field-note
          ?inverted=${this.inverted}
          id=${ifDefined(this.ariaDescribedBy)}
          iconName=${ifDefined(this.iconName)}
          ?isSuccess=${this.isSuccess}
          ?isError=${this.isError}
        >
          ${this.fieldNote}
        </fusion-field-note>`}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fusion-text-field': FusionTextField;
  }
}
