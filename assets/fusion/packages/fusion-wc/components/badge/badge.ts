import classnames from 'classnames';
import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './badge.scss';

/**
 * @slot - The component content
 */
@customElement('fusion-badge')
export class FusionBadge extends LitElement {
  static get styles() {
    return unsafeCSS(styles.toString());
  }

  /**
   * The badge text
   */
  @property()
  text?: string;

  /**
   * Size variant
   * <fusion-text-passage size="sm">
   * <ul>
   * <li>**success** renders a badge with success state treatment</li>
   * <li>**warning** renders a badge with warning state treatment</li>
   * <li>**error** renders a badge with error state treatment</li>
   * </ul>
   * </fusion-text-passage>
   */
  @property()
  variant?: 'success' | 'warning' | 'error';

  render() {
    const componentClassName = classnames('fusion-c-badge', {
      'fusion-c-badge--success': this.variant === 'success',
      'fusion-c-badge--warning': this.variant === 'warning',
      'fusion-c-badge--error': this.variant === 'error'
    });

    return html` <div class="${componentClassName}">${this.text}</div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fusion-badge': FusionBadge;
  }
}
