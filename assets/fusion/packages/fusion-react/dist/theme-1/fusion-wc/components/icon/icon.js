var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { FusionElement } from '../FusionElement';
import styles from './icon.scss';
// @ts-ignore
import iconSprite from '../../icons/fusion-icons.svg';
let FusionIcon = class FusionIcon extends FusionElement {
    constructor() {
        super(...arguments);
        /**
         * Icon name
         *
         * @required
         */
        this.name = 'search';
        /**
         * Icon path
         * 1) This points to the file where the icon sprite lives
         *
         * @required
         */
        this.iconUrl = iconSprite;
    }
    static get styles() {
        return unsafeCSS(styles);
    }
    /**
     * Get the path to the icons, either by overriding it on the window
     * or by using the bundled icon path
     */
    getIconPath() {
        if (window.FS_ICON_URL) {
            return window.FS_ICON_URL;
        }
        const script = document.querySelector('script[src$="icon"]');
        if (script) {
            return script.src.replace(/^(.+)\/.*$/, '$1') + '/svgs/fusion-icons.svg';
        }
        return this.iconUrl;
    }
    render() {
        const componentClassName = this.componentClassNames('fusion-c-icon', {
            'fusion-c-icon--inverted': this.inverted === true
        });
        return html `
      <svg
        aria-hidden="${!this.iconTitle}"
        aria-labelledby="${this.iconTitle && this.id}"
        class="${componentClassName}"
        focusable="${this.focusable}"
        role="${this.iconTitle && 'img'}"
        {...other}
      >
        ${this.title && html ` <title id="${this.id}">${this.title}</title> `}
        <use href="${this.getIconPath()}#${this.name}" />
      </svg>
    `;
    }
};
__decorate([
    property({ type: Boolean })
], FusionIcon.prototype, "focusable", void 0);
__decorate([
    property()
], FusionIcon.prototype, "name", void 0);
__decorate([
    property()
], FusionIcon.prototype, "iconUrl", void 0);
__decorate([
    property()
], FusionIcon.prototype, "iconTitle", void 0);
__decorate([
    property({ type: Boolean })
], FusionIcon.prototype, "inverted", void 0);
__decorate([
    property()
], FusionIcon.prototype, "styleModifier", void 0);
FusionIcon = __decorate([
    customElement('fusion-icon')
], FusionIcon);
export { FusionIcon };
