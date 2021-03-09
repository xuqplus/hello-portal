namespace bpp.controllers {

    class CController implements ng.IComponentController {
        constructor(aService: bpp.services.AService) {
            // auto injections
        }

        cClick: Function = (): void => {
            console.log('cClick');
            aService.a();
        }
    }

    angular
        // .module('bpp') // both are ok
        .module('bppComponents')
        .controller('cController', CController)
}
