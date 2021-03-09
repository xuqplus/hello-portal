namespace bpp.routers {
    'use strict'

    const routes = [{
        name: 'b2',
        url: 'b2',
        templateUrl: 'templates/b2.html',
        controllerAs: 'ctrl'
    }, {
        name: 'b3',
        url: 'b3',
        templateUrl: 'templates/b3.html',
        controllerAs: 'ctrl'
    }]

    const BRouter = (
        $stateProvider: angular.ui.IStateProvider,
        // $routeProvider: angular.ui.IStateProvider,
        // $locationProvider: ng.ILocationProvider,
        // $urlRouterProvider: ng.ui.IUrlRouterProvider
    ) => {
        routes.forEach(route => $stateProvider.state(route));
    }

    // angular
    //     .module('bpp.routers', ['ui.router',])
    //     .config(['$stateProvider', BRouter])
}
