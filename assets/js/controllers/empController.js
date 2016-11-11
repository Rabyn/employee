myApp.controller("empController", ["$scope", "empService", function ($scope, empService) {
    //Creating model for Employee form
    $scope.empModel = {
        firstname: "",
        lastame: "",
        email: "",
        address: "",
        phone: "",
    };

    empService.empObj = $scope.empModel;

    $scope.empArray = []; // Declare empty array

    updateEmpList();

    // Click Events
    $scope.clickObj = {
        addEmploye: function () {
            empService.addEmployee();
            updateEmpList();
        },
        showInfo: function (id) {
            console.log("Details: " + id);
            displayConsole: empService.getEmpListFromId;
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
