(function () {
    "use strict";
    var module = angular.module("macwisWebApp");

    module.component('calendarLayout', {
        templateUrl: "views/shared/layouts/calendar-layout/calendar.layout.html",
        transclude : true
    })
}())
