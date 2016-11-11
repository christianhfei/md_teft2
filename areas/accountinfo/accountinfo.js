(function () {
    "use strict";
    var module = angular.module("macwisWebApp");

    var controller = function ($scope) {
        var model = this;
        model.title = "MyLTSS - My Account - Change My Account Info";
    };

    module.component("accountInfo", {
        templateUrl: "areas/accountinfo/accountinfo.html",
        controllerAs: "model",
        controller: ["$scope", controller]

    });
}())
