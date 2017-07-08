(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuSItemController', menuSItemController);

menuSItemController.$inject = ['item'];
function menuSItemController(item) {
	var controller = this;
	controller.item = item;
}

})();