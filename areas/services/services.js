(function () {
    "use strict";
    var module = angular.module("macwisWebApp");

    var controller = function ($scope) {
        var model = this;
        model.title = "MyLTSS - Services";

        $scope.init = function() {
            setTimeout(function(){
                $('#servicesCalendar').fullCalendar({
                    "defaultDate" : "2016-01-01",
                    "customButtons": {
                        "showFlaggedServices": {
                            "text": 'Show Flagged Services',
                            click: function() {
                                alert('clicked the custom button!');
                            }
                        },
                        "advancedSearch": {
                            "text": 'Advanced Search',
                            click: function() {
                                alert('clicked the custom button!');
                            }
                        }
                    },
                    "header" : {
                        "left":   'prev title next',
                        "center": 'showFlaggedServices advancedSearch',
                        "right":  'today  month,basicWeek,listDay'
                    },
                    "views": {
                        "listDay": {
                            type: 'list',
                            duration: { days: 1 },
                            buttonText: 'Day'
                        }
                    },
                    "viewRender": function(view, element) {

                        if (view.name == "listDay") {
                            $(".fc-view-container").addClass("col-xs-6");
                            $("#serviceDetails").show();
                        } else {
                            $(".fc-view-container").removeClass("col-xs-6");
                            $("#serviceDetails").hide();
                        }
                    },
                    events: [
                        {
                            id: '1',
                            title: 'Shared Attendant',
                            start: '2016-01-15'
                        },
                        {
                            id: '2',
                            title: 'Shared Attendant',
                            start: '2016-01-13'
                        },
                        {
                            id: '3',
                            title: 'Shared Attendant',
                            start: '2016-01-11'
                        },
                        {
                            id: '4',
                            title: 'Personal Assistance',
                            start: '2016-01-09'
                        },
                        {
                            id: '5',
                            title: 'Shared Attendant',
                            start: '2016-01-06'
                        },
                        {
                            id: '6',
                            title: 'Personal Assistance',
                            start: '2016-01-04'
                        }, {
                            id: '7',
                            title: 'Shared Attendant',
                            start: '2016-01-03'
                        }, {
                            id: '8',
                            title: 'Shared Attendant',
                            start: '2016-01-01'
                        }
                    ]
                });
            },400)
        }

        $scope.init();
    };

    module.component("myServices", {
        templateUrl: "areas/services/services.html",
        controllerAs: "model",
        controller: ["$scope", controller]

    });
}())
