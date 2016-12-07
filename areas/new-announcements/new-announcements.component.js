(function() {
    "use strict";
    var module = angular.module("macwisWebApp");

    var controller = function($scope, $rootScope) {
        var model = this;
        model.showModal = false;
        model.showNextBtn = true;
        model.showPrevBtn = false;
        model.showDoneBtn = false;
        model.showSendBtn = false;
        model.showCancelBtn = false;
        model.showAnnouncements = true;
        model.showCancelConfirmation = false;
        model.showSendConfirmation = false;
        model.modalState = "";
        model.modalTitle = "New Announcements";


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
            model.showCancelBtn = false;
            model.showSendBtn = false;
            model.showAnnouncements = true;
            model.showCancelConfirmation = false;
            model.showSendConfirmation = false;
        }

        model.prevAnnouncement = function() {
            $('#flag-wizard').slick("prev");
        }
        model.nextAnnouncement = function() {
            $('#flag-wizard').slick("next");
        }

        model.showNextButton = function(val) {
            model.showNextBtn = val;
        }
        model.showPrevButton = function(val) {
            model.showPrevBtn = val;
        }
        model.showDoneButton = function(val) {
            model.showDoneBtn = val;
        }
        model.showCancelButton = function(val) {
            model.showCancelBtn = val;
        }
        model.showSendButton = function(val) {
            model.showSendBtn = val;
        }

       $scope.$on("slideChanged", function(event, currentSlide) {
            if (currentSlide == 0) {
                model.modalTitle = "New Announcements";
                model.showNextButton(true);
                model.showPrevButton(false);
                model.showDoneButton(false);
                model.showCancelButton(false);
                model.showSendButton(false);
                $scope.$apply();

            } else if (currentSlide == 1) {
                model.modalTitle = "Initial Setup";
                model.showNextButton(false);
                model.showPrevButton(true);
                model.showDoneButton(false);
                model.showCancelButton(false);
                model.showSendButton(false);
                $scope.$apply();

            } else if (currentSlide == 2) {
                model.modalTitle = "My Representatives";
                model.showNextButton(false);
                model.showPrevButton(false);
                model.showDoneButton(false);
                model.showCancelButton(true);
                model.showSendButton(true);
                $scope.$apply();
            }
        });

        model.cancelConfirmation = function() {
            model.modalTitle = "Confirmation";
            model.showNextButton(false);
            model.showPrevButton(false);
            model.showDoneButton(true);
            model.showCancelButton(false);
            model.showSendButton(false);
            model.showAnnouncements = false;
            model.showCancelConfirmation = true;
            model.showSendConfirmation = false;
        }

        model.sendConfirmation = function() {
            model.modalTitle = "Confirmation";
            model.showNextButton(false);
            model.showPrevButton(false);
            model.showDoneButton(true);
            model.showCancelButton(false);
            model.showSendButton(false);
            model.showAnnouncements = false;
            model.showCancelConfirmation = false;
            model.showSendConfirmation = true;
        }

        model.$onInit = function() {
            setTimeout(function(){

                $('#flag-wizard').slick({
                    dots: true,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                    adaptiveHeight: true,
                    arrows : false
                })

                $('#flag-wizard').on('afterChange', function (event, slick, currentSlide, nextSlide) {
                    $scope.$emit("slideChanged", currentSlide);
                });

            }, 100)
        }

    }

    module.component("newAnnouncements", {
        templateUrl : "areas/new-announcements/new-announcements.component.html",
        controllerAs: 'model',
        controller  :["$scope", "$rootScope", controller]
    });
}())