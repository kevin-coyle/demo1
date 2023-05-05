import { FusionElement } from '../FusionElement';
/**
 * @slot - The layout content
 */
export declare class FusionLayout extends FusionElement {
    static get styles(): import("lit").CSSResult;
    /**
     * Break variant
     * <fusion-text-passage size="sm">
     * <ul>
     * <li> **faster** breaks the grid at a smaller width than the default.
     * Example: Sidebar breaks underneath main layout section at smaller breakpoint than default</li>
     * <li> **slower** breaks the grid at a larger width than the default.
     * Example: Sidebar breaks underneath main layout section at wider breakpoint than default</li>
     * <li> **none** the grid does not break.</li>
     * </ul>
     * </fusion-text-passage>
     */
    break?: 'faster' | 'slower' | 'none';
    /**
     * Gap variant
     * <fusion-text-passage size="sm">
     * <ul>
     * <li>The default spacing is 16px
     * <li>**none** yields a layout whose layout sections are spaced without any gutter in between on large screens.
     * Small screens gap sits at 16px.</li>
     * <li>**sm** yields a layout whose layout sections are spaced 8px apart on large screens. Small screens gutters move to 16px between.</li>
     * <li>**lg** yields a layout whose layout sections are spaced 24px apart on large screens. Small screens gutters move to 16px between.</li>
     * <li>**xl** yields a layout whose layout sections are spaced 32px apart on large screens. Small screens gutters move to 16px between.</li>
     * </ul>
     * </fusion-text-passage>
     */
    gap?: 'none' | 'sm' | 'lg' | 'xl';
    /**
     *  Style variants
     * <fusion-text-passage size="sm">
     * <ul>
     * <li>**left-sidebar** formats the first `layout-section` component as a left sidebar</li>
     * </ul>
     * </fusion-text-passage>
     */
    variant?: 'left-sidebar';
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'fusion-layout': FusionLayout;
    }
}
//# sourceMappingURL=layout.d.ts.map