namespace bpp.controllers {

    interface BScope extends ng.IScope {
        items: object[]
    }

    const BController = ($scope: BScope) => {
        $scope.items = [
            {id: 1, name: 'QQ 1'},
            {id: 2, name: 'QQ 2'},
        ]
    }

    angular.module('bpp')
        .controller('ItemsController', BController)
}
