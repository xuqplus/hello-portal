"use strict";
var i = 0;
// console.log("ts-node for real-time compilation");
var angular: any

var myApp = angular.module('myApp', []);

myApp.controller('ItemsController', function ItemsController($scope: any) {
    $scope.items = [
        {id: 1, name: 'QQ 1',},
        {id: 2, name: 'QQ 2',},
        {id: 3, name: 'QQ 3',},
        {id: 4, name: 'QQ 4',},
    ];
});
//# sourceMappingURL=app.js.map