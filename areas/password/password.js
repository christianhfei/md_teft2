(function () {
    "use strict";
    var module = angular.module("macwisWebApp");

    var controller = function ($scope) {
        var model = this;
        model.title = "MyLTSS - My Account - Change Password";
    };

    module.component("changePassword", {
        templateUrl: "areas/password/password.html",
        controllerAs: "model",
        controller: ["$scope", controller]

    });
}())
