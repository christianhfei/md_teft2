(function () {
    "use strict";
    var module = angular.module("macwisWebApp");

    var controller = function ($scope) {
        var model = this;
        model.label = "Back";
    };

    module.component("backButton", {
        templateUrl: "views/shared/components/back-button/back-button.component.html",
        controllerAs: "model",
        controller: ["$scope", controller],
        bindings: {
            urlLink : "@",
            buttonLabel : "@",
            buttonIcon : "@"
        }

    });
}())
