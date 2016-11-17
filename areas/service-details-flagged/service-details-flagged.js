(function () {
    "use strict";
    var module = angular.module("macwisWebApp");

    var controller = function ($scope) {
        var model = this;
        model.title = "MyLTSS - My Profile";

        $scope.init = function () {
           setTimeout(function(){
               $("#flagStatus").show();
           },300);
        }
        $scope.init();

    };

    module.component("serviceDetailsFlagged", {
        templateUrl: "areas/service-details-flagged/service-details-flagged.html",
        controllerAs: "model",
        controller: ["$scope", controller]

    });
}())
