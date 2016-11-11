(function () {
    "use strict";
    var module = angular.module("macwisWebApp");

    var controller = function ($scope) {
        var model = this;
        model.title = "MyLTSS - My Information - My Plan of Service";
    };

    module.component("myPlanOfService", {
        templateUrl: "areas/planofservice/pos.html",
        controllerAs: "model",
        controller: ["$scope", controller]

    });
}())
