(function () {
    "use strict";
    var module = angular.module("macwisWebApp");

    var controller = function ($scope) {
        var model = this;
        model.title = "MyLTSS - My Account";
    };

    module.component("myAccount", {
        templateUrl: "areas/account/account.html",
        controllerAs: "model",
        controller: ["$scope", controller]

    });
}())
