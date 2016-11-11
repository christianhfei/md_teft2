(function () {
    "use strict";
    var module = angular.module("macwisWebApp");

    var controller = function ($scope) {
        var model = this;
        model.title = "MyLTSS - My Representatives - Invite Representatives";
    };

    module.component("inviteReps", {
        templateUrl: "areas/invitereps/invite.html",
        controllerAs: "model",
        controller: ["$scope", controller]

    });
}())
