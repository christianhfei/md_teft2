(function () {
    "use strict";
    var module = angular.module("macwisWebApp");

    var controller = function ($scope, $rootScope) {
        var model = this;
        model.title = "MyLTSS - My Profile";

        model.createNewServiceFlag = function() {
            $rootScope.createNewServiceFlag();
        }

    };



    module.component("serviceDetails", {
        templateUrl: "areas/service-details/service-details.html",
        controllerAs: "model",
        controller: ["$scope", "$rootScope", controller]

    });
}())
