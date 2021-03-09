namespace bpp.components {

    class Component implements ng.IComponentOptions {
        controller = 'aController';
        templateUrl = '../templates/a.html';
    }

    angular.module('bpp.components')
        .component('aComponent', new Component())
}
