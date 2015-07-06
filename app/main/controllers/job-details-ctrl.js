'use strict';
angular.module('main')
  .controller('JobDetailsCtrl', function ($ionicPopup, selectedJob) {

    console.log('Hello from your Controller: JobDetailsCtrl in module main:. This is your controller:', this);
    // TODO: do your controller thing
    var vm = this;
    vm.selectedJob = selectedJob;
    // A confirm dialog
    vm.takeJob = function () {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Confirm Action',
        template: 'Are you sure you want commit to this Job?',
        cancelType: 'button-assertive'
      });
      confirmPopup.then(function (res) {
        if (res) {
          console.log('You are sure');
        } else {
          console.log('You are not sure');
        }
      });
    };
  });
