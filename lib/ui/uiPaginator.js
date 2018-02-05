angular.module('ui').component('uiPaginator', {
    templateUrl: 'lib/ui/uiPaginator.html',
    bindings: {
        currentPage: '<',
        linksCount: '<',
        lastPage: '<',
        onClickLink: '&' 
    },
    controller: function() {
        var $ctrl = this;
        $ctrl.links = [];

        $ctrl.$onChanges = function(changes) {
            var firstPage = 1;
            
            $ctrl.links = [];
            $ctrl.links.push($ctrl.currentPage);
    
            var left = $ctrl.currentPage;
            var right = $ctrl.currentPage;
    
            while($ctrl.links.length < $ctrl.linksCount) {
                if (right < $ctrl.lastPage) {
                    right++;
                    $ctrl.links.push(right);
                }
    
                if (left > firstPage) {
                    left--;
                    $ctrl.links.unshift(left);
                }
    
                if (right >= $ctrl.lastPage && left <= firstPage) {
                    break;
                }
            }            
        };
    }
});