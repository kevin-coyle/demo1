import classnames from 'classnames';
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export interface DetailObj {
  [key: string]: unknown;
}

export interface BlocksDispatchProps {
  e?: Event;
  eventName: string;
  detailObj?: DetailObj;
  optionsObj?: { [key: string]: unknown };
}

export interface BlocksEvent extends Event {
  detail: {
    originalEvent: Event;
    detailObj: DetailObj;
  };
}

/**
 * A base element.
 */
export class FusionElement extends LitElement {
  /**
   * Append to the class name. Used for passing in utility classes
   */
  @property()
  styleModifier?: string;

  /**
   * Abstraction of `classnames` that automatically includes any style modifier
   * as well as any set variants.
   *
   * It is expected that `variant` would be overridden in a subclass with more
   * specific types, `@property() variant?: 'foo' | 'bar'`
   *
   * @param baseClassName
   */
  componentClassNames(baseClassName: string, additionalClassNames = {}) {
    return classnames(baseClassName, this.styleModifier, additionalClassNames);
  }

  /**
   * Check if a slot is empty
   *
   * @param slotName
   */
  slotEmpty(slotName: string) {
    return !this.querySelector(`[slot="${slotName}"]`);
  }

  /**
   * Check if a slot is not empty
   *
   * @param slotName
   */
  slotNotEmpty(slotName: string) {
    if (!this.slotEmpty(slotName) !== false) {
      return !this.slotEmpty(slotName);
    } else {
      return;
    }
  }

  /**
   * Dispatch a custom event.
   */
  dispatch({ e, eventName, detailObj = {}, optionsObj = {} }: BlocksDispatchProps): CustomEvent {
    const options = {
      bubbles: true,
      composed: true,
      ...optionsObj,
      detail: { ...(e && { originalEvent: e }), ...detailObj }
    };
    const event = new CustomEvent(eventName, options);
    this.dispatchEvent(event);
    return event;
  }

  /**
   * Example render, should not be used
   */
  render() {
    return html`<slot></slot>`;
  }
}
