namespace bpp.controllers {

    export interface BScope extends ng.IScope {
        items: object[]
    }

    export class BController { // export will let others see BController
        aClick = (): void => {
            console.log(1)
        }

        constructor($scope: BScope) {
            $scope.items = [
                { id: 1, name: 'QQ 1' },
                { id: 2, name: 'QQ 2' },
            ]
        }
    }

    angular.module('bpp')
        .controller('ItemsController', BController)
}
