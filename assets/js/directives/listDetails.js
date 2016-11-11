myApp.directive("listDetails", function () {
    return {
        //E is element
        //A is attribut
        //M is comments
        //C is class
        restrict: "EAMC",
        controller: 'empController',

        templateUrl: "/templates/listDetails.html",

        link: function ($scope) {


        }
    }
});
