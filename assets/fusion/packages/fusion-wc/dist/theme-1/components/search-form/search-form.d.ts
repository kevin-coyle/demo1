import { FusionElement } from '../FusionElement';
import '../button/button';
import '../dropdown-panel/dropdown-panel';
export declare class FusionSearchForm extends FusionElement {
    static get styles(): import("lit").CSSResult;
    /**
     * The unique id of the field
     */
    ariaControlsId: string;
    /**
     * The unique id of the field
     */
    fieldId?: string;
    /**
     * isMobile property
     */
    isMobile?: boolean;
    /**
     * Label of the form field
     */
    label?: string;
    /**
     * Description for the field
     */
    fieldNote?: string;
    /**
     *  Error message for the field
     */
    errorNote?: string;
    /**
     * Visually hide the label from the UI
     */
    hideLabel?: boolean;
    /**
     * Search button text
     */
    buttonText?: string;
    /**
     * Clear button text
     */
    clearButtonText: string;
    /**
     * Disabled attribute
     */
    disabled?: boolean;
    /**
     * Active state
     */
    isActive: boolean;
    /**
     * Error state
     */
    isError?: boolean;
    /**
     * Placeholder text
     */
    placeholder?: string;
    /**
     * Input value
     */
    value?: string;
    /**
     * Aria describedby
     * 1) Used to connect the field note and errorNote for accessibility
     */
    ariaDescribedBy?: string;
    /**
     * is Dynamic
     */
    isDynamic?: boolean;
    /**
     * is Overlay
     */
    isOverlay?: boolean;
    /**
     * Query the dynamic dropdown panel element
     */
    _catDropdownPanel: HTMLElement;
    /**
     * Spacing variants
     * <fusion-text-passage size="sm">
     * <ul>
     * <li>**dense** renders a more compact form field with smaller button
     * </ul>
     * </fusion-text-passage>
     */
    spacing?: 'dense';
    /**
     * Style variants
     * <fusion-text-passage size="sm">
     * <ul>
     * <li>**bare** renders a search form without a border. Only use this within some sort of container so
     * a user has an idea as to where the tap/click area is on the input</li>
     * </ul>
     * </fusion-text-passage>
     */
    variant?: 'bare';
    /**
     * Position property
     */
    position?: 'bottom' | 'top';
    /**
     * Maxlength of characters for the search form
     */
    maxlength?: number;
    /**
     * Focused in menu toggle
     */
    isFocusedIn?: boolean;
    /**
     * Use this Flag along with emptyMessage named slot to report error message
     *
     */
    isEmpty?: boolean;
    /**
     * Active element in the dropdown panel
     * 1) This is used to read out the active value to the user
     */
    ariaActiveDescendantId: string;
    /**
     * Initialize functions
     */
    constructor();
    /**
     * Connected callback lifecycle
     */
    connectedCallback(): void;
    /**
     * Disconnected callback lifecycle
     */
    disconnectedCallback(): void;
    /**
     * Change output binding
     * 1) If has input value then show the dropdown panel and clear icon
     * 2) Emit target value to outside of component to be used at application level
     */
    private onChanged;
    /**
     * Close dropdown panel
     */
    closePanel(): void;
    /**
     * Clear the input field on click
     * 1) Set active, clear and error to false after click
     * 2) Clear the input value after click
     * 3) Set the focus on the input after the clear
     * 4) @fires change event when we click on close icon
     */
    clearSearchForm(): void;
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
     * 4) Check to see if we clicked inside the active panel
     * 5) If the panel is active and we've clicked outside of the panel then it should
     * be closed.
     */
    handleOnClickOutside(e: MouseEvent): void;
    handleSearchClick(): void;
    /**
     * Set menu active state
     * 1) Toggle the active state between true and false
     * 2) If the active state is turned on, set focus to the first element in the dropdown panel
     * 3) If the active state is toggled to false, close the panel and return focus to the dropdown trigger
     * 4) If the event target has a value (list-item has value prop), then replace the input value with the list-item value
     */
    toggleActive(): void;
    /**
     * Handle on keydown
     * 1) If the dropdown panel is open and escape is keyed, close the menu and return focus to the trigger button
     * 2) If the dropdown panel is active but not arrowed into yet and arrow down (or arrow up when dropdown is above search form)
     *  is keyed, move the `aria-selected` state into the first list item.
     * A while condition is added, so that if there are disabled list items in panel, then it will be skipped and the focus
       will be kept to the first non-disabled list item.
     * 3) Otherwise, if the item is focused in, run various keydown events
     * 4) When focused in panel and tabbed, focus on the clear button in the input
     * 5) When focused in panel and enter is selected on item in dropdown, change the value to the list-item value
     * prop and
     * 6) If current selected item has previous element and arrow up is selected, move `aria-selected to the previous item
     * 7) Otherwise, if If current selected item has next element and arrow down is selected, move `aria-selected to the next item
     * 8) Otherwise, if 6 isn't true when arrow up is selected when first item is aria-selected, then return the `aria-selected` state
     * to the last item
     * 9) Otherwise, if 7 isn't true and arrow down is selected when last item is aria-seleected, then return the `aria-selected` state
     * to the first item
     * 10) If the dropdown panel is active but not arrowed into yet and tab is keyed, move focus to the clear button and remove
     * 11) Update the panel scroll when the item is focused on.
     * 12)while condition added so that, it checks if the PreviousElementsibling is disabled or not. If disabled, then it keeps looping
       until it finds the previous non-disabled list-item. If it reaches the top , and if there is no such non-disabled items, then focusOnLastitem
       is called so that the focus returns back to the last non-disabled item.
     * 13)while condition added so that, it checks if the nextElementsibling is disabled or not. If disabled, then it keeps looping
       until it finds the next non-disabled list-item. If it reaches the end , and if there is no such non-disabled items, then focusOnFirstitem
       is called so that the focus returns back to the first non-disabled item.
     * 14) Use control + option + spacebar to trigger the dropdown without typing
     */
    handleKeyDown(e: KeyboardEvent): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'fusion-search-form': FusionSearchForm;
    }
}
//# sourceMappingURL=search-form.d.ts.map