'use strict';
angular.module('main')
.controller('SettingsCtrl', function (Data) {

  console.log('Hello from your Controller: SettingsCtrl in module main:. This is your controller:', this);
  // TODO: do your controller thing
  var vm = this;
  vm.user = Data.user;
});
