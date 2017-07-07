angular.module('listaTelefonica').factory('timestampInterceptor', function() {
	return {
		request: function(config) {
			if (config.method == 'GET' && config.url.indexOf('/api/') > -1) {
				var timestamp1 = new Date();
				config.url += '?anticache=' + timestamp1.getTime();
			}

			return config;
		}
	};
});