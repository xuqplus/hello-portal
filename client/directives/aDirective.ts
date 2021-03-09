namespace bpp.directives {
    'use strict'

    export interface ADirectiveAttributes extends ng.IAttributes {
        aAttr: string;
        aFunc: string;
    }

    export class ADirective implements ng.IDirective {
        link: any = (
            $scope: ng.IScope,
            elm: Element,
            attr: ADirectiveAttributes,
            ngModel: ng.INgModelController): void => {

            console.log($scope)
            console.log(attr)

            const element = angular.element(elm)
            element.bind('mousedown', (event: JQueryEventObject) => {
                console.log(`event triggered on ADirective, and aAttr=>"${attr['aAttr']}", aFunc=>"${attr.aFunc}"`);
                $scope.$eval(attr.aFunc)
            })
        }

        templateUrl = '../views/a.html';
        controller = 'adController';
        controllerAs = '$adCtrl';
        require = '?ngModel';
        restrict = 'EA';

        static instance(): ADirective {
            console.log('create an ADirective')
            return new ADirective();
        }
    }

    angular.module('bpp.directives')
        .directive('aDirective', ADirective.instance)
}
