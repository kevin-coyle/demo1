import { html, unsafeCSS } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { customElement, property, state } from 'lit/decorators.js';
import { FusionElement } from '../FusionElement';
import styles from './primary-nav-item.scss';

/**
 * @slot - The label for the navigation item
 */
@customElement('fusion-primary-nav-item')
export class FusionPrimaryNavItem extends FusionElement {
  /**
   * Primary nav item text
   */
  @property()
  text = 'Nav item';

  /**
   * Primary nav item href
   */
  @property()
  href = '#';

  /**
   * Icon name
   */
  @property()
  iconName?: string = 'keyboard-arrow-down';

  /**
   * Append to the class name. Used for passing in utility classes
   */
  @property({ type: Boolean })
  megaMenu?: boolean;

  /**
   * Append to the class name. Used for passing in utility classes
   */
  @state()
  isActive?: boolean;

  static get styles() {
    return unsafeCSS(styles);
  }

  /**
   * Initialize functions
   */
  constructor() {
    super();
    this.handleOnClickOutside = this.handleOnClickOutside.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  /**
   * Connected Callback lifecycle
   */
  connectedCallback() {
    super.connectedCallback();

    document.addEventListener('mousedown', this.handleOnClickOutside, false);
  }

  /**
   * Disconnected callback lifecycle
   * 1) Remove window resize event listener
   */
  disconnectedCallback() {
    document.removeEventListener('mousedown', this.handleOnClickOutside, false);
    super.disconnectedCallback();
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
   * 4) Check to see if we clicked inside the active navigation item
   * 5) If the navigation is active and we've clicked outside of the nav then it should
   * be closed.
   */
  handleOnClickOutside(event: MouseEvent) {
    /* 2 */
    if (!this.isActive) {
      return;
    }

    /* 3 */
    if (!this.shadowRoot?.host) {
      throw Error('Could not determine navigation context during click handler');
    }

    /* 4 */
    const didClickInside = event.composedPath().includes(this.shadowRoot.host);

    /* 5 */
    if (this.isActive && !didClickInside) {
      this.isActive = false;
    }
  }

  /**
   * Toggle active state of primary nav item
   * 1) Remove isActive state from all sibling elements
   * 2) Toggle active state of element selected
   */
  clickHandler(e: MouseEvent) {
    e.preventDefault();
    if (this.parentNode) {
      const navItems = this.parentNode.querySelectorAll('fusion-primary-nav-item');
      navItems.forEach((element: any) => {
        if (element !== this) {
          element.isActive = false; /* 1 */
        }
      });
    }
    this.isActive = !this.isActive; /* 2 */
  }

  closePanel() {
    this.isActive = false;
  }

  handleOnKeyDown(e: KeyboardEvent) {
    if (e.key === 'Escape' && this.isActive === true) {
      this.closePanel();
      const navLink = this.shadowRoot?.querySelector<HTMLButtonElement | HTMLAnchorElement>('.fusion-c-primary-nav__link');
      if (navLink)
        setTimeout(() => {
          navLink.focus();
        }, 1);
    }
  }

  render() {
    const componentClassName = this.componentClassNames('fusion-c-primary-nav__item', {
      'fusion-is-active': this.isActive === true,
      'fusion-c-primary-nav__item--megamenu': this.megaMenu === true
    });

    if (this.megaMenu) {
      return html`
        <li class="${componentClassName}" @keydown=${this.handleOnKeyDown}>
          <button class="fusion-c-primary-nav__link" @click=${this.clickHandler} aria-expanded=${this.isActive === true ? true : false}>
            ${this.text}
            <fusion-icon styleModifier="fusion-c-button__icon" aria-hidden="true" name="${ifDefined(this.iconName)}"></fusion-icon>
          </button>
          <div class="fusion-c-primary-nav__item-panel">
            <div class="fusion-c-primary-nav__item-panel-inner">
              <slot></slot>
            </div>
          </div>
        </li>
      `;
    } else {
      return html`
        <li class="${componentClassName}">
          <a class="fusion-c-primary-nav__link" href="${this.href}">${this.text}</a>
        </li>
      `;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fusion-primary-nav-item': FusionPrimaryNavItem;
  }
}
