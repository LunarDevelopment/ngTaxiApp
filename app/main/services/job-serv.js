'use strict';
angular.module('main')
.service('Job', function () {

  console.log('Hello from your Service: Job in module main');
  // TODO: do your service thing
  var vm = this;
  vm.selectedJob = {};
  vm.setSelectedJob = function (job) {
    vm.selectedJob = job;
  };
  vm.getSelectedJob = function () {
    return vm.selectedJob;
  };
});
