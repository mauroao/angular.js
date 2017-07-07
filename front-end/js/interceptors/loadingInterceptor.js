angular.module('listaTelefonica').factory('loadingInterceptor', function($q, $rootScope, $timeout) {
	return {
		request: function(config) {
			$rootScope.loading = true;
			return config;
		},
		requestError: function(rejection) {
			$rootScope.loading = false;
			return $q.reject(rejection);
		},
		response: function(config) {
			// $timeout(function() {$rootScope.loading = false;}, 500);
			$rootScope.loading = false;
			return config;
		},
		responseError: function(rejection) {
			$rootScope.loading = false;
			return $q.reject(rejection);
		}
	};
});