(function () {
    "use strict";
    var module = angular.module("macwisWebApp");

    var controller = function ($scope) {
        var model = this;
        model.title = "MyLTSS - My Representatives";
    };

    module.component("myReps", {
        templateUrl: "areas/representatives/representatives.html",
        controllerAs: "model",
        controller: ["$scope", controller]

    });
}())
