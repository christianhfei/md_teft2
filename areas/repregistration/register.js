(function () {
    "use strict";
    var module = angular.module("macwisWebApp");

    var controller = function ($rootScope, $scope) {
        var model = this;
        model.title = "MyLTSS - Representative Registration";


        $rootScope.$emit("hideFooter", true);

        //Show footer again after leaving this page.
        $rootScope.$on("$locationChangeStart", function(){
            $rootScope.$emit("hideFooter", false);
        });

    };

    module.component("repRegister", {
        templateUrl: "areas/repregistration/register.html",
        controllerAs: "model",
        controller: ["$rootScope", "$scope", controller]

    });
}())
