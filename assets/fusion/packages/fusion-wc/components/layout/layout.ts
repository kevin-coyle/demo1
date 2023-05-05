import { html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { FusionElement } from '../FusionElement';
import styles from './layout.scss';

/**
 * @slot - The layout content
 */
@customElement('fusion-layout')
export class FusionLayout extends FusionElement {
  static get styles() {
    return unsafeCSS(styles);
  }

  /**
   * Break variant
   * <fusion-text-passage size="sm">
   * <ul>
   * <li> **faster** breaks the grid at a smaller width than the default.
   * Example: Sidebar breaks underneath main layout section at smaller breakpoint than default</li>
   * <li> **slower** breaks the grid at a larger width than the default.
   * Example: Sidebar breaks underneath main layout section at wider breakpoint than default</li>
   * <li> **none** the grid does not break.</li>
   * </ul>
   * </fusion-text-passage>
   */
  @property()
  break?: 'faster' | 'slower' | 'none';

  /**
   * Gap variant
   * <fusion-text-passage size="sm">
   * <ul>
   * <li>The default spacing is 16px
   * <li>**none** yields a layout whose layout sections are spaced without any gutter in between on large screens.
   * Small screens gap sits at 16px.</li>
   * <li>**sm** yields a layout whose layout sections are spaced 8px apart on large screens. Small screens gutters move to 16px between.</li>
   * <li>**lg** yields a layout whose layout sections are spaced 24px apart on large screens. Small screens gutters move to 16px between.</li>
   * <li>**xl** yields a layout whose layout sections are spaced 32px apart on large screens. Small screens gutters move to 16px between.</li>
   * </ul>
   * </fusion-text-passage>
   */
  @property()
  gap?: 'none' | 'sm' | 'lg' | 'xl';

  /**
   *  Style variants
   * <fusion-text-passage size="sm">
   * <ul>
   * <li>**left-sidebar** formats the first `layout-section` component as a left sidebar</li>
   * </ul>
   * </fusion-text-passage>
   */
  @property()
  variant?: 'left-sidebar';

  render() {
    const componentClassName = this.componentClassNames('fusion-c-layout', {
      'fusion-c-layout--left-sidebar': this.variant === 'left-sidebar',
      'fusion-c-layout--gap-none': this.gap === 'none',
      'fusion-c-layout--gap-sm': this.gap === 'sm',
      'fusion-c-layout--gap-lg': this.gap === 'lg',
      'fusion-c-layout--gap-xl': this.gap === 'xl',
      'fusion-c-layout--break-faster': this.break === 'faster',
      'fusion-c-layout--break-slower': this.break === 'slower'
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
    'fusion-layout': FusionLayout;
  }
}
