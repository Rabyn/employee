myApp.service("empService", ["$http", function ($http) {

    this.empObj = {
        firstname: "",
        lastname: "",
        email: "",
        address: "",
        phone: ""
    };

    var parent = this;

    //making private function public
    this.addEmployee = addEmployee;

    /* Get Data From Database*/
    this.getEmpList = function () {
        return $http({
            method: "GET",
            url: "/employee/info/"
        }).then(function (result) {
            return result.data;
        });
    };

    /* Get individual Data From Database*/
    this.getEmpListFromId = function (id) {
        return $http({
            method: "GET",
            url: "/employee/info/" + id
        }).then(function (result) {
            console.log(result.data);
            //return result.data;
        });
    };

    /* Post Data into Database*/
    this.postEmpList = function (dataParam) {
        return $http({
            method: "POST",
            url: "/employee/info",
            data: dataParam
        }).then(function (result) {
            return result.data;
        });
    };

    /* Get individual Data From Database*/
    this.deleteEmpListFromId = function (id) {
        return $http({
            method: "DELETE",
            url: "/employee/info/" + id
        }).then(function (result) {
            return result.data;
        });
    };

    /* Assigning Data into variables */
    function addEmployee() {
        var tempEmpObj = {
            firstname: parent.empObj.firstname,
            lastname: parent.empObj.lastname,
            email: parent.empObj.email,
            address: parent.empObj.address,
            phone: parent.empObj.phone
        };
        return parent.postEmpList(tempEmpObj);
    }
}]);
