import { FusionElement } from '../FusionElement';
/**
 * @slot - The component content
 */
export declare class FusionCheckboxFieldItem extends FusionElement {
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
     * Adds a hover effect for the checkbox item
     */
    hasHover?: boolean;
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
     * Hide label?
     */
    hideLabel?: boolean;
    /**
     * Indeterminate property
     */
    indeterminate?: boolean;
    /**
     * Checked property
     */
    checked?: boolean;
    /**
     *  Error message for the field
     */
    errorNote?: string;
    /**
     * Description or Error message for the field
     */
    fieldNote?: any;
    /**
     * Required attribute
     */
    required?: boolean;
    /**
     * Optional label to appear after label text
     */
    optionalLabel?: string;
    /**
     * Inverted variant
     * 1) Used for dark backgrounds
     */
    inverted?: boolean;
    /**
     * aria-describedby attribute property
     */
    ariaDescribedBy?: string;
    connectedCallback(): void;
    private handleOnChange;
    /**
     * Handle on keydown events
     * 1) If the Enter key is pressed, then check the checkbox
     */
    handleKeydown(e: KeyboardEvent): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'fusion-checkbox-field-item': FusionCheckboxFieldItem;
    }
}
//# sourceMappingURL=checkbox-field-item.d.ts.map