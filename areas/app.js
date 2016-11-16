(function () {
    "use strict";
    var module = angular.module("macwisWebApp", ['ui.bootstrap', "ngComponentRouter"]);

    module.value("$routerRootComponent", "macwisWebApp");

    var controller = function (roleService) {
        var model = this;
        model.$onInit = function () {
            //Do Something
        }
    };

    module.component("macwisWebApp", {
        controller: controller,
        bindings: {
            userRole: "@"
        },
        template: '<master-layout>' +
                        '<ng-outlet style="display: block"></ng-outlet>' +
                    '</master-layout>'
            ,
        $routeConfig: [
            { path: '/home', component: 'home', name: 'Home' },
            { path: '/services', component: 'myServices', name: "Services"},
            { path: '/searchresults', component: 'advancedSearchResults', name: "Advanced Search Results"},
            { path: '/information', component: 'myInfo', name: 'My Information'},
            { path: '/representatives', component: 'myReps', name: 'My Representatives'},
            { path: '/account', component: 'myAccount', name: "My Account"},
            { path: '/planofservice', component: 'myPlanOfService', name: 'My Plan of Service'},
            { path: '/password', component: 'changePassword', name: 'Change Password'},
            { path: '/accountinfo', component: 'accountInfo', name: 'Change Account Information'},
            { path: '/viewreps', component: 'viewReps', name: 'View My Representatives'},
            { path: '/invitereps', component: 'inviteReps', name: 'Invite a Representative'},
            { path: '/profile', component: 'myProfile', name: 'My Profile'},
            { path: '/clientregistration', component: 'clientRegister', name: 'Client Registration' },
            { path: '/repregistration', component: 'repRegister', name: 'Representative Registration' },
            { path: '/**', redirectTo: ['Home'] }
        ]
    });

}());

function getSrv(name, element) {
    element = element || '*[ng-app]';
    return angular.element(element).injector().get(name);
}


$routeConfig: [
    { path: '/account', component: 'myAccount', name: "My Account"},
]
