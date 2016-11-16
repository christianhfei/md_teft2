(function() {
    "use strict";
    var module = angular.module("macwisWebApp");

    var controller = function($scope, $rootScope) {
        var model = this;
        model.showModal = false;

        model.progressValue = 100;
        model.opacity = 1;

        $rootScope.createNewServiceFlag = function() {
            model.showModal = true;
            $("body").css("overflow-y", "hidden");
            $(window).resize();
        }

        model.closeModal = function () {
            model.showModal = false;
            $("body").css("overflow-y", "auto");
        }

        model.prevFlagStep = function() {
            $('#flag-wizard').slick("prev");
            $("#submitFlag").hide();
            $("#nextFlagStep").show();
            $("#prevFlagStep").hide();
        }
        model.nextFlagStep = function() {
            $('#flag-wizard').slick("next");
            $("#prevFlagStep").show();
            $("#nextFlagStep").hide();
            $("#submitFlag").show();
        }

        model.submitFlag = function() {
            $('#flag-wizard').slick("next");
            $("#prevFlagStep").hide();
            $("#nextFlagStep").hide();
            $("#cancelFlag").hide();
            $("#submitFlag").hide();
            $("#closeFlag").show();
        }

        $scope.init = function() {
            setTimeout(function(){

                $('#flag-wizard').slick({
                    dots: true,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                    adaptiveHeight: true,
                    arrows : false
                });
            }, 400)
        }

        $scope.init();

    }

    module.component("newServiceFlag", {
        templateUrl : "areas/service-flags/new-service-flag.component.html",
        controllerAs: 'model',
        controller  :["$scope", "$rootScope", controller]
    });
}())