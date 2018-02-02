angular.module('listaTelefonica').factory('timestampInterceptor', function() {
	return {
		request: function(config) {
			if (config.method == 'GET' && config.url.indexOf('/api/') > -1) {
				var timestamp1 = new Date();
				var concat = '';

				if (config.url.indexOf('?') == -1) { 
					concat = '?';
				} else {
					concat = '&';
				}

				config.url += concat +'anticache=' + timestamp1.getTime();
			}

			return config;
		}
	};
});