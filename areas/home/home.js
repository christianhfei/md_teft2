(function () {
    "use strict";
    var module = angular.module("macwisWebApp");

    var controller = function ($scope) {
        var model = this;
        model.title = "MyLTSS - Home";
    };

    module.component("home", {
        templateUrl: "areas/home/home.html",
        controllerAs: "model",
        controller: ["$scope", controller]

    });
}())
