(function () {
"use strict";

angular.module('common')
.service('SignUpService', SignUpService);


SignUpService.$inject = ['$http', 'ApiPath'];
function SignUpService($http, ApiPath) {
  var service = this;
  service.myInfo = [];
  service.myInfo.firstname = "";
  service.myInfo.lastname = "";
  service.myInfo.phonenumber = "";
  service.myInfo.emailaddress = "";
  service.myInfo.short_name = "";
  service.myInfo.menu_item = [];
  service.myInfo.signedUp = false;

  service.getMyInfo = function () {
    return service.myInfo;
  };
  
  service.setFavoriteMenuItem = function (menu_item){
	service.myInfo.menu_item = menu_item;
	service.myInfo.signedUp = true;
  };

}



})();