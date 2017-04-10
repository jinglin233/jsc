/**
 * Created by lin on 2017/3/28.
 */


window.onscroll=function() {
    if(window.document.body.scrollTop<=500||window.document.body.scrollTop>=3000){
        document.getElementById("fix").style.display = "none"
    }
    else{
        document.getElementById("fix").style.display = "block"
    }
};


var carousels=document.querySelectorAll(".carousel");
var carouselIndex=carousels.length-1;
var carouselBox=document.querySelector(".carousel-container");
function onclick() {
	for(var i=0;i<carouselIndex;i++){
		carousels[i].addEventListener("onclick",function () {
			var cW=carouselBox.clientLeft+carousels[i].clientWidth;
		});
	}
}
onclick();

