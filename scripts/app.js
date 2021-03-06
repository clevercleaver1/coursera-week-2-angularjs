(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;
  toBuy.items = ShoppingListCheckOffService.toBuyItems();
  toBuy.bought = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;
  alreadyBought.items = ShoppingListCheckOffService.boughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;
  // List of items to buy
  var toBuyItems = [
    { name: "pizza",
     quantity: 1 },
    { name: "Advil",
     quantity: 15 },
    { name: "Tennis Balls",
     quantity: 3 },
    { name: "Cream",
     quantity: 7 },
    { name: "shirts",
     quantity: 20 }
  ];
  // List of bought items
  var boughtItems = [];

  service.buyItem = function (itemIdex) {
    var item = toBuyItems[itemIdex];
    boughtItems.push(item);
    toBuyItems.splice(itemIdex, 1);
  };

  service.toBuyItems = function () {
    return toBuyItems;
  };

  service.boughtItems = function () {
    return boughtItems;
  };
}

})();