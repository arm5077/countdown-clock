// Requires jQuery.

console.log("Embedded scripts running ...");

var pymParent = new pym.Parent('countdown', 'https://s3-us-west-2.amazonaws.com/nationaljournal/countdown/index.html?date=2015-06-01%2000:00:01&title=Time%20until%20core%20provisions%20of%20%3Cstrong%3EUSA%20PATRIOT%20Act%20%3C/strong%3Eexpire', {});

checkSize();

$(window).on("resize", function(){
	checkSize();
});

function checkSize(){
	if( $(window).width() <= 725 ){
		$("#countdown").css("width", "100%");
	}
	else {
		$("#countdown").css("width", "200px");
	}
}