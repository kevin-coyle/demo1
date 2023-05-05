import { FusionElement } from '../FusionElement';
/**
 * @slot - The label for the navigation item
 */
export declare class FusionPrimaryNavItem extends FusionElement {
    /**
     * Primary nav item text
     */
    text: string;
    /**
     * Primary nav item href
     */
    href: string;
    /**
     * Icon name
     */
    iconName?: string;
    /**
     * Append to the class name. Used for passing in utility classes
     */
    megaMenu?: boolean;
    /**
     * Append to the class name. Used for passing in utility classes
     */
    isActive?: boolean;
    static get styles(): import("lit").CSSResult;
    /**
     * Initialize functions
     */
    constructor();
    /**
     * Connected Callback lifecycle
     */
    connectedCallback(): void;
    /**
     * Disconnected callback lifecycle
     * 1) Remove window resize event listener
     */
    disconnectedCallback(): void;
    /**
     * Handle click outside the component
     * 1) Close the show hide panel on click outside
     * 2) If the nav is already closed then we don't care about outside clicks and we
     * can bail early
     * 3) By the time a user clicks on the page the shadowRoot will almost certainly be
     * defined, but TypeScript isn't that trusting and sees this.shadowRoot as possibly
     * undefined. To work around that we'll check that we have a shadowRoot (and a
     * rendered .host) element here to appease the TypeScript compiler. This should never
     * actually be shown or run for a human end user.
     * 4) Check to see if we clicked inside the active navigation item
     * 5) If the navigation is active and we've clicked outside of the nav then it should
     * be closed.
     */
    handleOnClickOutside(event: MouseEvent): void;
    /**
     * Toggle active state of primary nav item
     * 1) Remove isActive state from all sibling elements
     * 2) Toggle active state of element selected
     */
    clickHandler(e: MouseEvent): void;
    closePanel(): void;
    handleOnKeyDown(e: KeyboardEvent): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'fusion-primary-nav-item': FusionPrimaryNavItem;
    }
}
//# sourceMappingURL=primary-nav-item.d.ts.map