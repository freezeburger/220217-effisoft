'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">prima documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-687ca1c9b37bffd96dfde1e2c9c5fe897c5a304ab4e82551d53589151265f5ab923e1cee5ebf6bc8c95994c986d9efe02375f1dd542654a80fa30ffc7b95f682"' : 'data-target="#xs-components-links-module-AppModule-687ca1c9b37bffd96dfde1e2c9c5fe897c5a304ab4e82551d53589151265f5ab923e1cee5ebf6bc8c95994c986d9efe02375f1dd542654a80fa30ffc7b95f682"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-687ca1c9b37bffd96dfde1e2c9c5fe897c5a304ab4e82551d53589151265f5ab923e1cee5ebf6bc8c95994c986d9efe02375f1dd542654a80fa30ffc7b95f682"' :
                                            'id="xs-components-links-module-AppModule-687ca1c9b37bffd96dfde1e2c9c5fe897c5a304ab4e82551d53589151265f5ab923e1cee5ebf6bc8c95994c986d9efe02375f1dd542654a80fa30ffc7b95f682"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BaseModule.html" data-type="entity-link" >BaseModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BaseModule-2000720ef3a832c8324cfa8646163fef307fdbbb855c546a4967402b7c21b09b69c5e41066d047f9a3d911055695e10501c7b63ab03161e23986d6cac12207f3"' : 'data-target="#xs-components-links-module-BaseModule-2000720ef3a832c8324cfa8646163fef307fdbbb855c546a4967402b7c21b09b69c5e41066d047f9a3d911055695e10501c7b63ab03161e23986d6cac12207f3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BaseModule-2000720ef3a832c8324cfa8646163fef307fdbbb855c546a4967402b7c21b09b69c5e41066d047f9a3d911055695e10501c7b63ab03161e23986d6cac12207f3"' :
                                            'id="xs-components-links-module-BaseModule-2000720ef3a832c8324cfa8646163fef307fdbbb855c546a4967402b7c21b09b69c5e41066d047f9a3d911055695e10501c7b63ab03161e23986d6cac12207f3"' }>
                                            <li class="link">
                                                <a href="components/BaseFooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BaseFooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BaseHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BaseHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BaseNavigationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BaseNavigationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FeatureContentModule.html" data-type="entity-link" >FeatureContentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FeatureContentModule-671c943968fca25c94ef9548865e261b150bcba60a8508295ae34731bb5939a0452e173fa934dd9e8f52448a4482f9250dab46853e6e6ea2b8d23368ab827619"' : 'data-target="#xs-components-links-module-FeatureContentModule-671c943968fca25c94ef9548865e261b150bcba60a8508295ae34731bb5939a0452e173fa934dd9e8f52448a4482f9250dab46853e6e6ea2b8d23368ab827619"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FeatureContentModule-671c943968fca25c94ef9548865e261b150bcba60a8508295ae34731bb5939a0452e173fa934dd9e8f52448a4482f9250dab46853e6e6ea2b8d23368ab827619"' :
                                            'id="xs-components-links-module-FeatureContentModule-671c943968fca25c94ef9548865e261b150bcba60a8508295ae34731bb5939a0452e173fa934dd9e8f52448a4482f9250dab46853e6e6ea2b8d23368ab827619"' }>
                                            <li class="link">
                                                <a href="components/FeatureContentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FeatureContentComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FeatureEditionModule.html" data-type="entity-link" >FeatureEditionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FeatureEditionModule-fdcb57bb0e94b386177319b9e7e51756e0cf2e06bad6e1d88babfad7fcac78cb0afc532a6add6736222474fee1bfbac19f578fe8025687037a44bb7f0b9098fc"' : 'data-target="#xs-components-links-module-FeatureEditionModule-fdcb57bb0e94b386177319b9e7e51756e0cf2e06bad6e1d88babfad7fcac78cb0afc532a6add6736222474fee1bfbac19f578fe8025687037a44bb7f0b9098fc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FeatureEditionModule-fdcb57bb0e94b386177319b9e7e51756e0cf2e06bad6e1d88babfad7fcac78cb0afc532a6add6736222474fee1bfbac19f578fe8025687037a44bb7f0b9098fc"' :
                                            'id="xs-components-links-module-FeatureEditionModule-fdcb57bb0e94b386177319b9e7e51756e0cf2e06bad6e1d88babfad7fcac78cb0afc532a6add6736222474fee1bfbac19f578fe8025687037a44bb7f0b9098fc"' }>
                                            <li class="link">
                                                <a href="components/FeatureEditionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FeatureEditionComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FeatureListModule.html" data-type="entity-link" >FeatureListModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FeatureListModule-cfa88b56b4fd516bf98fdde0db7f406063c97a7df3e306bea91c7a59ffaf593ca7896dafa510119d114f9049edd8e5b90dadf6987baab189fe7404e2e0ed034a"' : 'data-target="#xs-components-links-module-FeatureListModule-cfa88b56b4fd516bf98fdde0db7f406063c97a7df3e306bea91c7a59ffaf593ca7896dafa510119d114f9049edd8e5b90dadf6987baab189fe7404e2e0ed034a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FeatureListModule-cfa88b56b4fd516bf98fdde0db7f406063c97a7df3e306bea91c7a59ffaf593ca7896dafa510119d114f9049edd8e5b90dadf6987baab189fe7404e2e0ed034a"' :
                                            'id="xs-components-links-module-FeatureListModule-cfa88b56b4fd516bf98fdde0db7f406063c97a7df3e306bea91c7a59ffaf593ca7896dafa510119d114f9049edd8e5b90dadf6987baab189fe7404e2e0ed034a"' }>
                                            <li class="link">
                                                <a href="components/FeatureListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FeatureListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FeatureListItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FeatureListItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FeatureListSearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FeatureListSearchComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FeatureLoginModule.html" data-type="entity-link" >FeatureLoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FeatureLoginModule-365615c4feeaa4af6a54fed9773455edf683502b70b97ebe81e6f504c96aa2b8e85e4b7b4a8f2742fc5e76d0347b86f95916bf2fe3a642d2778559ebe5a1ad50"' : 'data-target="#xs-components-links-module-FeatureLoginModule-365615c4feeaa4af6a54fed9773455edf683502b70b97ebe81e6f504c96aa2b8e85e4b7b4a8f2742fc5e76d0347b86f95916bf2fe3a642d2778559ebe5a1ad50"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FeatureLoginModule-365615c4feeaa4af6a54fed9773455edf683502b70b97ebe81e6f504c96aa2b8e85e4b7b4a8f2742fc5e76d0347b86f95916bf2fe3a642d2778559ebe5a1ad50"' :
                                            'id="xs-components-links-module-FeatureLoginModule-365615c4feeaa4af6a54fed9773455edf683502b70b97ebe81e6f504c96aa2b8e85e4b7b4a8f2742fc5e76d0347b86f95916bf2fe3a642d2778559ebe5a1ad50"' }>
                                            <li class="link">
                                                <a href="components/FeatureLoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FeatureLoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FeaturesModule.html" data-type="entity-link" >FeaturesModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ImportModule.html" data-type="entity-link" >ImportModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LogicModule.html" data-type="entity-link" >LogicModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LogicModule-e24714c725956dfc7a5ae7203b3497ec573d3537d5d4acf5d82560affb9c7c4c9b500374d6011f815e2f7ce04088d15f454904aa426876f02bb4e3a121e4e17a"' : 'data-target="#xs-injectables-links-module-LogicModule-e24714c725956dfc7a5ae7203b3497ec573d3537d5d4acf5d82560affb9c7c4c9b500374d6011f815e2f7ce04088d15f454904aa426876f02bb4e3a121e4e17a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LogicModule-e24714c725956dfc7a5ae7203b3497ec573d3537d5d4acf5d82560affb9c7c4c9b500374d6011f815e2f7ce04088d15f454904aa426876f02bb4e3a121e4e17a"' :
                                        'id="xs-injectables-links-module-LogicModule-e24714c725956dfc7a5ae7203b3497ec573d3537d5d4acf5d82560affb9c7c4c9b500374d6011f815e2f7ce04088d15f454904aa426876f02bb4e3a121e4e17a"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DispatcherService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DispatcherService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MessageService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessageService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ViewsModule.html" data-type="entity-link" >ViewsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ViewsModule-a39eaaa57e50e857e32a166388301f582d181572bcfa82d66e6123f11b3d5657362bd6e5e14b2604a6f9a2c22e2abf0bb8e3b2f2d6d74316c0ee19ee911e2e5e"' : 'data-target="#xs-components-links-module-ViewsModule-a39eaaa57e50e857e32a166388301f582d181572bcfa82d66e6123f11b3d5657362bd6e5e14b2604a6f9a2c22e2abf0bb8e3b2f2d6d74316c0ee19ee911e2e5e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ViewsModule-a39eaaa57e50e857e32a166388301f582d181572bcfa82d66e6123f11b3d5657362bd6e5e14b2604a6f9a2c22e2abf0bb8e3b2f2d6d74316c0ee19ee911e2e5e"' :
                                            'id="xs-components-links-module-ViewsModule-a39eaaa57e50e857e32a166388301f582d181572bcfa82d66e6123f11b3d5657362bd6e5e14b2604a6f9a2c22e2abf0bb8e3b2f2d6d74316c0ee19ee911e2e5e"' }>
                                            <li class="link">
                                                <a href="components/ViewContentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewContentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewEditionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewEditionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewHomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewHomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewSearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewSearchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewTemplateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewTemplateComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/SearchableByName.html" data-type="entity-link" >SearchableByName</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});