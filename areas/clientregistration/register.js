(function () {
    "use strict";
    var module = angular.module("macwisWebApp");

    var controller = function ($scope) {
        var model = this;
        model.title = "MyLTSS - Representative Registration";
    };

    module.component("clientRegister", {
        templateUrl: "areas/clientregistration/register.html",
        controllerAs: "model",
        controller: ["$scope", controller]

    });
}())
