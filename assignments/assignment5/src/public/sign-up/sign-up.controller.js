(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

//SignUpController.$inject = ['myInfo'];
SignUpController.$inject = ['signUpService', 'MenuService'];
function SignUpController(signUpService, menuService) {
  var $ctrl = this;
  $ctrl.signUpService = signUpService;
  $ctrl.myInfo = signUpService.getMyInfo();
  $ctrl.menuService = menuService;
  
  $ctrl.success=false;
  $ctrl.review=false;
  
  
  
  $ctrl.submit = function () {
	var promise = menuService.getMenuItem($ctrl.myInfo.short_name);
	promise.then(function successCallback(response) {
		$ctrl.success=true;
		$ctrl.review=false;
		$ctrl.signUpService.setFavoriteMenuItem(response);
	}, function errorCallback(response) {
		$ctrl.success=false;
		$ctrl.review=true;
	});
  };
}

})();
