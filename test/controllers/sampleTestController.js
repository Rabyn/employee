'use strict';
describe("test ctrl", function () {

    beforeEach(angular.mock.module('sampleApp'));
    var $controller;
    var $scope;

    //before each
    beforeEach(angular.mock.inject(function (_$controller_, $rootScope) {
        $controller = _$controller_;
        $scope = $rootScope.$new();
        var controller = $controller('sampleEmpCtrl', {
            $scope: $scope
        });
    }));

    it('has first Name as John by default', function () {
        expect($scope.firstname).toEqual('John');
    });
    it('has last Name as Doe by default', function () {
        expect($scope.lastname).toEqual('Doe');
    });

});
