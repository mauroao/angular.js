angular.module('listaTelefonica').directive('uiAlert', function() {
	return {
		templateUrl: 'js/view/alert.html',
		replace: true,
		scope: {
			topic: "@title",
			error: "=message"
		} 
	};
});