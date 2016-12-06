(function () {
    "use strict";
    var module = angular.module("macwisWebApp");

    var controller = function ($scope) {
        var model = this;
        model.title = "MyLTSS - My Profile";
    };

    module.component("myProfile", {
        templateUrl: "areas/userprofile/profile.html",
        controllerAs: "model",
        controller: ["$scope", controller]

    });
}())
