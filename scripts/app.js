var leefplezierApp = angular.module('leefplezier', ['ngRoute', 'leefplezierControllers']);
var leefplezierControllers = angular.module('leefplezierControllers', []);

leefplezierApp.config(['$routeProvider',
  function($routeProvider) {
  $routeProvider
    .when('/news', {
      controller:'NewsCtrl',
      templateUrl:'views/news-list.html'
    })
    .when('/publications', {
      controller:'PublicationCtrl',
      templateUrl:'views/publication-list.html'
    })
    .otherwise({
      redirectTo:'/',
      templateUrl:'views/information.html'
    });
}]);
 
