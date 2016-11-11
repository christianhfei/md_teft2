(function () {
    "use strict";
    var module = angular.module("macwisWebApp");

    var controller = function ($scope) {
        var model = this;
        model.title = "MyLTSS - My Representatives - View Representatives";
    };

    module.component("viewReps", {
        templateUrl: "areas/viewreps/view.html",
        controllerAs: "model",
        controller: ["$scope", controller]

    });
}())
