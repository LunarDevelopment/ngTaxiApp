'use strict';
angular.module('main')
.controller('JobsCtrl', function (Data) {

  console.log('Hello from your Controller: JobsCtrl in module main:. This is your controller:', this);
  // TODO: do your controller thing
  var vm = this;
  vm.myJobs = Data.myJobs;
});
