import { html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { FusionElement } from '../FusionElement';
import styles from './grid.scss';

/**
 * @slot - The grid items
 */
@customElement('fusion-grid')
export class FusionGrid extends FusionElement {
  static get styles() {
    return unsafeCSS(styles);
  }

  /**
   * Style variant
   * <fusion-text-passage size="sm">
   * <ul>
   * <li>**side-by-side** yields a grid whose grid items display side-by-side (2 per row) on all screen sizes</li>
   * <li>**2up** yields a grid whose grid items are stacked on small screens but display side-by-side when enough screen real estate is available to do so</li>
   * <li>**3up** yields a grid whose grid items are stacked on small screens, transforms to a 2-across pattern and then transforms again to a 3-across pattern</li>
   * <li>**1-3up** yields a grid whose grid items are stacked on small screens and transforms to a 3-across pattern on larger screens</li>
   * <li>**4up** yields a grid whose grid items are stacked on small screens, transforms to a 2-across pattern, transforms again to a 3-across pattern, and ultimately transforms to a 4-across pattern</li>
   * <li>**1-2-4up** yields a grid whose grid items are stacked on small screens, transforms to a 2-across pattern, and ultimately transforms to a 4-across pattern</li>
   * <li>**1-4up** yields a grid whose grid items are stacked on small screens, transforms to a 4-across pattern on medium/large screens</li>
   * </ul>
   * </fusion-text-passage>
   */
  @property()
  variant?: 'side-by-side' | '2up' | '3up' | '1-3up' | '4up' | '1-4up' | '1-2-4up' | '2-4-6up';

  /**
   * Style variant
   * <fusion-text-passage size="sm">
   * <ul>
   * <li>**none** yields a grid whose grid items are spaced without any gutter in between</li>
   * <li>**sm** yields a grid whose grid items are spaced with a gap smaller than the default</li>
   * <li>**lg** yields a grid whose grid items are spaced with a gap larger than the default</li>
   * </ul>
   * </fusion-text-passage>
   */
  @property()
  gap?: 'none' | 'sm' | 'lg';

  /**
   * Break variant
   * <fusion-text-passage size="sm">
   * <ul>
   * <li> **faster** breaks the grid at a smaller width than the default. Example: 2up grid breaks to 2 per row at smaller width than default</li>
   * <li> **slower** breaks the grid at a larger width than the default. Example: 2up grid breaks to 2 per row at larger width than default</li>
   * <li> **lg** yields a grid whose grid items are spaced with a gap larger than the default</li>
   * </ul>
   * </fusion-text-passage>
   */
  @property()
  break?: 'faster' | 'slower';

  render() {
    const componentClassName = this.componentClassNames('fusion-c-grid', {
      'fusion-c-grid--side-by-side': this.variant === 'side-by-side',
      'fusion-c-grid--2up': this.variant === '2up',
      'fusion-c-grid--3up': this.variant === '3up',
      'fusion-c-grid--1-3up': this.variant === '1-3up',
      'fusion-c-grid--4up': this.variant === '4up',
      'fusion-c-grid--1-4up': this.variant === '1-4up',
      'fusion-c-grid--1-2-4up': this.variant === '1-2-4up',
      'fusion-c-grid--2-4-6up': this.variant === '2-4-6up',
      'fusion-c-grid--gap-none': this.gap === 'none',
      'fusion-c-grid--gap-sm': this.gap === 'sm',
      'fusion-c-grid--gap-lg': this.gap === 'lg',
      'fusion-c-grid--break-faster': this.break === 'faster',
      'fusion-c-grid--break-slower': this.break === 'slower'
    });

    return html`
      <div class="${componentClassName}">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fusion-grid': FusionGrid;
  }
}
