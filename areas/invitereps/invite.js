(function () {
    "use strict";
    var module = angular.module("macwisWebApp");

    var controller = function ($scope, notifications) {
        var model = this;
        model.title = "MyLTSS - My Representatives - Invite Representatives";

        model.sendConfirmation = function(elem, repName) {
            console.log(elem + ", " + repName);

            notifications.showSuccess('Success! An invitation has been emailed to ' + repName + '.');
        }

    };

    module.component("inviteReps", {
        templateUrl: "areas/invitereps/invite.html",
        controllerAs: "model",
        controller: ["$scope", "notifications", controller]

    });
}())
