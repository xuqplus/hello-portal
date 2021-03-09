((): void => {
    angular.module('bpp.components', []);
    angular.module('bpp.controllers', []);
    angular.module('bpp.directives', []);
    angular.module('bpp.routers', []);
    angular.module('bpp.services', []);

    angular.module('bpp', [
        'bpp.components',
        'bpp.controllers',
        'bpp.directives',
        'bpp.routers',
        'bpp.services',
    ])
})()
