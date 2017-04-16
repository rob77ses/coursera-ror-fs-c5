(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);



function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'itemFound.html',
    scope: {
      foundItms: '<',
      onRemove: '&'
    },
    controller: NarrowItDownController,
    controllerAs: 'controller',
    bindToController: true
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
	var controller = this;
	controller.searchTerm = "";
	controller.found = [];
	controller.getMatchedMenuItems = function () {
		var promise = MenuSearchService.getMatchedMenuItems(controller.searchTerm);
		promise.then(function (response) {
		  controller.found = response.foundItems;
		}).catch(function (error) {
		  console.log(error);
		})
	};
	
	controller.removeItem = function (itemIndex) {
		controller.found.splice(itemIndex, 1);
	};
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
	var service = this;

	service.getMatchedMenuItems = function (searchTerm) {
	var response = $http({
	  method: "GET",
	  url: (ApiBasePath + "/menu_items.json")
	}).then(function (response) {
		// process result and only keep items that match
		response.foundItems = [];
		var ii = 1;
		for(var i=0; i<response.data.menu_items.length; i++){
			if(response.data.menu_items[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1){
				response.foundItems.push(ii + " ->" + response.data.menu_items[i].description);
			}
			ii++;
		}
		return response;
	});
	return response;
	};
}

})();
