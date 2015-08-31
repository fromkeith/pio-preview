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
        .directive('ppMousepad', function () {
            return {
                scope: {
                    ppSrc: '@'
                },
                restrict: 'E',
                replace: true,
                template: '<div class="pp-mousepad"><div class="pp-img-wrapper"><div class="pp-img" style="background-image: url({{ppSrc}})"></div></div><img src="https://az412349.vo.msecnd.net/product-mousepads/mousepad-new-backv1.png" class="pp-bkg"><img src="https://az412349.vo.msecnd.net/product-mousepads/Mousepad-new-overlayv1.png" class="pp-border"></div>'
            };
        })
        .directive('ppFramed', function () {
            return {
                scope: {
                    ppSrc: '@'
                },
                restrict: 'E',
                replace: true,
                template: '<div class="pp-framed"><div class="pp-img-wrapper"><div class="pp-img" style="background-image:url({{ppSrc}});"></div></div><img src="https://az412349.vo.msecnd.net/widget-assets/FFFFFF-0.png" class="pp-bkg"><img src="https://az412349.vo.msecnd.net/product-framedprints/12x18OverlayBlack.png" class="pp-border"></div>'
            };
        }).directive('ppMug', function () {
            return {
                scope: {
                    ppSrc: '@'
                },
                restrict: 'E',
                replace: true,
                template: '<div class="pp-mug"><div class="pp-img-wrapper"><div class="pp-img" style="background-image:url({{ppSrc}})"></div></div><img src="https://az412349.vo.msecnd.net/product-mugs/Mug11oz-Backgroundv4.png" class="pp-bkg"><img src="https://az412349.vo.msecnd.net/product-mugs/Mug11oz-Overlayv3.png" class="pp-border"></div>'
            };
        }).directive('ppPhone', function () {
            return {
                scope: {
                    ppSrc: '@',
                    // valid types:
                    // [iPhone4S, iPhone5C, iPhone5, GalaxyS2, GalaxyS3, GalaxyS4, GalaxyNote, GalaxyNote2, GalaxyNote3, HTCOne]
                    ppType: '@'
                },
                restrict: 'E',
                replace: true,
                template: '<div class="pp-phone"><div class="pp-img-wrapper"><div class="pp-img" style="background-image: url({{ppSrc}});"></div></div><img src="https://az412349.vo.msecnd.net/product-phonecases/{{ppType}}-back.png" class="pp-bkg"><img src="https://az412349.vo.msecnd.net/product-phonecases/{{ppType}}-overlay.png" class="pp-border"></div>',
                link: function ($scope, element, attrs) {
                    if ($scope.ppType === undefined || $scope.ppType === '') {
                        $scope.ppType = 'iPhone4s';
                    }
                }
            };
        });
}));