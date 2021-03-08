'use strict'
// const i = 0 // defined never used
console.log('ts-node, for real-time compilation')
let angular: any

const myApp = angular.module('myApp', [])

myApp.controller('ItemsController', function ItemsController ($scope: any) {
  $scope.items = [
    { id: 1, name: 'QQ 1' },
    { id: 2, name: 'QQ 2' },
    { id: 3, name: 'QQ 3' },
    { id: 4, name: 'QQ 4' }
  ]
})
