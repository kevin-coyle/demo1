import { FusionElement } from '../FusionElement';
/**
 * @slot - The section content
 *
 * @slot sectionHeaderAfter - Right-aligned area that appears to the right of the section header area
 */
export declare class FusionSection extends FusionElement {
    static get styles(): import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'fusion-section': FusionSection;
    }
}
//# sourceMappingURL=section.d.ts.map