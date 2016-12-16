(function () {
    "use strict";
    var module = angular.module("macwisWebApp");

    var controller = function ($scope, notifications) {
        var model = this;
        model.title = "MyLTSS - My Representatives - Invite Representatives";

        model.sendConfirmation = function($event, repName) {
            console.log($event.currentTarget);
            notifications.showSuccess('Success! An invitation has been emailed to ' + repName + '.');
            var button = $event.currentTarget;
            $(button).css('background', '#b0b0b0').html('<span class="fa fa-paper-plane" style="font-size: 125%;"></span> <br>Invite Sent')
        }

    };

    module.component("inviteReps", {
        templateUrl: "areas/invitereps/invite.html",
        controllerAs: "model",
        controller: ["$scope", "notifications", controller]

    });
}())
