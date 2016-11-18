myApp.controller("empController", ["$scope", "empService", function ($scope, empService) {
    //Creating model for Employee form
    $scope.empModel = {
        firstname: "",
        lastame: "",
        email: "",
        address: "",
        phone: "",
    };
    /*$scope.formreset = function () {
    $scope.formfirstName = "Maheshs";
    $scope.formlastName = "Parashar";
    $scope.formemail = "MaheshParashar@tutorialspoint.com";
}*/

    //$scope.formreset();

    $scope.resetPersonModel = {};

    function reset() {
        $scope.empModel = angular.copy($scope.resetPersonModel);
        empService.empObj = $scope.empModel;
    }

    empService.empObj = $scope.empModel;

    $scope.empArray = []; // Declare empty array

    updateEmpList();

    // Click Events
    $scope.clickObj = {
        addEmploye: function () {
            empService.addEmployee().then(function () {
                updateEmpList();
                reset();
            });
        },

        deleteInfo: function (id) {
            empService.deleteEmpListFromId(id).then(function () {
                updateEmpList();
            });
        },

        editEmpInfo: function (employee) {
            $scope.empEditModel = employee;
            $scope.openModal();
        },

        updateEmpInfo: function (updateObj) {
            empService.updateEmpList(updateObj).then(function () {
                updateEmpList();
                $scope.empEditModel = {};
            });
        }
    };

    // Below this are private Functions
    function updateEmpList() {
        var empListPromise = empService.getEmpList();
        empListPromise.then(function (response) {
            $scope.empArray = response;
        });
    }

            }]);
