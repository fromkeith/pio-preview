/*!
 * pio-preview - easy Print.io product previews
 * http://github.com/fromkeith/pio-preview
 * (c) 2015 MIT License
 */

(function (root, factory) {
    if (typeof module !== 'undefined' && module.exports) {
        // CommonJS
        module.exports = factory(require('angular'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(['angular'], factory);
    } else {
        // Global Variables
        factory(root.angular);
    }
}(this, function (angular) {
    'use strict';

    return angular.module('pio-preview', [])
        .directive('ppMousepad', ['$compile', function ($compile) {
            return {
                scope: {
                    ppSrc: '='
                },
                restrict: 'E',
                template: '<div class="pp-mousepad"><div class="pp-img-wrapper"><div class="pp-img" style="{{ppStyle}}"></div></div><img src="https://az412349.vo.msecnd.net/product-mousepads/mousepad-new-backv1.png" class="pp-bkg"><img src="https://az412349.vo.msecnd.net/product-mousepads/Mousepad-new-overlayv1.png" class="pp-border"></div>',
                link: function (scope, element, attrs) {
                    function updateStyle() {
                        if (!scope.ppSrc) {
                            return;
                        }
                        scope.ppStyle = 'background-image: url(' + scope.ppSrc + ')';
                    }
                    if (scope.ppSrc) {
                        updateStyle();
                    }
                    scope.$watch('ppSrc', function () {
                        updateStyle();
                    });
                }
            };
        }])
        .directive('ppFramed', function () {
            return {
                scope: {
                    ppSrc: '='
                },
                restrict: 'E',
                template: '<div class="pp-framed"><div class="pp-img-wrapper"><div class="pp-img" style="{{ppStyle}}"></div></div><img src="https://az412349.vo.msecnd.net/widget-assets/FFFFFF-0.png" class="pp-bkg"><img src="https://az412349.vo.msecnd.net/product-framedprints/12x18OverlayBlack.png" class="pp-border"></div>',
                link: function (scope, element, attrs) {
                    function updateStyle() {
                        if (!scope.ppSrc) {
                            return;
                        }
                        scope.ppStyle = 'background-image: url(' + scope.ppSrc + ')';
                    }
                    if (scope.ppSrc) {
                        updateStyle();
                    }
                    scope.$watch('ppSrc', function () {
                        updateStyle();
                    });
                }
            };
        }).directive('ppMug', function () {
            return {
                scope: {
                    ppSrc: '='
                },
                restrict: 'E',
                template: '<div class="pp-mug"><div class="pp-img-wrapper"><div class="pp-img" style="{{ppStyle}}"></div></div><img src="https://az412349.vo.msecnd.net/product-mugs/Mug11oz-Backgroundv4.png" class="pp-bkg"><img src="https://az412349.vo.msecnd.net/product-mugs/Mug11oz-Overlayv3.png" class="pp-border"></div>',
                link: function (scope, element, attrs) {
                    function updateStyle() {
                        if (!scope.ppSrc) {
                            return;
                        }
                        scope.ppStyle = 'background-image: url(' + scope.ppSrc + ')';
                    }
                    if (scope.ppSrc) {
                        updateStyle();
                    }
                    scope.$watch('ppSrc', function () {
                        updateStyle();
                    });
                }
            };
        }).directive('ppPhone', function () {
            return {
                scope: {
                    ppSrc: '=',
                    // valid types:
                    // [iPhone4S, iPhone5C, iPhone5, GalaxyS2, GalaxyS3, GalaxyS4, GalaxyNote, GalaxyNote2, GalaxyNote3, HTCOne]
                    ppType: '='
                },
                restrict: 'E',
                template: '<div class="pp-phone"><div class="pp-img-wrapper"><div class="pp-img" style="{{ppStyle}};"></div></div><img ng-src="{{ppBack}}" class="pp-bkg"><img ng-src="{{ppOverlay}}"" class="pp-border"></div>',
                link: function (scope, element, attrs) {
                    function updateStyle() {
                        if (!scope.ppSrc) {
                            return;
                        }
                        if (scope.ppType === undefined || scope.ppType === '') {
                            scope.ppType = 'iPhone4s';
                        }
                        scope.ppStyle = 'background-image: url(' + scope.ppSrc + ')';
                        scope.ppBack = 'https://az412349.vo.msecnd.net/product-phonecases/' + scope.ppType + '-back.png';
                        scope.ppOverlay = 'https://az412349.vo.msecnd.net/product-phonecases/' + scope.ppType + '-overlay.png';
                    }
                    if (scope.ppSrc) {
                        updateStyle();
                    }
                    scope.$watch('ppSrc', function () {
                        updateStyle();
                    });
                    scope.$watch('ppType', function () {
                        updateStyle();
                    });
                }
            };
        });
}));