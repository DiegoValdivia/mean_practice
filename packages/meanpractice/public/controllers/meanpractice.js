'use strict';

angular.module('mean.meanpractice').controller('MeanpracticeController', ['$scope', 'Global', 'Meanpractice',
  function($scope, Global, Meanpractice) {
    $scope.global = Global;
    $scope.package = {
      name: 'meanpractice'
    };
  }
]);
