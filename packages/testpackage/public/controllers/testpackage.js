'use strict';

angular.module('mean.testpackage').controller('TestpackageController', ['$scope', 'Global', 'Testpackage',
  function($scope, Global, Testpackage) {
    $scope.global = Global;
    $scope.package = {
      name: 'testpackage'
    };
  }
]);
