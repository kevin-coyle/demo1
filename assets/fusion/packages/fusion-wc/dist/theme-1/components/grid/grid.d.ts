import { FusionElement } from '../FusionElement';
/**
 * @slot - The grid items
 */
export declare class FusionGrid extends FusionElement {
    static get styles(): import("lit").CSSResult;
    /**
     * Style variant
     * <fusion-text-passage size="sm">
     * <ul>
     * <li>**side-by-side** yields a grid whose grid items display side-by-side (2 per row) on all screen sizes</li>
     * <li>**2up** yields a grid whose grid items are stacked on small screens but display side-by-side when enough screen real estate is available to do so</li>
     * <li>**3up** yields a grid whose grid items are stacked on small screens, transforms to a 2-across pattern and then transforms again to a 3-across pattern</li>
     * <li>**1-3up** yields a grid whose grid items are stacked on small screens and transforms to a 3-across pattern on larger screens</li>
     * <li>**4up** yields a grid whose grid items are stacked on small screens, transforms to a 2-across pattern, transforms again to a 3-across pattern, and ultimately transforms to a 4-across pattern</li>
     * <li>**1-2-4up** yields a grid whose grid items are stacked on small screens, transforms to a 2-across pattern, and ultimately transforms to a 4-across pattern</li>
     * <li>**1-4up** yields a grid whose grid items are stacked on small screens, transforms to a 4-across pattern on medium/large screens</li>
     * </ul>
     * </fusion-text-passage>
     */
    variant?: 'side-by-side' | '2up' | '3up' | '1-3up' | '4up' | '1-4up' | '1-2-4up' | '2-4-6up';
    /**
     * Style variant
     * <fusion-text-passage size="sm">
     * <ul>
     * <li>**none** yields a grid whose grid items are spaced without any gutter in between</li>
     * <li>**sm** yields a grid whose grid items are spaced with a gap smaller than the default</li>
     * <li>**lg** yields a grid whose grid items are spaced with a gap larger than the default</li>
     * </ul>
     * </fusion-text-passage>
     */
    gap?: 'none' | 'sm' | 'lg';
    /**
     * Break variant
     * <fusion-text-passage size="sm">
     * <ul>
     * <li> **faster** breaks the grid at a smaller width than the default. Example: 2up grid breaks to 2 per row at smaller width than default</li>
     * <li> **slower** breaks the grid at a larger width than the default. Example: 2up grid breaks to 2 per row at larger width than default</li>
     * <li> **lg** yields a grid whose grid items are spaced with a gap larger than the default</li>
     * </ul>
     * </fusion-text-passage>
     */
    break?: 'faster' | 'slower';
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'fusion-grid': FusionGrid;
    }
}
//# sourceMappingURL=grid.d.ts.map