'use strict';
angular.module('main')
.controller('MenuCtrl', function (Data) {

  console.log('Hello from your Controller: MenuCtrl in module main:. This is your controller:', this);
  // TODO: do your controller thing
  var vm = this;
  vm.user = Data.user;
});
