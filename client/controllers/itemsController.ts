namespace bpp.controllers {

    export interface ItemsScope extends ng.IScope {
        items: object[]
    }

    export class Controller { // export will let others see the Controller
        aClick = (): void => {
            console.log("aClick in ItemsController")
        }

        constructor($scope: ItemsScope) {
            $scope.items = [
                {id: 1, name: 'item 1'},
                {id: 2, name: 'item 2'},
            ]
        }
    }

    angular
        .module('bpp.controllers')
        .controller('ItemsController', Controller)
}
