namespace bpp.controllers {

    import AService = bpp.services.AService;

    class CController implements ng.IComponentController {
        private aService: AService; // for grunt ts compilation

        constructor(aService: bpp.services.AService) {
            // auto injections
            this.aService = aService; // for grunt ts compilation
        }

        cClick: Function = (): void => {
            console.log('cClick');
            // aService.a(); // will end up in 'grunt ts' compilation error, but actually this can also work
            this.aService.a(); // for grunt ts compilation
        }
    }

    angular
        // .module('bpp') // both are ok
        .module('bppComponents')
        .controller('cController', CController)
}
