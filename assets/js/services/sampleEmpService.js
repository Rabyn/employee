"use strict"
sampleApp.service("sampleEmpService", function () {
    var firstname = "John";
    var lastname = "Doe";

    this.setFirstName = function (fname) {
        firstname = fname;
    }
    this.setLastName = function (lname) {
        lastname = lname;
    }

    this.getFirstName = function () {
        return firstname;
    }

    this.getLastName = function () {
        return lastname;
    }
});
