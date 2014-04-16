'use strict';

angular
    .module('orgchartappApp', [
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'module/home/home.html',
            controller: 'HomeCtrl'
        })
        .when('/organigramme', {
            templateUrl: 'module/organigramme/organigramme.html',
            controller: 'OrgCtrl'
        })
        .when('/admin', {
            templateUrl: 'module/admin/admin.html',
            controller: 'OrgCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    });
