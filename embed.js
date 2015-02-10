// Requires jQuery.

console.log("Embedded scripts running ...");

var pymParent = new pym.Parent('countdown', document.getElementById('countdown').className, {});

checkSize();

window.onresize= function(){
	checkSize();
};

function checkSize(){
	if( window.innerWidth <= 725 ){
		document.getElementById("countdown").style.width = "100%";
	}
	else {
		document.getElementById("countdown").style.width = "200px";
	}
}