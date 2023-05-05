import { html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { FusionElement } from '../FusionElement';
import lightDomStyles from './text-passage-light-dom.scss';
import styles from './text-passage.scss';

/**
 * @slot - The text passage content
 */
@customElement('fusion-text-passage')
export class FusionTextPassage extends FusionElement {
  static get styles() {
    return unsafeCSS(styles);
  }

  /**
   * Inverted variant
   * 1) Used for dark backgrounds
   */
  @property({ type: Boolean })
  inverted?: boolean;

  /**
   * Size variant
   * <fusion-text-passage size="sm">
   * <ul>
   * <li> **xs** renders smaller typography than the `sm` variant</li>
   * <li> **sm** renders smaller typography than the default</li>
   * </ul>
   * </fusion-text-passage>
   */
  @property()
  size: 'xs' | 'sm' | 'lg' = undefined;

  /**
   * Cap linelength
   * 1) Applies linelength-container to the text passage
   */
  @property({ type: Boolean })
  capLinelength: boolean;

  /**
   * Add the light dom styles when this component is connected to a page
   */
  connectedCallback() {
    super.connectedCallback();

    const lightDomExists = document.head.querySelector('#fusion-text-passage-styles');
    if (!lightDomExists) {
      const lightDomStyle = document.createElement('style');
      lightDomStyle.id = 'fusion-text-passage-styles';
      lightDomStyle.innerHTML = lightDomStyles;
      document.head.appendChild(lightDomStyle);
    }
  }

  render() {
    const componentClassName = this.componentClassNames('fusion-c-text-passage', {
      'fusion-c-text-passage--inverted': this.inverted,
      'fusion-c-text-passage--lg': this.size === 'lg',
      'fusion-c-text-passage--sm': this.size === 'sm',
      'fusion-c-text-passage--xs': this.size === 'xs'
    });

    if (this.capLinelength) {
      return html`
        <div class="${componentClassName}">
          <fusion-linelength-container>
            <slot></slot>
          </fusion-linelength-container>
        </div>
      `;
    } else {
      return html`
        <div class="${componentClassName}">
          <slot></slot>
        </div>
      `;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fusion-text-passage': FusionTextPassage;
  }
}
