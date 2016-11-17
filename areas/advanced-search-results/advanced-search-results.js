(function () {
    "use strict";
    var module = angular.module("macwisWebApp");

    var controller = function ($scope, $rootScope) {
        var model = this;
        model.title = "MyLTSS - Services";

        var fcOptions = {};
            fcOptions.bgColor = "#d87500";
            fcOptions.brdrColor = "#946500";

        $scope.init = function() {
            setTimeout(function(){
                $('#servicesCalendar').fullCalendar({
                    windowResize: function(view) {

                        if ($(window).width() < 992){
                            $("#mobileServicesContainer").slick(
                                {
                                    swipeToSlide : false,
                                    touchMove: false,
                                    arrows: false,
                                    dots: false,
                                    infinite: false,
                                    adaptiveHeight: true
                                }
                            );
                            $("#ServiceDetailsBackButton").show();

                            $scope.slickEnabled = true;

                            $("#serviceDetails").show();
                        } else {
                            if ($scope.slickEnabled) {
                                $("#mobileServicesContainer").slick("unslick");
                                $("#ServiceDetailsBackButton").hide();
                                $("back-button").show();
                                $scope.slickEnabled = false;
                            }
                        }
                    },
                    eventClick: function(calEvent, jsEvent, view) {
                        if ($scope.slickEnabled) {
                            $("#mobileServicesContainer").slick("slickNext");
                            $("back-button").hide();
                        }
                    },
                    height: 850,
                    "allDaySlot" : false,
                    "defaultDate" : "2016-01-08",
                    "defaultView" : "listYear",
                    "customButtons": {
                        "showFlaggedServices": {
                            "text": 'Show Only Flagged Services',
                            click: function() {
                                $scope.toggleFlaggedServices();
                            }
                        },
                        "advancedSearch": {
                            "text": 'New Advanced Search',
                            click: function() {
                                $scope.performAdvancedSearch();
                            }
                        },
                        "customToday": {
                            "text": 'Today',
                            click: function() {
                                $('#servicesCalendar').fullCalendar("gotoDate" , "2016-01-08");
                            }
                        }
                    },
                    "header" : {
                        "left":   'advancedSearch showFlaggedServices',
                        "center": '',
                        "right":  ''
                    },
                    "today" : "2016-01-08",
                    "views": {
                        "listDay": {
                            type: 'list',
                            duration: { days: 1 },
                            buttonText: 'Day'
                        },
                        "month": {
                            buttonText: 'Month'
                        },
                        "agendaWeek": {
                            buttonText: 'Week'
                        }
                    },
                    "viewRender": function(view, element) {

                        if (view.name == "listDay" || view.name == "listYear") {
                            $(".fc-view-container").addClass("col-md-6");
                            $("#serviceDetails").show();
                        } else {
                            $(".fc-view-container").removeClass("col-md-6");
                            $("#serviceDetails").hide();
                        }
                    },
                    "displayEventEnd" : true,
                    "events" : [
                        {
                            id: '1',
                            title: 'Shared Attendant \nCandace Kind',
                            start: '2016-01-07 07:59:00',
                            end: '2016-01-07 10:32:00'
                        },
                        {
                            id: '2',
                            title: 'Shared Attendant \nBrenda Livingston',
                            start: '2016-01-07 11:15:00',
                            end: '2016-01-07 13:02:00',
                            backgroundColor: fcOptions.bgColor,
                            borderColor : fcOptions.brdrColor

                        },
                        {
                            id: '3',
                            title: 'Shared Attendant \nCandace Kind',
                            start: '2016-01-07 16:32:00',
                            end: '2016-01-07 19:58:00'
                        },
                        {
                            id: '4',
                            title: 'Shared Attendant \nCandace Kind',
                            start: '2016-01-06 07:09:00',
                            end: '2016-01-06 12:02:00'
                        },
                        {
                            id: '5',
                            title: 'Shared Attendant \nCandace Kind',
                            start: '2016-01-06 13:05:00',
                            end: '2016-01-06 18:46:00'

                        },
                        {
                            id: '6',
                            title: 'Shared Attendant \nCandace Kind',
                            start: '2016-01-05 06:27:00',
                            end: '2016-01-05 13:58:00'
                        },
                        {
                            id: '7',
                            title: 'Shared Attendant \nCandace Kind',
                            start: '2016-01-05 15:00:00',
                            end: '2016-01-05 19:08:00'
                        },
                        {
                            id: '8',
                            title: 'Shared Attendant \nCandace Kind',
                            start: '2016-01-04 07:01:00',
                            end: '2016-01-04 12:58:00'
                        },
                        {
                            id: '9',
                            title: 'Shared Attendant \nCandace Kind',
                            start: '2016-01-04 16:32:00',
                            end: '2016-01-04 18:58:00'
                        },
                        {
                            id: '10',
                            title: 'Shared Attendant \nCandace Kind',
                            start: '2016-01-03 08:14:00',
                            end: '2016-01-03 14:07:00'
                        },
                        {
                            id: '11',
                            title: 'Shared Attendant \nBrenda Livingston',
                            start: '2016-01-02 10:09:00',
                            end: '2016-01-02 15:54:00',
                            backgroundColor: fcOptions.bgColor,
                            borderColor : fcOptions.brdrColor

                        },
                        {
                            id: '12',
                            title: 'Shared Attendant \nCandace Kind',
                            start: '2016-01-02 16:32:00',
                            end: '2016-01-02 18:58:00'
                        },
                        {
                            id: '13',
                            title: 'Shared Attendant \nCandace Kind',
                            start: '2016-01-01 06:34:00',
                            end: '2016-01-01 14:02:00'
                        },
                        {
                            id: '14',
                            title: 'Shared Attendant \nCandace Kind',
                            start: '2016-01-01 15:05:00',
                            end: '2016-01-01 19:02:00'
                        },
                        {
                            id: '15',
                            title: 'Shared Attendant \nCandace Kind',
                            start: '2015-12-31 07:01:00',
                            end: '2015-12-31 13:00:00'
                        },
                        {
                            id: '16',
                            title: 'Shared Attendant \nCandace Kind',
                            start: '2015-12-31 16:27:00',
                            end: '2015-12-31 18:55:00'
                        },
                        {
                            id: '17',
                            title: 'Shared Attendant \nCandace Kind',
                            start: '2015-12-30 16:32:00',
                            end: '2015-12-30 19:58:00'
                        },
                        {
                            id: '18',
                            title: 'Shared Attendant \nCandace Kind',
                            start: '2015-12-29 07:09:00',
                            end: '2015-12-29 12:02:00'
                        },
                        {
                            id: '19',
                            title: 'Shared Attendant \nCandace Kind',
                            start: '2015-12-29 13:05:00',
                            end: '2015-12-29 18:46:00'

                        },
                        {
                            id: '20',
                            title: 'Shared Attendant \nCandace Kind',
                            start: '2015-12-28 06:27:00',
                            end: '2015-12-28 13:58:00'
                        },
                        {
                            id: '21',
                            title: 'Shared Attendant \nCandace Kind',
                            start: '2015-12-27 15:00:00',
                            end: '2015-12-27 19:08:00'
                        },
                        {
                            id: '22',
                            title: 'Shared Attendant \nCandace Kind',
                            start: '2015-12-26 07:01:00',
                            end: '2015-12-27 12:58:00'
                        },
                        {
                            id: '23',
                            title: 'Shared Attendant \nCandace Kind',
                            start: '2015-12-26 10:32:00',
                            end: '2015-12-26 18:58:00'
                        }
                    ]
                });

               $(".fc-advancedSearch-button").bind('click', function() {
                   $rootScope.$broadcast('performAdvancedSearch', true);
               });

                $(window).resize();

                $("#ServiceDetailsBackButton").on("click", function(){
                    $("#mobileServicesContainer").slick("slickPrev");
                    setTimeout(function(){
                        $("back-button").show();
                    },500);
                });
            },400)


        }

        $scope.init();

        model.createNewServiceFlag = function() {
            $rootScope.createNewServiceFlag();
        }
        $scope.performAdvancedSearch = function() {
            $rootScope.$broadcast('performAdvancedSearch', true);
        }


        $scope.toggleFlaggedServices = function(){
            if ($scope.showFlaggedOnly == false) {
                $scope.showFlaggedOnly = true;
                $("a.fc-day-grid-event, a.fc-time-grid-event").not("[style*=background-color]").show();
                $(".fc-event-dot").not("[style*=background-color]").each(function(){
                    $(this).parents(".fc-list-item").first().show();
                });
                $(".fc-showFlaggedServices-button").html("Show Only Flagged Services");

            } else if ($scope.showFlaggedOnly == true || $scope.showFlaggedOnly == null ) {
                $scope.showFlaggedOnly = false;
                $("a.fc-day-grid-event, a.fc-time-grid-event").not("[style*=background-color]").hide();
                $(".fc-event-dot").not("[style*=background-color]").each(function(){
                    $(this).parents(".fc-list-item").first().hide();
                });
                $(".fc-showFlaggedServices-button").html("Show All Services");
            }
        }
    };

    module.component("advancedSearchResults", {
        templateUrl: "areas/advanced-search-results/advanced-search-results.html",
        controllerAs: "model",
        controller: ["$scope", "$rootScope", controller]

    });
}())
