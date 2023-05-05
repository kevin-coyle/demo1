import { html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { FusionElement } from '../FusionElement';
import styles from './icon.scss';
// @ts-ignore
import iconSprite from '../../icons/fusion-icons.svg';

@customElement('fusion-icon')
export class FusionIcon extends FusionElement {
  static get styles() {
    return unsafeCSS(styles);
  }

  /**
   * Icon name
   *
   * @required
   */
  @property({ type: Boolean })
  focusable?: boolean | undefined;

  /**
   * Icon name
   *
   * @required
   */
  @property()
  name?: string = 'search';

  /**
   * Icon path
   * 1) This points to the file where the icon sprite lives
   *
   * @required
   */
  @property()
  iconUrl?: string = iconSprite;

  /**
   * Title
   */
  @property()
  iconTitle?: string;

  /**
   * Inverted variant
   */
  @property({ type: Boolean })
  inverted?: boolean;
  /**
   *
   * Append to the class name to pass classes (such as utility classes) into the internals
   */
  @property()
  styleModifier?: string;

  /**
   * Get the path to the icons, either by overriding it on the window
   * or by using the bundled icon path
   */
  getIconPath() {
    if (window.FS_ICON_URL) {
      return window.FS_ICON_URL;
    }

    const script = document.querySelector<HTMLScriptElement>('script[src$="icon"]');
    if (script) {
      return script.src.replace(/^(.+)\/.*$/, '$1') + '/svgs/fusion-icons.svg';
    }

    return this.iconUrl;
  }

  render() {
    const componentClassName = this.componentClassNames('fusion-c-icon', {
      'fusion-c-icon--inverted': this.inverted === true
    });

    return html`
      <svg
        aria-hidden="${!this.iconTitle}"
        aria-labelledby="${this.iconTitle && this.id}"
        class="${componentClassName}"
        focusable="${this.focusable}"
        role="${this.iconTitle && 'img'}"
        {...other}
      >
        ${this.title && html` <title id="${this.id}">${this.title}</title> `}
        <use href="${this.getIconPath()}#${this.name}" />
      </svg>
    `;
  }
}

declare global {
  interface Window {
    FS_ICON_URL: string;
  }
  interface HTMLElementTagNameMap {
    'fusion-icon': FusionIcon;
  }
}
