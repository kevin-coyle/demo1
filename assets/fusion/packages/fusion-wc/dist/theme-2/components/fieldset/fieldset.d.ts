import { FusionElement } from '../FusionElement';
/**
 * @slot - The component content
 */
export declare class FusionFieldset extends FusionElement {
    static get styles(): import("lit").CSSResult;
    /**
     * Align property
     * - **center** centers the label and items in the container
     */
    align?: 'center';
    /**
     * Error switch
     */
    isError?: boolean;
    /**
     * Success switch
     */
    isSuccess?: boolean;
    /**
     * disabled attribute
     */
    disabled?: boolean;
    /**
     *fieldnote for checkbox
     */
    fieldNote?: string;
    /**
     * Errornote text
     */
    errorNote?: string;
    /**
     * Required attribute
     */
    required?: boolean;
    /**
     * Visibly hide the legend
     * 1) Removes the legend from visual users but can still be read by assistive technology
     */
    hideLegend?: boolean;
    /**
     * Inverted variant
     * 1) Used for dark backgrounds
     */
    inverted?: boolean;
    /**
     * aria-describedby attribute property
     */
    ariaDescribedBy?: string;
    /**
     * The form field's label
     */
    label?: string;
    /**
     * Horizontal checkbox display
     */
    orientation: 'horizontal';
    /**
     * Size property
     * - **lg** creates a larger label and fieldset
     */
    size?: 'lg';
    /**
     * Variant property
     * - **boxed** creates a boxed version of the radio field
     */
    variant?: 'boxed';
    /**
     * Autogenerate
     */
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'fusion-fieldset': FusionFieldset;
    }
}
//# sourceMappingURL=fieldset.d.ts.map