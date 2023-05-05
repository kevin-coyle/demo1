import { FusionElement } from '../FusionElement';
export declare class FusionTextField extends FusionElement {
    static get styles(): import("lit").CSSResult;
    /**
     * The unique id of the field
     */
    fieldId: string;
    /**
     * The form field's label
     */
    label: string;
    /**
     * Checkbox name attribute property
     */
    name?: string;
    /**
     * Value
     */
    value?: string;
    /**
     * Fieldnote text
     */
    fieldNote?: string;
    /**
     * Aria describedby
     * 1) Used to connect the field note in select field to the select menu for accessibility
     */
    ariaDescribedBy?: string;
    /**
     * Required attribute
     */
    required: boolean;
    /**
     * Disabled attribute
     */
    disabled?: boolean;
    /**
     * Type variants
     * <fusion-text-passage size="sm">
     * <ul>
     * <li>**text** renders a standar text input</li>
     * <li>**email** renders a text input specificall for an email format.</li>
     * <li>**number** renders an input for number values only</li>
     * <li>**url** renders an input for urls only</li>
     * <li>**tel** renders an input for telephone number values only</li>
     * </ul>
     * </fusion-text-passage>
     */
    type: 'text' | 'email' | 'number' | 'url' | 'tel';
    /**
     * Inverted variant
     * 1) Used for dark backgrounds
     */
    inverted?: boolean;
    /**
     * Placeholder text
     */
    placeholder?: string;
    /**
     * Error state
     */
    isError?: boolean;
    /**
     * Success state
     */
    isSuccess?: boolean;
    /**
     * Field note icon name
     */
    iconName?: string;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'fusion-text-field': FusionTextField;
    }
}
//# sourceMappingURL=text-field.d.ts.map