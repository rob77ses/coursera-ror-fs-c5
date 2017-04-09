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

  /*toBuy.removeItem = function (itemIndex) {
    shoppingList.removeItem(itemIndex);
  };*/
}


// LIST #2 - controller
AlreadyBoughtController.$inject = ['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService) {
  var alreadyBought = this;

  alreadyBought.items = ShoppingListService.getBoughtItems();

  /*var list2 = this;

  // Use factory to create new shopping list service
  var shoppingList = ShoppingListFactory(3);

  list2.items = shoppingList.getItems();

  list2.itemName = "";
  list2.itemQuantity = "";

  list2.addItem = function () {
    try {
      shoppingList.addItem(list2.itemName, list2.itemQuantity);
    } catch (error) {
      list2.errorMessage = error.message;
    }

  }

  list2.removeItem = function (itemIndex) {
    shoppingList.removeItem(itemIndex);
  };*/
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

  /*service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    items.push(item);
  };

  service.removeItem = function (itemIdex) {
    items.splice(itemIdex, 1);
  };

  service.getItems = function () {
    return items;
  };*/
}

})();
