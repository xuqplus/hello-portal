namespace bpp.components {

    angular.module('bpp.components')
        .component('bComponent', {
            templateUrl: '../templates/b.html',
            // controller: ($scope: any) => {
            //     const bClick = (): void => {
            //         console.log('bClick'); // not work
            //     }
            // }
            controller: function ($scope: any) {
                this.bClick = (): void => {
                    console.log('bClick');
                }
            }
        })
}
