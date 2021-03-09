namespace bpp.controllers {

    class Controller implements ng.IComponentController {
        private $scope: ng.IScope;

        constructor($scope: ng.IScope) {
            this.$scope = $scope;
        }

        aClick: Function = (): void => {
            console.log('aClick in adController');
        }

        adClick: Function = (): void => {
            console.log('adClick in adController');
        }
    }

    angular
        .module('bpp.controllers')
        .controller('adController', Controller)
}
