// Requires jQuery.

console.log("Embedded scripts running ...");

var pymParent = new pym.Parent('countdown', $('#countdown').attr("class"), {});

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