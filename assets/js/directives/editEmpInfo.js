myApp.directive("editForm", function () {
    return {
        //E is element
        //A is attribut
        //M is comments
        //C is class
        restrict: "EAMC",
        controller: 'empController',
        templateUrl: "/templates/editEmpInfo.html",
        link: function ($scope) {
            $scope.empEditModel = {
                firstname: "",
                lastame: "",
                email: "",
                address: "",
                phone: "",
            };
        }
    }
});
