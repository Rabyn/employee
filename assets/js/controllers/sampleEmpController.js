"use strict"

sampleApp.controller("sampleEmpCtrl", ['sampleEmpService', '$scope', function (sampleEmpService, $scope) {
    $scope.firstname = sampleEmpService.getFirstName();
    $scope.lastname = sampleEmpService.getLastName();

    $scope.update = function () {
        sampleEmpService.setFirstName('George');
        sampleEmpService.setLastName('Washington');
    }
    $scope.$watch(sampleEmpService.getFirstName, function (newVal, oldVal) {
        if (newVal != oldVal) {
            $scope.firstname = newVal;
        }
    });
    $scope.$watch(sampleEmpService.getLastName, function (newVal, oldVal) {
        if (newVal != oldVal) {
            $scope.lastname = newVal;
        }
    });
}]);
