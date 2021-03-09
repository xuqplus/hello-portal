namespace bpp.directives {
    'use strict'

    export class ADirective implements ng.IDirective {
        constructor() {
        }
    }

    angular.module('bpp.directives')
        .service('aDirective', ADirective)
}
