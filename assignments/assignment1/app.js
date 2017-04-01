(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchMenu = "";
  $scope.lunchMessage = "";
  $scope.color="";
  var lunchMessageDataFirst="Please enter data first";
  $scope.isTooMuchMsg = function () {
  	$scope.color="red";
  	if($scope.lunchMenu == "") { 
  		$scope.lunchMessage=lunchMessageDataFirst; 
  		return;
  	}
  	var splitLunchMenu = $scope.lunchMenu.split(",");
  	var count=0;
  	for(var i=0;i<splitLunchMenu.length;i++){
  		if(splitLunchMenu[i].trim().length>0){ count++; }
  	}
  	if(count == 0){
      //0 elements, no lunch... i first considered as "Please enter data first" but... 
  		//$scope.lunchMessage=lunchMessageDataFirst; 
      $scope.lunchMessage="Enjoy! (note: in this case I considered that input has data and that data is a count of zero elements)";
      $scope.color="green";
  	}else{ 
  		$scope.color="green";
  		if(count<4){
  			$scope.lunchMessage="Enjoy!";
  		}else {
  			$scope.lunchMessage="Too much!";	
  		}
    }
  };
}

})();
