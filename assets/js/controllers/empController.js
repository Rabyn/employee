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
            empService.addEmployee().then(function () {
                updateEmpList();
            });
        },
        showInfo: empService.getEmpListFromId,

        deleteInfo: function (id) {
            empService.deleteEmpListFromId(id).then(function () {
                updateEmpList();
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
