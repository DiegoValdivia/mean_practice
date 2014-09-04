'use strict';

angular.module('mean.meanpractice').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('meanpractice example page', {
      url: '/meanpractice/example',
      templateUrl: 'meanpractice/views/index.html'
    });
  }
]);
