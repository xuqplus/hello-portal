namespace bpp.routers {
    'use strict'

    const routes = [{
        name: 'b2',
        url: 'b2',
        templateUrl: 'templates/b2.html',
    }, {
        name: 'b3',
        url: 'b3',
        templateUrl: 'templates/b3.html',
    }]

    const R = (
        // $state: any,
        $stateProvider: angular.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider
    ) => {
        routes.forEach(route => {
            $stateProvider.state(route);
        });
        // $routeProvider
        //   .when('/b2', {
        //     templateUrl: 'templates/b2.html',
        //     controller: 'ItemsController',
        //     controllerAs: 'vm'
        //   })
        //   .otherwise({
        //     redirectTo: '/b2'
        //   })
        $urlRouterProvider.when('/b2', ['$state', ($state: any) => {
            $state.go('/b');
            console.log('haha');
        }]).otherwise(
            // () => { console.log('hoho'); }
            '/c30'
        );
    }

    angular.module('bpp.routers', ['ui.router',])
        .config([/* '$state', */ '$stateProvider', '$urlRouterProvider', R])
}
