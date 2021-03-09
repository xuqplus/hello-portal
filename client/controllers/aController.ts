namespace bpp.controllers {

    class Controller implements ng.IComponentController {
        private $scope: ng.IScope;

        constructor($scope: ng.IScope) {
            this.$scope = $scope;
        }

        aClick: Function = (): void => {
            console.log('aClick');
        }
    }

    angular
        .module('bpp') // both are ok
        // .module('bpp.controllers')
        .controller('aController', Controller)
}
