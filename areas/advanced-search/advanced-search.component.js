(function() {
    "use strict";
    var module = angular.module("macwisWebApp");

    var controller = function($scope, $rootScope) {
        var model = this;
        model.showModal = false;

        $rootScope.performAdvancedSearch = function() {
            model.openModal();
        }

        $rootScope.$on('performAdvancedSearch', function() {
            model.openModal();
        });


        model.openModal = function () {
           $("#advancedSearchModal, #advancedSearchModalBg").show();
            $("body").css("overflow-y", "hidden");
        }

        model.closeModal = function () {
            $("#advancedSearchModal, #advancedSearchModalBg").hide();
            $("body").css("overflow-y", "auto");
        }

    }

    module.component("advancedSearch", {
        templateUrl : "areas/advanced-search/advanced-search.component.html",
        controllerAs: 'model',
        controller  :["$scope", "$rootScope", controller]
    });
}())