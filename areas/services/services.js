(function () {
    "use strict";
    var module = angular.module("macwisWebApp");

    var controller = function ($scope) {
        var model = this;
        model.title = "MyLTSS - Services";
    };

    module.component("myServices", {
        templateUrl: "areas/services/services.html",
        controllerAs: "model",
        controller: ["$scope", controller]

    });
}())
