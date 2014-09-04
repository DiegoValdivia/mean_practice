'use strict';

angular.module('mean.testpackage').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('testpackage example page', {
      url: '/testpackage/example',
      templateUrl: 'testpackage/views/index.html'
    });
  }
]);
