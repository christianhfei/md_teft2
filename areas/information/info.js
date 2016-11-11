(function () {
    "use strict";
    var module = angular.module("macwisWebApp");

    var controller = function ($scope) {
        var model = this;
        model.title = "MyLTSS - My Information";
    };

    module.component("myInfo", {
        templateUrl: "areas/information/info.html",
        controllerAs: "model",
        controller: ["$scope", controller]

    });
}())
