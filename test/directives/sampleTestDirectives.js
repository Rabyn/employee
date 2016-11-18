describe("Directive Test SampleEmp", function () {

    beforeEach(angular.mock.module('sampleApp'));
    beforeEach(angular.mock.module('testModule'));

    var element, scope;

    beforeEach(inject(function ($rootScope, $compile) {
        element = angular.element("<sample-Emp-Dr></sample-Emp-Dr>");
        scope = $rootScope.$new();
        $compile(element)(scope);
        scope.$digest();
        console.log(element);
    }));
    if ("Test for header Value", function () {
            expect(element.find("h1").html()).toBe("Testing For Directive");
        });
    if ("Test for P Value", function () {
            expect(element.find("p").html()).toBe("Hello! World");
        });
});
