import { html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { FusionElement } from '../FusionElement';
import styles from './link-list.scss';

/**
 * @slot - The link list items
 */
@customElement('fusion-link-list')
export class FusionLinkList extends FusionElement {
  static get styles() {
    return unsafeCSS(styles);
  }

  /**
   * Behavioral variant
   * <fusion-text-passage size="sm">
   * <ul>
   * <li>**responsive** renders a horizontal wrapping link list that converts to a stacked link list on large screens</li>
   * <li>**horizontal** renders a horizontal wrapping link list on all screens</li>
   * </ul>
   * </fusion-text-passage>
   */
  @property()
  behavior?: 'responsive' | 'horizontal';

  /**
   * Inverted variant
   * 1) Used for dark backgrounds
   */
  @property({ type: Boolean })
  inverted?: boolean;

  /**
   * Size variants
   * <fusion-text-passage size="sm">
   * <ul>
   * <li>**sm** renders a link list with a smaller typography</li>
   * </ul>
   * </fusion-text-passage>
   */
  @property()
  size?: 'sm';

  /**
   * Spacing between link list items
   * <fusion-text-passage size="sm">
   * <ul>
   * <li>**condensed** renders a link list with a more compact display</li>
   * </ul>
   * </fusion-text-passage>
   */
  @property()
  spacing?: 'condensed';

  /**
   * Style variants
   * <fusion-text-passage size="sm">
   * <ul>
   * <li>**secondary** renders a link list with a more subtle visual treatment</li>
   * <li>**display** renders a link list with a display treatment (e.g. article title)</li>
   * </ul>
   * </fusion-text-passage>
   */
  @property()
  variant?: 'secondary' | 'display';

  render() {
    const componentClassName = this.componentClassNames('fusion-c-link-list', {
      'fusion-c-link-list--secondary': this.variant === 'secondary',
      'fusion-c-link-list--display': this.variant === 'display',
      'fusion-c-link-list--inverted': this.inverted === true,
      'fusion-c-link-list--responsive': this.behavior === 'responsive',
      'fusion-c-link-list--horizontal': this.behavior === 'horizontal',
      'fusion-c-link-list--condensed': this.spacing === 'condensed',
      'fusion-c-link-list--sm': this.size === 'sm'
    });

    return html`
      <ul class="${componentClassName}">
        <slot></slot>
      </ul>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fusion-link-list': FusionLinkList;
  }
}
