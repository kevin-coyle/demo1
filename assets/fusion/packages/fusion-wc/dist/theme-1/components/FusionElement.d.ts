import { LitElement } from 'lit';
export interface DetailObj {
    [key: string]: unknown;
}
export interface BlocksDispatchProps {
    e?: Event;
    eventName: string;
    detailObj?: DetailObj;
    optionsObj?: {
        [key: string]: unknown;
    };
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
export declare class FusionElement extends LitElement {
    /**
     * Append to the class name. Used for passing in utility classes
     */
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
    componentClassNames(baseClassName: string, additionalClassNames?: {}): string;
    /**
     * Check if a slot is empty
     *
     * @param slotName
     */
    slotEmpty(slotName: string): boolean;
    /**
     * Check if a slot is not empty
     *
     * @param slotName
     */
    slotNotEmpty(slotName: string): boolean;
    /**
     * Dispatch a custom event.
     */
    dispatch({ e, eventName, detailObj, optionsObj }: BlocksDispatchProps): CustomEvent;
    /**
     * Example render, should not be used
     */
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=FusionElement.d.ts.map