import { FusionElement } from '../FusionElement';
/**
 * @slot - The primary navigation items
 */
export declare class FusionPrimaryNav extends FusionElement {
    static get styles(): import("lit").CSSResult;
    /**
     * Behavior variant
     * <fusion-text-passage size="sm">
     * <ul>
     * <li>**side-by-side** keeps the primary nav item always in a horizontal pattern</li>
     * </ul>
     * </fusion-text-passage>
     */
    behavior?: 'side-by-side';
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'fusion-primary-nav': FusionPrimaryNav;
    }
}
//# sourceMappingURL=primary-nav.d.ts.map