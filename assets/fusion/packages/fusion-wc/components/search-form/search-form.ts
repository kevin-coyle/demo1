/* eslint-disable @typescript-eslint/no-explicit-any */
import { html, unsafeCSS } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { nanoid } from 'nanoid';
import { FusionElement } from '../FusionElement';
import '../button/button';
import '../dropdown-panel/dropdown-panel';
import styles from './search-form.scss';

@customElement('fusion-search-form')
export class FusionSearchForm extends FusionElement {
  static get styles() {
    return unsafeCSS(styles);
  }

  /**
   * The unique id of the field
   */
  @property()
  ariaControlsId: string;

  /**
   * The unique id of the field
   */
  @property()
  fieldId?: string;

  /**
   * isMobile property
   */
  @property({ type: Boolean })
  isMobile?: boolean;

  /**
   * Label of the form field
   */
  @property()
  label?: string = 'Search';

  /**
   * Description for the field
   */
  @property()
  fieldNote?: string;

  /**
   *  Error message for the field
   */
  @property()
  errorNote?: string;

  /**
   * Visually hide the label from the UI
   */
  @property({ type: Boolean })
  hideLabel?: boolean;

  /**
   * Search button text
   */
  @property()
  buttonText?: string;

  /**
   * Clear button text
   */
  @property()
  clearButtonText = 'Clear text';

  /**
   * Disabled attribute
   */
  @property({ type: Boolean })
  disabled?: boolean;

  /**
   * Active state
   */
  @property({ type: Boolean })
  isActive = false;

  /**
   * Error state
   */
  @property({ type: Boolean })
  isError?: boolean;

  /**
   * Placeholder text
   */
  @property()
  placeholder?: string = 'Find asset';

  /**
   * Input value
   */
  @property()
  value?: string;

  /**
   * Aria describedby
   * 1) Used to connect the field note and errorNote for accessibility
   */
  @property()
  ariaDescribedBy?: string;

  /**
   * is Dynamic
   */
  @property({ type: Boolean })
  isDynamic?: boolean;

  /**
   * is Overlay
   */
  @property({ type: Boolean })
  isOverlay?: boolean;

  /**
   * Query the dynamic dropdown panel element
   */
  @query('.fusion-c-search-form--dynamic .fusion-c-search-form__dropdown-panel')
  _catDropdownPanel: HTMLElement;

  /**
   * Spacing variants
   * <fusion-text-passage size="sm">
   * <ul>
   * <li>**dense** renders a more compact form field with smaller button
   * </ul>
   * </fusion-text-passage>
   */
  @property()
  spacing?: 'dense';

  /**
   * Style variants
   * <fusion-text-passage size="sm">
   * <ul>
   * <li>**bare** renders a search form without a border. Only use this within some sort of container so
   * a user has an idea as to where the tap/click area is on the input</li>
   * </ul>
   * </fusion-text-passage>
   */
  @property()
  variant?: 'bare';

  /**
   * Position property
   */
  @property()
  position?: 'bottom' | 'top' = 'bottom';

  /**
   * Maxlength of characters for the search form
   */
  @property({ type: Number })
  maxlength?: number;

  /**
   * Focused in menu toggle
   */
  @property({ type: Boolean })
  isFocusedIn?: boolean;

  /**
   * Use this Flag along with emptyMessage named slot to report error message
   *
   */
  @property({ type: Boolean })
  isEmpty?: boolean;

  /**
   * Active element in the dropdown panel
   * 1) This is used to read out the active value to the user
   */
  @property()
  ariaActiveDescendantId: string;

  /**
   * Initialize functions
   */
  constructor() {
    super();
    this.handleOnClickOutside = this.handleOnClickOutside.bind(this);
    this.onChanged = this.onChanged.bind(this);
  }

  /**
   * Connected callback lifecycle
   */
  connectedCallback() {
    super.connectedCallback();
    this.fieldId = this.fieldId || nanoid();
    this.ariaControlsId = this.ariaControlsId || nanoid();
    document.addEventListener('mousedown', this.handleOnClickOutside, false);
  }

  /**
   * Disconnected callback lifecycle
   */
  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('mousedown', this.handleOnClickOutside, false);
  }

  /**
   * Change output binding
   * 1) If has input value then show the dropdown panel and clear icon
   * 2) Emit target value to outside of component to be used at application level
   */
  private onChanged(e: any) {
    this.value = e.target.value;
    if (this.value.length > 0) {
      this.isActive = true;
    } else {
      this.isActive = false;
    }
  }

  /**
   * Close dropdown panel
   */
  closePanel() {
    this.isActive = false;
  }

  /**
   * Clear the input field on click
   * 1) Set active, clear and error to false after click
   * 2) Clear the input value after click
   * 3) Set the focus on the input after the clear
   * 4) @fires change event when we click on close icon
   */
  clearSearchForm() {
    this.isActive = false;
    this.value = '';
    this.shadowRoot.querySelector<HTMLInputElement>('.fusion-c-search-form__input').value = ''; /* 2 */
    this.isError = false;
    this.shadowRoot.querySelector<HTMLInputElement>('.fusion-c-search-form__input').focus(); /* 3 */
    this.isFocusedIn = false;
  }

  /**
   * Handle click outside the component
   * 1) Close the show hide panel on click outside
   * 2) If the nav is already closed then we don't care about outside clicks and we
   * can bail early
   * 3) By the time a user clicks on the page the shadowRoot will almost certainly be
   * defined, but TypeScript isn't that trusting and sees this.shadowRoot as possibly
   * undefined. To work around that we'll check that we have a shadowRoot (and a
   * rendered .host) element here to appease the TypeScript compiler. This should never
   * actually be shown or run for a human end user.
   * 4) Check to see if we clicked inside the active panel
   * 5) If the panel is active and we've clicked outside of the panel then it should
   * be closed.
   */
  handleOnClickOutside(e: MouseEvent) {
    /* 2 */
    if (!this.isActive) {
      return;
    }

    /* 3 */
    if (!this.shadowRoot?.host) {
      throw Error('Could not determine panel context during click handler');
    }

    /* 4 */
    const didClickInside = e.composedPath().includes(this.shadowRoot.host);

    /* 5 */
    if (this.isActive && !didClickInside) {
      setTimeout(() => {
        this.closePanel();
      }, 1);
    }
  }

  handleSearchClick() {
    const eventValue = new CustomEvent('searchClick', {
      detail: this.value,
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(eventValue);
  }

  /**
   * Set menu active state
   * 1) Toggle the active state between true and false
   * 2) If the active state is turned on, set focus to the first element in the dropdown panel
   * 3) If the active state is toggled to false, close the panel and return focus to the dropdown trigger
   * 4) If the event target has a value (list-item has value prop), then replace the input value with the list-item value
   */
  toggleActive() {
    this.isActive = !this.isActive;

    setTimeout(() => {
      const elem = this.shadowRoot.querySelector<HTMLInputElement>('.fusion-c-search-form__input');
      this.isActive === true ? elem.focus() : elem.blur();
    }, 100);
  }

  /**
   * Handle on keydown
   * 1) If the dropdown panel is open and escape is keyed, close the menu and return focus to the trigger button
   * 2) If the dropdown panel is active but not arrowed into yet and arrow down (or arrow up when dropdown is above search form)
   *  is keyed, move the `aria-selected` state into the first list item.
   * A while condition is added, so that if there are disabled list items in panel, then it will be skipped and the focus
     will be kept to the first non-disabled list item.
   * 3) Otherwise, if the item is focused in, run various keydown events
   * 4) When focused in panel and tabbed, focus on the clear button in the input
   * 5) When focused in panel and enter is selected on item in dropdown, change the value to the list-item value
   * prop and
   * 6) If current selected item has previous element and arrow up is selected, move `aria-selected to the previous item
   * 7) Otherwise, if If current selected item has next element and arrow down is selected, move `aria-selected to the next item
   * 8) Otherwise, if 6 isn't true when arrow up is selected when first item is aria-selected, then return the `aria-selected` state
   * to the last item
   * 9) Otherwise, if 7 isn't true and arrow down is selected when last item is aria-seleected, then return the `aria-selected` state
   * to the first item
   * 10) If the dropdown panel is active but not arrowed into yet and tab is keyed, move focus to the clear button and remove
   * 11) Update the panel scroll when the item is focused on.
   * 12)while condition added so that, it checks if the PreviousElementsibling is disabled or not. If disabled, then it keeps looping
     until it finds the previous non-disabled list-item. If it reaches the top , and if there is no such non-disabled items, then focusOnLastitem
     is called so that the focus returns back to the last non-disabled item.
   * 13)while condition added so that, it checks if the nextElementsibling is disabled or not. If disabled, then it keeps looping
     until it finds the next non-disabled list-item. If it reaches the end , and if there is no such non-disabled items, then focusOnFirstitem
     is called so that the focus returns back to the first non-disabled item.
   * 14) Use control + option + spacebar to trigger the dropdown without typing
   */
  handleKeyDown(e: KeyboardEvent) {
    /* 1 */
    if (this.isActive === true && e.code === 'Escape') {
      this.toggleActive();
    }
  }

  render() {
    const componentClassName = this.componentClassNames('fusion-c-search-form', {
      'fusion-c-search-form--bare': this.variant === 'bare',
      'fusion-c-search-form--dense': this.spacing === 'dense',
      'fusion-c-search-form--with-button': this.buttonText,
      'fusion-c-search-form--hidden-label': this.hideLabel,
      'fusion-c-search-form--top': this.position === 'top',
      'fusion-c-search-form--dynamic': this.isDynamic === true,
      'fusion-is-disabled': this.disabled,
      'fusion-is-error': this.isError,
      'fusion-is-active': this.isActive === true,
      'fusion-is-overlay': this.isOverlay === true,
      'fusion-is-focused-in': this.isFocusedIn === true
    });

    return html`
      <div class="${componentClassName}">
        <div class="fusion-c-search-form__body">
          <div class="fusion-c-search-form__typeahead">
            <input
              class="fusion-c-search-form__input"
              type="text"
              id="${this.fieldId}"
              .value="${ifDefined(this.value)}"
              placeholder="${ifDefined(this.placeholder)}"
              aria-expanded=${this.isActive === true ? true : false}
              aria-autocomplete="list"
              aria-activedescendant="${this.ariaActiveDescendantId}"
              aria-controls=${this.ariaControlsId}
              role="combobox"
              ?disabled="${this.disabled}"
              @keydown=${this.handleKeyDown}
              @input=${(e: Event) => this.onChanged(e)}
              maxlength=${ifDefined(this.maxlength)}
            />
            <label class="fusion-c-search-form__label" for="${this.fieldId}">${this.label}</label>
            ${this.isEmpty && this.slotNotEmpty('emptyMessage')
              ? html`
                  <fusion-dropdown-panel
                    class="fusion-c-search-form__dropdown-panel"
                    @keydown=${this.handleKeyDown}
                    ?hasScroll=${!this.isMobile && true}
                  >
                    ${this.slotNotEmpty('emptyMessage') &&
                    html`
                      <div class="fusion-c-search-form__empty-message">
                        <slot name="emptyMessage"></slot>
                      </div>
                    `}
                  </fusion-dropdown-panel>
                `
              : this.isEmpty
              ? ''
              : html`
                  <fusion-dropdown-panel
                    class="fusion-c-search-form__dropdown-panel"
                    @keydown=${this.handleKeyDown}
                    ?hasScroll=${!this.isMobile && true}
                  >
                    <slot @select=${this.toggleActive}></slot>
                  </fusion-dropdown-panel>
                `}
          </div>
          ${this.buttonText
            ? html`
                <fusion-button
                  class="fusion-c-search-form__submit-button"
                  text=${this.buttonText}
                  size=${ifDefined(!this.hideLabel && 'lg')}
                  @click=${this.handleSearchClick}
                  iconPosition="after"
                  iconName="keyboard-arrow-right"
                  variant="primary"
                  ?disabled="${this.disabled}"
                >
                  ${this.buttonText}
                </fusion-button>
              `
            : ''}
        </div>
        ${this.fieldNote || this.slotNotEmpty('field-note')
          ? html`
              <fusion-field-note id=${ifDefined(this.ariaDescribedBy)}>
                <slot name="field-note">${this.fieldNote}</slot>
              </fusion-field-note>
            `
          : html``}
        ${this.errorNote || this.slotNotEmpty('error')
          ? html`
              <fusion-field-note class="fusion-c-search-form__field-note" ?isError=${true} id=${ifDefined(this.ariaDescribedBy)}>
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
    'fusion-search-form': FusionSearchForm;
  }
}
