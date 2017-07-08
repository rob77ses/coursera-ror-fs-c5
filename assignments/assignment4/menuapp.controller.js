(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuController', menuController);

menuController.$inject = ['categories'];
function menuController(categories) {
	var controller = this;
	controller.categories = categories;
}

})();