var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { customElement, property } from 'lit/decorators.js';
import { FusionElement } from '../FusionElement';
import styles from './button.scss';
let FusionButton = class FusionButton extends FusionElement {
    constructor() {
        super(...arguments);
        /**
         * Icon position
         * <fusion-text-passage size="sm">
         * <ul>
         * <li>**top** places the icon on top of the button text</li>
         * <li>**before** places the icon before the button text</li>
         * <li>**after** places the icon after the button text</li>
         * </ul>
         * </fusion-text-passage>
         */
        this.iconPosition = undefined;
        /**
         * Visually hide button text (but text is still accessible to assistive technology)
         * 1) Use this for icon-only buttons for accessibility
         */
        this.hideText = false;
        /**
         * Full width button
         */
        this.fullWidth = false;
    }
    static get styles() {
        return unsafeCSS(styles);
    }
    render() {
        const componentClassName = this.componentClassNames('fusion-c-button', {
            'fusion-c-button--primary': this.variant === 'primary',
            'fusion-c-button--tertiary': this.variant === 'tertiary',
            'fusion-c-button--bare': this.variant === 'bare',
            'fusion-c-button--link': this.variant === 'link',
            'fusion-c-button--inverted': this.inverted === true,
            'fusion-c-button--full-width': this.fullWidth === true,
            'fusion-c-button--sm': this.size === 'sm',
            'fusion-c-button--lg': this.size === 'lg'
        });
        if (this.href) {
            return html `
        <a href="${ifDefined(this.href)}" class="${componentClassName}" target=${this.target}>
          ${this.iconPosition === 'before' || this.iconPosition === 'top'
                ? html ` <fusion-icon styleModifier="fusion-c-button__icon" aria-hidden="true" name="${ifDefined(this.iconName)}"></fusion-icon> `
                : html ``}
          <span class="${this.hideText ? 'fusion-u-is-vishidden fusion-c-button__text' : 'fusion-c-button__text'}">${this.text}</span>
          ${this.iconPosition === 'after'
                ? html ` <fusion-icon styleModifier="fusion-c-button__icon" aria-hidden="true" name="${ifDefined(this.iconName)}"></fusion-icon> `
                : html ``}
        </a>
      `;
        }
        else {
            return html `
        <button class="${componentClassName}" ?disabled=${this.disabled}>
          ${this.iconPosition === 'before' || this.iconPosition === 'top'
                ? html ` <fusion-icon styleModifier="fusion-c-button__icon" aria-hidden="true" name="${ifDefined(this.iconName)}"></fusion-icon> `
                : html ``}
          <span class="${this.hideText ? 'fusion-u-is-vishidden fusion-c-button__text' : 'fusion-c-button__text'}">${this.text}</span>
          ${this.iconPosition === 'after'
                ? html ` <fusion-icon styleModifier="fusion-c-button__icon" aria-hidden="true" name="${ifDefined(this.iconName)}"></fusion-icon> `
                : html ``}
        </button>
      `;
        }
    }
};
__decorate([
    property()
], FusionButton.prototype, "text", void 0);
__decorate([
    property()
], FusionButton.prototype, "variant", void 0);
__decorate([
    property({ type: Boolean })
], FusionButton.prototype, "disabled", void 0);
__decorate([
    property()
], FusionButton.prototype, "target", void 0);
__decorate([
    property({ type: Boolean })
], FusionButton.prototype, "strong", void 0);
__decorate([
    property()
], FusionButton.prototype, "href", void 0);
__decorate([
    property()
], FusionButton.prototype, "iconName", void 0);
__decorate([
    property()
], FusionButton.prototype, "iconPosition", void 0);
__decorate([
    property()
], FusionButton.prototype, "size", void 0);
__decorate([
    property({ type: Boolean })
], FusionButton.prototype, "hideText", void 0);
__decorate([
    property({ type: Boolean })
], FusionButton.prototype, "fullWidth", void 0);
__decorate([
    property({ type: Boolean })
], FusionButton.prototype, "inverted", void 0);
FusionButton = __decorate([
    customElement('fusion-button')
], FusionButton);
export { FusionButton };
