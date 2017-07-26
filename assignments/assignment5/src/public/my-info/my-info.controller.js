(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['myInfo', 'ApiPath'];
function MyInfoController(myInfo, apiPath) {
  var $ctrl = this;
  $ctrl.myInfo = myInfo;
  $ctrl.basePath = apiPath;
}

})();
