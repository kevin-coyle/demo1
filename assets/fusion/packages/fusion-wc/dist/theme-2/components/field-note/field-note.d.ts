import { FusionElement } from '../FusionElement';
/**
 * @slot - The note content
 */
export declare class FusionFieldNote extends FusionElement {
    static get styles(): import("lit").CSSResult;
    /**
     * Error state
     * 1) Changes the component's treatment to represent an error
     */
    isError?: boolean;
    /**
     * Success state
     * 1) Changes the component's treatment to represent a success
     */
    isSuccess?: boolean;
    /**
     * Icon  name
     */
    iconName?: string;
    /**
     * Inverted variant
     * 1) Used for dark backgrounds
     */
    inverted?: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'fusion-field-note': FusionFieldNote;
    }
}
//# sourceMappingURL=field-note.d.ts.map