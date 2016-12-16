(function() {
    "use strict";
    var module = angular.module("macwisWebApp");

    var controller = function ($rootScope, $scope, messageService, roleService, $location) {
        var model = this;
        model.data = {};
        model.showFooter = true;
        model.$onInit = function(){

        };
        model.showFooter = true;

        $rootScope.$on("hideFooter", function(event, data){
            if (data == true) {
                model.showFooter = false;
            } else {
                model.showFooter = true;
            }
        })

    }

    module.component("layoutFooter", {
        templateUrl: "views/shared/components/layout-footer/layout-footer.component.html",
        controllerAs: "model",
        controller  : ["$rootScope", "$scope", "messageService","roleService", "$location", controller]
    });

}())
