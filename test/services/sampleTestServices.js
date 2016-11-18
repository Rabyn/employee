describe("Test For Emp Service", function () {
    var sampleEmp;
    beforeEach(function () {
        angular.mock.module('sampleApp');
        inject(function (_sampleEmpService_) { //service name
            sampleEmp = _sampleEmpService_;
        });
    });

    it("getFirstname should be a function", function () {
        expect(typeof (sampleEmp.getFirstName)).toBe("function");
    });
    it("getLastname should be a function", function () {
        expect(typeof (sampleEmp.getLastName)).toBe("function");
    });
    it("setFirstname should be a function", function () {
        expect(typeof (sampleEmp.setFirstName)).toBe("function");
    });
    it("setFirstname should be a function", function () {
        expect(typeof (sampleEmp.setFirstName)).toBe("function");
    });

    it("Last name should be Doe by Default", function () {
        expect(sampleEmp.getLastName()).toBe("Doe");
    });
    it("First name should be Doe by Default", function () {
        expect(sampleEmp.getFirstName()).toBe("John");
    });

});
