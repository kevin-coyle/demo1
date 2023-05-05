import { html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { FusionElement } from '../FusionElement';
import styles from './heading.scss';

/**
 * @slot - This heading content
 */
@customElement('fusion-heading')
export class FusionHeading extends FusionElement {
  static get styles() {
    return unsafeCSS(styles);
  }

  /**
   * Decorator toggle
   */
  @property({ type: Boolean })
  decorator?: boolean;

  /**
   * Align property
   * - **center** aligns the heading to the center
   */
  @property()
  align?: 'center';

  /**
   * Color property
   * - **knockout** changes the color to knockout token
   */
  @property()
  color?: 'knockout';

  /**
   * Heading variant
   * <fusion-text-passage size="sm">
   * <ul>
   * <li>**display-xl** renders a heading with the heading display-xl preset treatment</li>
   * <li>**display-lg** renders a heading with the heading display-lg preset treatment</li>
   * <li>**display** renders a heading with the heading display preset treatment</li>
   * <li>**display-sm** renders a heading with the heading display-sm preset treatment</li>
   * <li>**headline-lg** renders a heading with the heading headline-lg preset treatment</li>
   * <li>**headline-lg** renders a heading with the heading headline-lg preset treatment</li>
   * <li>**kicker** renders a heading with the kicker preset treatment</li>
   * <li>**core-text-lg** renders a heading with the variant core-text-lg preset treatment</li>
   * <li>**data-heading** renders a heading with the data-heading preset treatment</li>
   * </ul>
   * </fusion-text-passage>
   */
  @property()
  variant?: 'display-xl' | 'display-lg' | 'display' | 'display-sm' | 'headline-lg' | 'headline';

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

  render() {
    const componentClassName = this.componentClassNames('fusion-c-heading', {
      'fusion-c-heading--display-xl': this.variant ? this.variant === 'display-xl' : this.tagName === 'h1',
      'fusion-c-heading--display-lg': this.variant ? this.variant === 'display-lg' : this.tagName === 'h2',
      'fusion-c-heading--display': this.variant ? this.variant === 'display' : this.tagName === 'h3',
      'fusion-c-heading--display-sm': this.variant ? this.variant === 'display-sm' : this.tagName === 'h4',
      'fusion-c-heading--headline-lg': this.variant ? this.variant === 'headline-lg' : this.tagName === 'h5',
      'fusion-c-heading--headline': this.variant ? this.variant === 'headline' : this.tagName === 'h6',
      'fusion-c-heading--decorator': this.decorator === true,
      'fusion-c-heading--align-center': this.align === 'center',
      'fusion-c-heading--knockout': this.color === 'knockout'
    });

    switch (this.tagName) {
      case 'h1':
        return html` <h1 class="${componentClassName}"><slot></slot></h1> `;
      case 'h2':
        return html` <h2 class="${componentClassName}"><slot></slot></h2> `;
      case 'h3':
        return html` <h3 class="${componentClassName}"><slot></slot></h3> `;
      case 'h4':
        return html` <h4 class="${componentClassName}"><slot></slot></h4> `;
      case 'h5':
        return html` <h5 class="${componentClassName}"><slot></slot></h5> `;
      case 'h6':
        return html` <h6 class="${componentClassName}"><slot></slot></h6> `;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fusion-heading': FusionHeading;
  }
}
