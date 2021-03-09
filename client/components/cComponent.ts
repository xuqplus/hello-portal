namespace bpp.components {

    class CComponent implements ng.IComponentOptions {
        // controller = bpp.controllers.CController; // not work
        controller = 'cController'; // will be alias '$ctrl' in template by default
        templateUrl = '../templates/c.html';
    }

    angular.module('bpp.components')
        .component('cComponent', new CComponent())
}
