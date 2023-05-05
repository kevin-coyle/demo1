import { html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { FusionElement } from '../FusionElement';
import styles from './alert.scss';

/**
 * @slot - The component content
 */
@customElement('fusion-alert')
export class FusionAlert extends FusionElement {
  static get styles() {
    return unsafeCSS(styles.toString());
  }

  /**
   * Icon name used for the icon next to the text
   */
  @property()
  iconName?: string;

  /**
   * Heading variant
   * <fusion-text-passage size="sm">
   * <ul>
   * <li>**1** renders a heading with the heading 1 preset treatment</li>
   * <li>**2** renders a heading with the heading 2 preset treatment</li>
   * <li>**3** renders a heading with the heading 3 preset treatment</li>
   * <li>**4** renders a heading with the heading 4 preset treatment</li>
   * <li>**5** renders a heading with the heading 5 preset treatment</li>
   * <li>**6** renders a heading with the heading 6 preset treatment</li>
   * <li>**kicker** renders a heading with the kicker preset treatment</li>
   * <li>**core-text-lg** renders a heading with the variant core-text-lg preset treatment</li>
   * <li>**data-heading** renders a heading with the data-heading preset treatment</li>
   * </ul>
   * </fusion-text-passage>
   */
  @property()
  headingVariant?: '1' | '2' | '3' | '4' | '5' | '6' | 'kicker' | 'core-text-lg' | 'data-heading' = '4';

  /**
   * Dynamic tag name for the component
   * 1) This is needed to use proper semantic heading treatments depending on where the banner lives on the page
   * <fusion-text-passage size="sm">
   * <ul>
   * <li>**h1** renders an `h1` tag</li>
   * <li>**h2** renders an `h2` tag. This is the default</li>
   * <li>**h3** renders an `h3` tag</li>
   * <li>**h4** renders an `h4` tag</li>
   * <li>**h5** renders an `h5` tag</li>
   * <li>**h6** renders an `h6` tag</li>
   * </ul>
   * </fusion-text-passage>
   */
  @property()
  tagName: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h2';

  /**
   * Text for the banner heading
   */
  @property()
  heading?: string;

  /**
   * Dismissed property
   * 1) State that changes to true and is removed when the banner is dismissed
   */
  @property({ type: Boolean })
  dismissed?: boolean;

  /**
   * Dismissable property
   * 1) Adds the ability to close when toggled to true
   */
  @property({ type: Boolean })
  dismissible?: boolean = true;

  /**
   * Style variants
   <fusion-text-passage size="sm">
   * <ul>
   * <li>**success** renders a banner that represents a success state</li>
   * <li>**error** renders a banner that represents and error state</li>
   * </ul>
   * </fusion-text-passage>
   */
  @property()
  variant?: 'success' | 'error';

  /**
   * On banner dismiss
   * 1) Function that toggles dismissed to true and removes the banner from the UI
   */
  onDismiss() {
    this.dismissed = true; /* 1 */
  }

  render() {
    const componentClassNames = this.componentClassNames('fusion-c-alert', {
      'fusion-c-alert--success': this.variant === 'success',
      'fusion-c-alert--error': this.variant === 'error'
    });

    return this.dismissed
      ? null
      : html`
          <div class="${componentClassNames}">
            <div class="fusion-c-alert__inner">
              ${this.iconName && html`<fusion-icon name=${this.iconName} class="fusion-c-alert__icon"></fusion-icon>`}
              <div class="fusion-c-alert__body">
                ${this.heading &&
                html`<fusion-heading class="fusion-c-alert__title" tagName=${this.tagName} variant="${this.headingVariant}"
                  >${this.heading}</fusion-heading
                >`}
                <fusion-text-passage class="fusion-c-alert__description">
                  <slot></slot>
                </fusion-text-passage>
              </div>
              ${this.dismissible &&
              html`<fusion-button
                class="fusion-c-alert__close-btn"
                variant="bare"
                size="lg"
                iconName="close"
                iconPosition="after"
                @click=${this.onDismiss}
              ></fusion-button>`}
            </div>
          </div>
        `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fusion-alert': FusionAlert;
  }
}
