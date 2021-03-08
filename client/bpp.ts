'use strict'

let angular: any

const bpp = angular.module('bpp', [])

bpp.controller('ItemsController', ($scope: any) => {
    $scope.items = [
        {id: 1, name: 'QQ 1'},
        {id: 2, name: 'QQ 2'},
    ]
})
