namespace bpp.routers {
    'use strict'

    const routes = [{
        name: 'a', url: 'a', templateUrl: 'templates/a.html',
        // component: 'aComponent',
        // controller: 'aController',
    }, {
        name: 'b2', url: 'b2', templateUrl: 'templates/b2.html',
        // component: 'bComponent',
        // controller: 'aController',
    }, {
        name: 'b3', url: 'b3', templateUrl: 'templates/b3.html',
        // component: 'cComponent',
        // controller: 'aController',
    },]

    class R {
        constructor(
            $stateProvider: ng.ui.IStateProvider,
            $urlRouterProvider: ng.ui.IUrlRouterProvider,
            $locationProvider: ng.ILocationProvider,
        ) {
            routes.forEach(route => $stateProvider.state(route.name, route));
            // $urlRouterProvider.otherwise('b3')
            // $locationProvider.hashPrefix('!')
            // $locationProvider.html5Mode(false)
        }
    }

    angular
        .module('bpp.routers', ['ui.router',])
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', R])
}
