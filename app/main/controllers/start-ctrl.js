'use strict';
angular.module('main')
  .controller('StartCtrl', function (Start, Config, Data) {

    // bind data from service
    this.someData = Start.someData;
    this.ENV = Config.ENV;
    this.BUILD = Config.BUILD;

    console.log('Hello from your Controller: StartCtrl in module main:. This is your controller:', this);
    // TODO: do your controller thing
    var vm = this;
    vm.user = Data.user;
    vm.jobsWaiting = (Data.myJobs.length);
  });
