import { FusionElement } from '../FusionElement';
/**
 * @slot - The component content
 */
export declare class FusionRadioFieldItem extends FusionElement {
    static get styles(): import("lit").CSSResult;
    /**
     * Error switch
     */
    isError?: boolean;
    /**
     * Success switch
     */
    isSuccess?: boolean;
    /**
     * value attribute
     */
    readOnly?: boolean;
    /**
     * disabled attribute
     */
    disabled?: boolean;
    /**
     * value attribute
     */
    value?: string;
    /**
     * Id
     */
    fieldId?: string;
    /**
     * Name attribute
     */
    name?: string;
    /**
     * Checked property
     */
    checked: boolean;
    /**
     * Required attribute
     */
    required?: boolean;
    /**
     * Hide label?
     */
    hideLabel?: boolean;
    /**
     * Optional label to appear after label text
     */
    optionalLabel?: string;
    /**
     * aria-describedby attribute property
     */
    ariaDescribedBy?: string;
    /**
     * Initialize functions
     */
    constructor();
    /**
     * Autogenerate
     */
    connectedCallback(): void;
    /**
     * Remove checked
     * 1) Remove checked property from all items and set tabindex to -1
     */
    removeChecked(): void;
    /**
     * Toggle active state of primary nav item
     * 1) Remove isActive state from all sibling elements
     * 2) Toggle active state of element selected
     */
    clickHandler(e: MouseEvent | KeyboardEvent): void;
    /**
     * Handle keydown
     * 1) If left or up arrow key is struck and radio field item exists before current item, remove checked from all items and
     * add it to the next item
     * 2) If right or down arrow key is struck and radio field item exists after current item, remove checked from all items and
     * add checked to the next item. Focus on this item and set tabindex for when focusing out of radio field and back onto checked item.
     * 3) If the element is in focused, then for event emission the current focues element should be clicked to emit event.
     * 4) If the Enter key is pressed, then check the radio if no other radio items are checked
     */
    handleKeyDown(e: KeyboardEvent): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'fusion-radio-field-item': FusionRadioFieldItem;
    }
}
//# sourceMappingURL=radio-field-item.d.ts.map