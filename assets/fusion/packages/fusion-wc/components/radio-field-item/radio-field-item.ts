import { html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { nanoid } from 'nanoid';
import { FusionElement } from '../FusionElement';
import styles from './radio-field-item.scss';

/**
 * @slot - The component content
 */
@customElement('fusion-radio-field-item')
export class FusionRadioFieldItem extends FusionElement {
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
   * value attribute
   */
  @property({ type: Boolean })
  readOnly?: boolean;

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
   * Checked property
   */
  @property({ type: Boolean })
  checked: boolean = false;

  /**
   * Required attribute
   */
  @property({ type: Boolean })
  required?: boolean;

  /**
   * Hide label?
   */
  @property({ type: Boolean })
  hideLabel?: boolean;

  /**
   * Optional label to appear after label text
   */
  @property()
  optionalLabel?: string = '(optional)';

  /**
   * aria-describedby attribute property
   */
  @property()
  ariaDescribedBy?: string;

  /**
   * Initialize functions
   */
  constructor() {
    super();
    this.removeChecked = this.removeChecked.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  /**
   * Autogenerate
   */
  connectedCallback() {
    super.connectedCallback();
    this.fieldId = this.fieldId || nanoid();
  }

  /**
   * Remove checked
   * 1) Remove checked property from all items and set tabindex to -1
   */
  removeChecked() {
    if (this.parentNode) {
      /* 1 */
      const radioFieldItems = this.parentNode.querySelectorAll('fusion-radio-field-item');
      radioFieldItems.forEach((element: any) => {
        element.checked = false;
        element.shadowRoot.querySelector('.fusion-c-radio__input').setAttribute('tabindex', '-1');
      });
    }
  }

  /**
   * Toggle active state of primary nav item
   * 1) Remove isActive state from all sibling elements
   * 2) Toggle active state of element selected
   */
  clickHandler(e: MouseEvent | KeyboardEvent) {
    e.preventDefault();
    this.removeChecked();
    this.checked = !this.checked; /* 2 */
    const radioInput = this.shadowRoot?.querySelector<HTMLInputElement>('.fusion-c-radio__input');
    if (radioInput) {
      radioInput.setAttribute('tabindex', '0');
    }
    this.dispatch({ eventName: 'change', detailObj: { name: this.name, value: this.value } });
  }

  /**
   * Handle keydown
   * 1) If left or up arrow key is struck and radio field item exists before current item, remove checked from all items and
   * add it to the next item
   * 2) If right or down arrow key is struck and radio field item exists after current item, remove checked from all items and
   * add checked to the next item. Focus on this item and set tabindex for when focusing out of radio field and back onto checked item.
   * 3) If the element is in focused, then for event emission the current focues element should be clicked to emit event.
   * 4) If the Enter key is pressed, then check the radio if no other radio items are checked
   */
  handleKeyDown(e: KeyboardEvent) {
    if (this.previousElementSibling && (e.code === 'ArrowLeft' || e.code === 'ArrowUp')) {
      /* 1 */
      const previous = this.previousElementSibling;
      const previousElement = previous.shadowRoot?.querySelector<HTMLInputElement>('.fusion-c-radio__input:not([disabled])');

      if (previousElement) {
        this.removeChecked();
        previousElement.focus();
        previousElement.click(); /* 3 */
        previousElement.setAttribute('tabindex', '0');
        previous.setAttribute('checked', '');
      }
    } else if (this.nextElementSibling && (e.code === 'ArrowRight' || e.code === 'ArrowDown')) {
      /* 2 */
      const next = this.nextElementSibling;
      const nextElement = next.shadowRoot?.querySelector<HTMLInputElement>('.fusion-c-radio__input:not([disabled])');
      if (nextElement) {
        this.removeChecked();
        nextElement.focus();
        nextElement.click(); /* 3 */
        nextElement.setAttribute('tabindex', '0');
        next.setAttribute('checked', '');
      }
    }

    /* 4 */
    const radioIemsChecked = ([...this.parentNode.children] as FusionRadioFieldItem[]).some((el: FusionRadioFieldItem) => el.checked === true);
    if (e.code === 'Enter' && !radioIemsChecked) {
      this.clickHandler(e);
    }
  }

  render() {
    const componentClassNames = this.componentClassNames('fusion-c-radio-field-item', {
      'fusion-is-active': this.checked === true,
      'fusion-c-radio--hidden-label': this.hideLabel
    });

    return html`
      <div role="listitem" class="${componentClassNames}" @keydown=${this.handleKeyDown}>
        <input
          id="${ifDefined(this.fieldId)}"
          type="radio"
          name="${ifDefined(this.name)}"
          class="fusion-c-radio__input"
          .value="${ifDefined(this.value)}"
          .checked="${this.checked}"
          ?disabled="${this.disabled}"
          ?readonly="${this.readOnly}"
          @change=${this.clickHandler}
          aria-describedby="${ifDefined(this.ariaDescribedBy)}"
        />
        <span class="fusion-c-radio__custom-radio"></span>
        <label class="fusion-c-radio-field-item__label" for="${ifDefined(this.fieldId)}">
          <slot></slot>
        </label>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fusion-radio-field-item': FusionRadioFieldItem;
  }
}
