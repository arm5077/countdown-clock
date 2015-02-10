app = angular.module('countdownApp', []);

moment.tz.add('America/New_York|EST EDT|50 40|0101|1Lz50 1zb0 Op0');

app.controller("countdownController", ["$scope", "$sce", function($scope, $sce){
	
	$scope.countdown = {};
	$scope.countdown.title = "Time until <strong>Andrew McGill's birthday</strong>";
	$scope.countdown.datetime = moment("May 2, 2015").tz('America/New_York').toDate();
	
	$scope.makeURL = function(title, datetime){
			return $sce.trustAsResourceUrl(location.href.replace("/make/index.html","") + "/index.html?date=" + datetime + "&title=" + title + "&initialWidth=200&childId=countdown");
	};
	
	$scope.makeEmbed = function(title, datetime){
 		url_base = location.href.replace("/make/index.html","");
		return "<script src='" + encodeURI(url_base + "/pym.js") + "'></script><p id='countdown' class = '" + url_base + "/index.html?date=" + datetime + "&title=" + encodeURI(title.replace(/"/g, "&quot;").replace(/'/g, "&apos;")) + "&initialWidth=200&childId=countdown" + "' style='float: right; margin: 10px 0px 10px 5px;'></p><script src='" + url_base + "/embed.js'></script>";
	}
	
	
}]);