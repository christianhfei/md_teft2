(function() {
    "use strict";
    var module = angular.module("macwisWebApp");

    var controller = function($scope, $rootScope) {
        var model = this;
        model.showModal = false;
        model.showNextBtn = true;
        model.showPrevBtn = false;
        model.showDoneBtn = false;


        model.progressValue = 100;
        model.opacity = 1;

        $rootScope.$on("showAnnouncements", function(event,data){
            $scope.showNewAnnouncements(data);
        });
        $scope.showNewAnnouncements = function(data) {
            if(data == true) {
                model.showModal();
            } else {
                model.closeModal();
            }
        }

        model.showModal = function () {
            model.showModal = true;
            $("body").css("overflow-y", "hidden");
            $(window).resize();
        }

        model.closeModal = function () {
            model.showModal = false;
            $("body").css("overflow-y", "auto");
            $('#flag-wizard').slickGoTo(0);
            model.showNextBtn = true;
            model.showPrevBtn = false;
            model.showDoneBtn = false;
        }

        model.prevAnnouncement = function() {
            $('#flag-wizard').slick("prev");
            model.showNextBtn = true;
            model.showPrevBtn = false;
            model.showDoneBtn = false;
        }
        model.nextAnnouncement = function() {
            $('#flag-wizard').slick("next");
            model.showNextBtn = false;
            model.showPrevBtn = true;
            model.showDoneBtn = true;
        }

        // model.submitFlag = function() {
        //     $('#flag-wizard').slick("next");
        //     $("#prevFlagStep").hide();
        //     $("#nextFlagStep").hide();
        //     $("#cancelFlag").hide();
        //     $("#submitFlag").hide();
        //     $("#closeFlag").show();
        // }

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

    module.component("newAnnouncements", {
        templateUrl : "areas/new-announcements/new-announcements.component.html",
        controllerAs: 'model',
        controller  :["$scope", "$rootScope", controller]
    });
}())