(function () {
'use strict';

angular.module('ShoppingListCheckOffApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListService', ShoppingListService);

// LIST #1 - controller
ToBuyController.$inject = ['ShoppingListService'];
function ToBuyController(ShoppingListService) {
  var toBuy = this;

  toBuy.items = ShoppingListService.getToBuyItems();

  toBuy.boughtItem = function (index) {
    ShoppingListService.boughtItem(index);
  }
}


// LIST #2 - controller
AlreadyBoughtController.$inject = ['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService) {
  var alreadyBought = this;

  alreadyBought.items = ShoppingListService.getBoughtItems();
}


function ShoppingListService() {
  var service = this;

  // List of shopping items
  var items = [
    { name: "cookies", quantity: 10 },
    { name: "bread", quantity: 5 },
    { name: "chocolate", quantity: 6 },
    { name: "chips", quantity: 2 },
    { name: "apple pie", quantity: 2 }
  ];

  var itemsBought = [];


  service.getToBuyItems = function () {
    return items;
  };

  service.getBoughtItems = function () {
    return itemsBought;
  };


  service.boughtItem = function(index) {
    itemsBought.push(items.splice(index, 1)[0]);
  };

}

})();
