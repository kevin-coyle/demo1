import { FusionElement } from '../FusionElement';
/**
 * @slot - The band content
 */
export declare class FusionBand extends FusionElement {
    static get styles(): import("lit").CSSResult;
    /**
     * Gradient variant
     * <fusion-text-passage size="sm">
     * <ul>
     * <li>**1** renders the band with the set gradient background</li>
     * </ul>
     * </fusion-text-passage>
     */
    variant?: 'branded';
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'fusion-band': FusionBand;
    }
}
//# sourceMappingURL=band.d.ts.map