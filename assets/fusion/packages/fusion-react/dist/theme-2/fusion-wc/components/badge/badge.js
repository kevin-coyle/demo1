var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import classnames from 'classnames';
import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './badge.scss';
/**
 * @slot - The component content
 */
let FusionBadge = class FusionBadge extends LitElement {
    static get styles() {
        return unsafeCSS(styles.toString());
    }
    render() {
        const componentClassName = classnames('fusion-c-badge', {
            'fusion-c-badge--success': this.variant === 'success',
            'fusion-c-badge--warning': this.variant === 'warning',
            'fusion-c-badge--error': this.variant === 'error'
        });
        return html ` <div class="${componentClassName}">${this.text}</div> `;
    }
};
__decorate([
    property()
], FusionBadge.prototype, "text", void 0);
__decorate([
    property()
], FusionBadge.prototype, "variant", void 0);
FusionBadge = __decorate([
    customElement('fusion-badge')
], FusionBadge);
export { FusionBadge };
