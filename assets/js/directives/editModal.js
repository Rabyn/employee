myApp.directive("editModal", function () {
    return {
        //E is element
        //A is attribut
        //M is comments
        //C is class
        restrict: "EAMC",
        controller: 'empController',
        templateUrl: "/templates/editModal.html",
        link: function ($scope) {
            $scope.openModal = function () {
                $scope.showModal = true;
            };

            /*$scope.ok = function () {
    $scope.showModal = false;
};*/

            $scope.cancel = function () {
                $scope.showModal = false;
            };
        }
    }
});
