angular.module('ui', []);

angular.module('ui').run(function($templateCache){

	$templateCache.put('view/accordion.html', '<div class="panel-heading" ng-click="open()"><h4 class="panel-title"> <a href="#">{{title}}</a> </h4></div><div class="ui-accordion-content" ng-transclude ng-show="isOpened">{{title}}</div>');

});
