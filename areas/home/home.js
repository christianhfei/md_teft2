(function () {
    "use strict";
    var module = angular.module("macwisWebApp");

    var controller = function ($rootScope, $scope) {
        var model = this;
        model.title = "MyLTSS - Home";

        model.$onInit = function() {
            setTimeout(function(){
                $rootScope.$emit("showAnnouncements", true);
            }, 400)
        }
    };

    module.component("home", {
        templateUrl: "areas/home/home.html",
        controllerAs: "model",
        controller: ["$rootScope", "$scope", controller]

    });
}())
