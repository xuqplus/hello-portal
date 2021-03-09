namespace bpp.services {
    'use strict'

    export class BService {
        b: Function = (): void => {
            console.log("bService.b()")
        }
    }

    angular.module('bpp')
        .service('bService', BService)
}
