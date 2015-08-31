
angular.module('printio-preview', [])
    .directive('ppMousepad', function () {
        return {
            scope: {
                ppSrc: '@'
            },
            restrict: 'E',
            template: '<div class="pp-mousepad"><div class="pp-mousepad-img-wrapper"><div class="pp-mousepad-img" style="background-image: url({{ppSrc}})"></div></div><img src="https://az412349.vo.msecnd.net/product-mousepads/mousepad-new-backv1.png" class="pp-mousepad-bkg"><img src="https://az412349.vo.msecnd.net/product-mousepads/Mousepad-new-overlayv1.png" class="pp-mousepad-border"></div>',
            link: function ($scope, element, attrs) {
            }
        };
    })
    .directive('ppFramed', function () {
        return {
            scope: {
                ppSrc: '@'
            },
            //restrict: 'E',
            template: '<div class="pp-framed"><div class="pp-framed-img-wrapper"><div class="pp-framed-img" style="background-image:url({{ppSrc}});"></div></div><img src="https://az412349.vo.msecnd.net/widget-assets/FFFFFF-0.png" class="pp-framed-bkg"><img src="https://az412349.vo.msecnd.net/product-framedprints/12x18OverlayBlack.png" class="pp-framed-border"></div>',
            link: function ($scope, element, attrs) {
            }
        };
    }).directive('ppMug', function () {
        return {
            scope: {
                ppSrc: '@'
            },
            restrict: 'E',
            template: '<div class="pp-mug"><div class="pp-mug-img-wrapper"><div class="pp-mug-img" style="background-image:url({{ppSrc}})"></div></div><img src="https://az412349.vo.msecnd.net/product-mugs/Mug11oz-Backgroundv4.png" class="pp-mug-bkg"><img src="https://az412349.vo.msecnd.net/product-mugs/Mug11oz-Overlayv3.png" class="pp-mug-border"></div>',
            link: function ($scope, element, attrs) {
            }
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
            template: '<div class="pp-phone"><div class="pp-phone-img-wrapper"><div class="pp-phone-img" style="background-image: url({{ppSrc}});"></div></div><img src="https://az412349.vo.msecnd.net/product-phonecases/{{ppType}}-back.png" class="pp-phone-bkg"><img src="https://az412349.vo.msecnd.net/product-phonecases/{{ppType}}-overlay.png" class="pp-phone-border"></div>',
            link: function ($scope, element, attrs) {
                if ($scope.ppType === undefined || $scope.ppType === '') {
                    $scope.ppType = 'iPhone4s';
                }
            }
        };
    });