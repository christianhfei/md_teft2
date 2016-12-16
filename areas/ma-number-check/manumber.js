(function () {
    "use strict";
    var module = angular.module("macwisWebApp");

    var controller = function ($scope) {
        var model = this;
        model.title = "MyLTSS - Activate Registration Process";
    };

    module.component("manumberCheck", {
        templateUrl: "areas/ma-number-check/manumber.html",
        controllerAs: "model",
        controller: ["$scope", controller]

    });
}())
