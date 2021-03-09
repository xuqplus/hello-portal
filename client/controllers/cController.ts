namespace bpp.controllers {

    class CController implements ng.IComponentController {
        private aService: bpp.services.AService; // for grunt ts compilation
        private $scope: ng.IScope;
        private $rootScope: ng.IRootScopeService;
        private cModel: string;

        constructor($scope: ng.IScope,/* $rootScope: ng.IRootScopeService,*/ aService: bpp.services.AService) {
            this.$scope = $scope; // for grunt ts compilation
            // this.$rootScope = $rootScope;
            this.aService = aService;
            this.cModel = 'cModel'
        }

        cClick: Function = (): void => {
            console.log('cClick');
            console.log(this);
            // aService.a(); // will end up in 'grunt ts' compilation error, but actually this can also work
            this.aService.a(); // for grunt ts compilation
        }
    }

    angular
        // .module('bpp') // both are ok
        .module('bpp.controllers')
        .controller('cController', CController)
}
