declare namespace FomanticUI {
    interface Dimmer {
        settings: DimmerSettings;

        /**
         * Detaches a given element from DOM and reattaches element inside dimmer.
         */
        (behavior: 'add content', element: string | JQuery): JQuery;

        /**
         * Shows dimmer.
         */
        (behavior: 'show'): JQuery;

        /**
         * Hides dimmer.
         */
        (behavior: 'hide'): JQuery;

        /**
         * Toggles current dimmer visibility.
         */
        (behavior: 'toggle'): JQuery;

        /**
         * Changes dimmer opacity.
         */
        (behavior: 'set opacity', opacity: number): JQuery;

        /**
         * Creates a new dimmer in dimmable context.
         */
        (behavior: 'create'): JQuery;

        /**
         * Returns current duration for show or hide event depending on current visibility.
         */
        (behavior: 'get duration'): number;

        /**
         * Returns DOM element for dimmer.
         */
        (behavior: 'get dimmer'): JQuery;

        /**
         * Returns whether current dimmable has a dimmer.
         */
        (behavior: 'has dimmer'): boolean;

        /**
         * Whether section's dimmer is active.
         */
        (behavior: 'is active'): boolean;

        /**
         * Whether dimmer is animating.
         */
        (behavior: 'is animating'): boolean;

        /**
         * Whether current element is a dimmer.
         */
        (behavior: 'is dimmer'): boolean;

        /**
         * Whether current element is a dimmable section.
         */
        (behavior: 'is dimmable'): boolean;

        /**
         * Whether dimmer is disabled.
         */
        (behavior: 'is disabled'): boolean;

        /**
         * Whether dimmer is not disabled.
         */
        (behavior: 'is enabled'): boolean;

        /**
         * Whether dimmable section is 'body'.
         */
        (behavior: 'is page'): boolean;

        /**
         * Whether dimmer is a page dimmer.
         */
        (behavior: 'is page dimmer'): boolean;

        /**
         * Sets page dimmer to active.
         */
        (behavior: 'set active'): JQuery;

        /**
         * Sets an element as a dimmable section.
         */
        (behavior: 'set dimmable'): JQuery;

        /**
         * Sets a dimmable section as dimmed.
         */
        (behavior: 'set dimmed'): JQuery;

        /**
         * Sets current dimmer as a page dimmer.
         */
        (behavior: 'set page dimmer'): JQuery;

        /**
         * Sets a dimmer as disabled.
         */
        (behavior: 'set disabled'): JQuery;

        (behavior: 'destroy'): JQuery;
        <K extends keyof DimmerSettings>(behavior: 'setting', name: K, value?: undefined,): Partial<Pick<DimmerSettings, keyof DimmerSettings>>;
        <K extends keyof DimmerSettings>(behavior: 'setting', name: K, value: DimmerSettings[K]): JQuery;
        (behavior: 'setting', value: Partial<Pick<DimmerSettings, keyof DimmerSettings>>): JQuery;
        (settings?: Partial<Pick<DimmerSettings, keyof DimmerSettings>>): JQuery;
    }

    /**
     * @see {@link https://fomantic-ui.com/modules/dimmer.html#/settings}
     */

    interface DimmerSettings {
        // region Dimmer Settings

        /**
         * Whether dimmers should use flex or legacy positioning.
         * @default true
         */
        useFlex: boolean;

        /**
         * If initializing a dimmer on a 'dimmable' context, you can use 'dimmerName' to distinguish between multiple dimmers in that context.
         * @default false
         */
        dimmerName: string | boolean;

        /**
         * Specify a variation to add when generating dimmer, like 'inverted'.
         * @default false
         */
        variation: string | boolean;

        /**
         * Whether clicking on the dimmer should hide the dimmer (Defaults to 'auto', closable only when 'settings.on' is not 'hover').
         * @default 'auto'
         */
        closable: 'auto' | boolean;

        /**
         * Whether to dim dimmers using CSS transitions.
         * @default true
         */
        useCSS: boolean;

        /**
         * Named transition to use when animating menu in and out. Fade and slide down are available without including ui transitions.
         * Alternatively you can provide an object to set individual values for hide/show transitions as well as hide/show duration
         * @default 'fade'
         */
        transition: string | Dimmer.TransitionSettings;

        /**
         * Can be set to 'hover' or 'click' to show/hide dimmer on dimmable event.
         * @default false
         */
        on: false | 'hover' | 'click';

        /**
         * Override the default opacity of the dimmer.
         * @default 'auto'
         */
        opacity: 'auto' | number;

        /**
         * Animation duration of dimming. If an integer is used, that value will apply to both show and hide animations.
         * Will be ignored completely when individual hide/show duration values are provided via the 'transition' setting.
         */
        duration: number | Dimmer.DurationSettings;

        /**
         * Whether a custom loader should be generated inside the dimmer.
         * @default false
         */
        displayLoader: boolean;

        /**
         * Additional css classes to style the loader.
         * @see {@link https://fomantic-ui.com/elements/loader.html}
         * @default ''
         */
        loaderVariation: string;

        /**
         * If a string is given, it will be shown underneath the loader animation icon.
         * @default false
         */
        loaderText: false | string;

        // endregion

        // region Callbacks

        /**
         * Callback on element show or hide.
         */
        onChange(this: JQuery): void;

        /**
         * Callback on element show.
         */
        onShow(this: JQuery): void;

        /**
         * Callback on element hide.
         */
        onHide(this: JQuery): void;

        /**
         * Callback after element is visible.
         */
        onVisible(this: JQuery): void;

        /**
         * Callback after element is hidden.
         */
        onHidden(this: JQuery): void;

        // endregion

        // region DOM Settings

        /**
         * Selectors used to find parts of a module.
         */
        selector: Dimmer.SelectorSettings;

        /**
         * Class names used to determine element state.
         */
        className: Dimmer.ClassNameSettings;

        /**
         * Templates used to generate dimmer content.
         */
        template: Dimmer.TemplateSettings;

        // endregion

        // region Debug Settings

        /**
         * Name used in log statements
         * @default 'Dimmer'
         */
        name: string;

        /**
         * Event namespace. Makes sure module teardown does not effect other events attached to an element.
         * @default 'dimmer'
         */
        namespace: string;

        /**
         * Silences all console output including error messages, regardless of other debug settings.
         * @default false
         */
        silent: boolean;

        /**
         * Debug output to console
         * @default false
         */
        debug: boolean;

        /**
         * Show console.table output with performance metrics
         * @default true
         */
        performance: boolean;

        /**
         * Debug output includes all internal behaviors
         * @default false
         */
        verbose: boolean;

        error: Dimmer.ErrorSettings;

        // endregion
    }

    namespace Dimmer {
        type DurationSettings = Partial<Pick<Settings.Durations, keyof Settings.Durations>>;
        type TransitionSettings = Partial<Pick<Settings.Transition, keyof Settings.Transition>>;
        type SelectorSettings = Partial<Pick<Settings.Selectors, keyof Settings.Selectors>>;
        type ClassNameSettings = Partial<Pick<Settings.ClassNames, keyof Settings.ClassNames>>;
        type TemplateSettings = Partial<Pick<Settings.Templates, keyof Settings.Templates>>;
        type ErrorSettings = Partial<Pick<Settings.Errors, keyof Settings.Errors>>;

        namespace Settings {
            interface Durations {
                /**
                 * @default 500
                 */
                show: number;

                /**
                 * @default 500
                 */
                hide: number;
            }

            interface Transition {
                /**
                 * @default 'fade'
                 */
                showMethod: string;

                /**
                 * @default 200
                 */
                showDuration: number;

                /**
                 * @default 'zoom'
                 */
                hideMethod: string;

                /**
                 * @default 500
                 */
                hideDuration: number;
            }

            interface Selectors {
                /**
                 * @default '> .ui.dimmer'
                 */
                dimmer: string;

                /**
                 * @default '.ui.dimmer > .content, .ui.dimmer > .content > .center'
                 */
                content: string;
            }

            interface ClassNames {
                /**
                 * @default 'active'
                 */
                active: string;

                /**
                 * @default 'dimmable'
                 */
                dimmable: string;

                /**
                 * @default 'dimmed'
                 */
                dimmed: string;

                /**
                 * @default 'disabled'
                 */
                disabled: string;

                /**
                 * @default 'page'
                 */
                pageDimmer: string;

                /**
                 * @default 'hide'
                 */
                hide: string;

                /**
                 * @default 'show'
                 */
                show: string;

                /**
                 * @default 'transition'
                 */
                transition: string;
            }

            interface Templates {
                /**
                 * Used to generate dimmer content.
                 */
                dimmer: JQuery;
            }

            interface Errors {
                /**
                 * @default 'The method you called is not defined.'
                 */
                method: string;
            }
        }
    }
}
