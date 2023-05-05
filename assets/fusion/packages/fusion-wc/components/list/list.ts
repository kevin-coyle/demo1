import { html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { FusionElement } from '../FusionElement';
import styles from './list.scss';

/**
 * @slot - The list items
 */
@customElement('fusion-list')
export class FusionList extends FusionElement {
  static get styles() {
    return unsafeCSS(styles);
  }

  /**
   * Style variants
   * <fusion-text-passage size="sm">
   * <ul>
   * <li>**bare** removes any lines from in between list items</li>
   * </ul>
   * </fusion-text-passage>
   */
  @property()
  variant?: 'bare';

  /**
   * Spacing variants
   * <fusion-text-passage size="sm">
   * <ul>
   * <li>**padded** applies more padding in between list items compared to the default</li>
   * <li>**condensed** reduces padding in between list items compared to the default</li>
   * </ul>
   * </fusion-text-passage>
   */
  @property()
  spacing?: 'padded' | 'condensed';

  render() {
    const componentClassName = this.componentClassNames('fusion-c-list', {
      'fusion-c-list--bare': this.variant === 'bare',
      'fusion-c-list--padded': this.spacing === 'padded',
      'fusion-c-list--condensed': this.spacing === 'condensed'
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
    'fusion-list': FusionList;
  }
}
