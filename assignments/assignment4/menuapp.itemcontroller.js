(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuItemController', menuItemController);

menuItemController.$inject = ['items'];
function menuItemController(items) {
	var controller = this;
	controller.menu_items = items.data.menu_items;
	controller.menu_category = items.data.category;
}

})();