import { html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { FusionElement } from '../FusionElement';
import styles from './hero.scss';

/**
 * @slot - The component content
 */
@customElement('fusion-hero')
export class FusionHero extends FusionElement {
  static get styles() {
    return unsafeCSS(styles.toString());
  }

  /**
   * Image source
   */
  @property()
  imgSrc?: string;

  /**
   * Image alt text
   */
  @property()
  imgAlt?: string;

  /**
   * Position variant. Bottom left is the default position
   * <fusion-text-passage size="sm">
   * <ul>
   * <li>**top-left** renders content in the top left corner of the image</li>
   * <li>**left** renders content in the left, center part of the image</li>
   * <li>**top-center** renders content in the top, center part of the image</li>
   * <li>**center** renders content center of the image</li>
   * <li>**bottom-center** renders content bottom center of the image</li>
   * <li>**top-right** renders content top-right of the image</li>
   * <li>**right** renders content right of the image</li>
   * <li>**bottom-right** renders content bottom, right part of the image</li>
   * </ul>
   * </fusion-text-passage>
   */
  @property()
  align?: 'top-left' | 'left' | 'top-center' | 'center' | 'bottom-center' | 'top-right' | 'right' | 'bottom-right';

  render() {
    const componentClassNames = this.componentClassNames('fusion-c-hero', {
      'fusion-c-hero--top-left': this.align === 'top-left',
      'fusion-c-hero--left': this.align === 'left',
      'fusion-c-hero--top-center': this.align === 'top-center',
      'fusion-c-hero--center': this.align === 'center',
      'fusion-c-hero--bottom-center': this.align === 'bottom-center',
      'fusion-c-hero--top-right': this.align === 'top-right',
      'fusion-c-hero--right': this.align === 'right',
      'fusion-c-hero--bottom-right': this.align === 'bottom-right'
    });

    return html`
      <div class="${componentClassNames}">
        <fusion-layout-container>
          <img class="fusion-c-hero__image" src="${this.imgSrc}" alt="${this.imgAlt}" />
          <div class="fusion-c-hero__body">
            <slot></slot>
          </div>
        </fusion-layout-container>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fusion-hero': FusionHero;
  }
}
