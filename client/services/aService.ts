namespace bpp.services {
    'use strict'

    export class AService {
        private $http: ng.IHttpService
        private bService: BService

        constructor($http: ng.IHttpService, bService: BService) {
            this.$http = $http
            this.bService = bService
        }

        a: Function = (): void => {
            console.log("aService.a()")
            this.bService.b()
            const url = 'https://raw.githubusercontent.com/xuqplus/click-click-click/master/.gitignore'
            this.$http.get(url)
                .then(resp => {
                    console.log(url + ' => ' + resp.data)
                })
        }
    }

    angular.module('bpp.services')
        .service('aService', AService)
}
