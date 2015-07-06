'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
  .config(function ($stateProvider, $urlRouterProvider) {

    console.log('Allo! Allo from your module: ' + 'main');

    $urlRouterProvider.otherwise('/main');

    // some basic routing
    $stateProvider
      .state('app', {
        url: '',
        abstract: true,
        templateUrl: 'main/templates/menu.html',
        controller: 'MenuCtrl as menu'
      })
      .state('app.main', {
        url: '/main',
        views: {
          'menuContent': {
            templateUrl: 'main/templates/start.html',
            controller: 'StartCtrl as start'
          }
        }
      })
      .state('app.marketplace', {
        url: '/marketplace',
        views: {
          'menuContent': {
            templateUrl: 'main/templates/marketplace.html',
            controller: 'MarketplaceCtrl as marketplace'
          }
        }
      })
      .state('app.jobDetails', {
        url: '/jobDetails',
        views: {
          'menuContent': {
            templateUrl: 'main/templates/job-details.html',
            controller: 'JobDetailsCtrl as details',
            resolve: {
              selectedJob: function (Job) {
                return Job.getSelectedJob();
              }
            }
          }
        }
      })
      .state('app.myJobs', {
        url: '/myJobs',
        views: {
          'menuContent': {
            templateUrl: 'main/templates/jobs.html',
            controller: 'JobsCtrl as jobs'
          }
        }
      })
      .state('app.about', {
        url: '/about',
        views: {
          'menuContent': {
            templateUrl: 'main/templates/about.html',
            controller: 'AboutCtrl as about'
          }
        }
      })
      .state('app.feedback', {
        url: '/feedback',
        views: {
          'menuContent': {
            templateUrl: 'main/templates/feedback.html',
            controller: 'FeedbackCtrl as feedback'
          }
        }
      })
      .state('app.settings', {
        url: '/settings',
        views: {
          'menuContent': {
            templateUrl: 'main/templates/settings.html',
            controller: 'SettingsCtrl as settings'
          }
        }
      });
    // TODO: do your thing
  });
