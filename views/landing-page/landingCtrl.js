var app = angular.module('mainApp');

app.controller('landingPage',function($scope, $location){

  $(function() {
  	$(".arrow")
  	.find("span")
  	.hide()
  	.end()
  	.hover(function() {
  		$(this).find("span").stop(true, true).fadeIn();
  	}, function() {
  		$(this).find("span").stop(true, true).fadeOut();
  	});
  });
  
});
