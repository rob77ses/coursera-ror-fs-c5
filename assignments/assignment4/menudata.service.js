(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)

MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath) {
	var service = this;

	
	service.getAllCategories = function () {
	var response = $http({
	  method: "GET",
	  url: (ApiBasePath + "/categories.json")
	}).then(function (response) {
		return response;
	});
	return response;
	};
	
	
	service.getItemsForCategory = function (categoryShortName) {
	var response = $http({
	  method: "GET",
	  url: (ApiBasePath + "/menu_items.json?category="+categoryShortName)
	}).then(function (response) {
		return response;
	});
	return response;
	};
	
	service.getMatchedMenuItems = function (searchTerm) {
	var response = $http({
	  method: "GET",
	  url: (ApiBasePath + "/menu_items.json")
	}).then(function (response) {
		// process result and only keep items that match
		response.foundItems = [];
		for(var i=0; i<response.data.menu_items.length; i++){
			if(response.data.menu_items[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1){
				response.foundItems.push({short_name: response.data.menu_items[i].short_name, name: response.data.menu_items[i].name, description: response.data.menu_items[i].description});
			}
		}
		return response;
	});
	return response;
	};
}

})();
