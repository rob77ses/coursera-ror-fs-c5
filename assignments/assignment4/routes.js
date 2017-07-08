(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'categories.template.html',
    controller: 'MenuController as ctrl',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
		return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('categories.item', {
    url: '/item/:shortname',
    templateUrl: 'items.template.html',
    controller: "MenuItemController as ctrl",
	resolve: {
      items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
		return MenuDataService.getItemsForCategory($stateParams.shortname);
      }]
    }
  });

}

})();
