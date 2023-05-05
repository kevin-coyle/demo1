import { FusionElement } from '../FusionElement';
/**
 * @slot - The component content
 */
export declare class FusionDropdownPanel extends FusionElement {
    static get styles(): import("lit").CSSResult;
    /**
     * Adds a max height and scrolling of the panel
     */
    hasScroll?: boolean;
    /**
     * Changes styling on panel for variant with header
     */
    hasHeader?: boolean;
    /**
     * Changes styling on panel for variant with footer
     */
    hasFooter?: boolean;
    /**
     * Style variants
     * <fusion-text-passage size="sm">
     * <ul>
     * <li>**bare** removes border from dropdown panel</li>
     * </ul>
     * </fusion-text-passage>
     */
    variant?: 'bare';
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'fusion-dropdown-panel': FusionDropdownPanel;
    }
}
//# sourceMappingURL=dropdown-panel.d.ts.map