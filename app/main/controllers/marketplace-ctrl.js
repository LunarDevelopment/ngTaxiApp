'use strict';
angular.module('main')
  .controller('MarketplaceCtrl', function (Job, $state, Data) {

    console.log('Hello from your Controller: MarketplaceCtrl in module main:. This is your controller:', this);
    // TODO: do your controller thing
    var vm = this;
    vm.availableJobs = Data.availableJobs;
    vm.viewJob = function (job) {
      Job.setSelectedJob(job);
      $state.go('app.jobDetails');
    };
  });
