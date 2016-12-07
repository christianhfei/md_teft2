(function () {
    "use strict";
    var module = angular.module("macwisWebApp");

    var controller = function ($rootScope, $scope) {
        var model = this;
        model.title = "MyLTSS - Home";

        model.$onInit = function() {

            var isInitialLogin = sessionStorage.getItem("isInitialLogin");

            if (isInitialLogin == null) {
                model.isInitialLogin = true;
            } else if (isInitialLogin == "false") {
                model.isInitialLogin = false;

            }

            setTimeout(function(){
                if (model.isInitialLogin == true) {
                    $rootScope.$emit("showAnnouncements", true);

                    sessionStorage.setItem('isInitialLogin', false);
                    model.isInitialLogin = false;

                } else if (model.isInitialLogin == false){
                    $rootScope.$emit("showAnnouncements", false);
                }


            }, 400)
        }

    };

    module.component("home", {
        templateUrl: "areas/home/home.html",
        controllerAs: "model",
        controller: ["$rootScope", "$scope", controller]

    });
}())
