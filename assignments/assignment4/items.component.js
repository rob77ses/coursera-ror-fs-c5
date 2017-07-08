(function () {
'use strict';

angular.module('data')
.component('itemsCmp', {
  templateUrl: 'items.template.html',
  bindings: {
    items: '<'
  }
});

})();