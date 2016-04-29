angular.module('miAuto')

.controller("homeController", function() {


})

.directive('data', function(){
    
        return {
    restrict : 'E',
    templateUrl: '/templates/dataSection.html'
    }

})

.directive('picRight', function(){
    
        return {
    scope: {
   		title: '@',
    	picture: '@'
    },
    restrict : 'E',
    templateUrl: '/templates/picRightSection.html',
    transclude: true
    }

})

.directive('picLeft', function(){
    
        return {
    scope: {
   		title: '@',
    	picture: '@'
    },
    restrict : 'E',
    templateUrl: '/templates/picLeftSection.html',
    transclude: true
    }

});
