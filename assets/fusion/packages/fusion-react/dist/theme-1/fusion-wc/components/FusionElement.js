var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import classnames from 'classnames';
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
/**
 * A base element.
 */
export class FusionElement extends LitElement {
    /**
     * Abstraction of `classnames` that automatically includes any style modifier
     * as well as any set variants.
     *
     * It is expected that `variant` would be overridden in a subclass with more
     * specific types, `@property() variant?: 'foo' | 'bar'`
     *
     * @param baseClassName
     */
    componentClassNames(baseClassName, additionalClassNames = {}) {
        return classnames(baseClassName, this.styleModifier, additionalClassNames);
    }
    /**
     * Check if a slot is empty
     *
     * @param slotName
     */
    slotEmpty(slotName) {
        return !this.querySelector(`[slot="${slotName}"]`);
    }
    /**
     * Check if a slot is not empty
     *
     * @param slotName
     */
    slotNotEmpty(slotName) {
        if (!this.slotEmpty(slotName) !== false) {
            return !this.slotEmpty(slotName);
        }
        else {
            return;
        }
    }
    /**
     * Dispatch a custom event.
     */
    dispatch({ e, eventName, detailObj = {}, optionsObj = {} }) {
        const options = Object.assign(Object.assign({ bubbles: true, composed: true }, optionsObj), { detail: Object.assign(Object.assign({}, (e && { originalEvent: e })), detailObj) });
        const event = new CustomEvent(eventName, options);
        this.dispatchEvent(event);
        return event;
    }
    /**
     * Example render, should not be used
     */
    render() {
        return html `<slot></slot>`;
    }
}
__decorate([
    property()
], FusionElement.prototype, "styleModifier", void 0);
