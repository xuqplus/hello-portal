namespace bpp.components {

    class First {
        constructor() {
        }
    }

    angular.module('bppComponents', [])
        .component('first', new First())
}
