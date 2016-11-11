myApp.directive("addForm", function () {
    return {
        //E is element
        //A is attribut
        //M is comments
        //C is class
        restrict: "EAMC",
        controller: 'empController',
        templateUrl: "/templates/addForm.html",
        link: function ($scope) {

        }
    }
});
