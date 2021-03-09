namespace bpp.controllers {

    export class CController implements ng.IComponentController {
        cClick: Function = (): void => {
            console.log('cClick')
        }
    }

    angular
        // .module('bpp') // both are ok
        .module('bppComponents')
        .controller('cController', CController)
}
