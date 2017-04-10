/**
 * Created by lin on 2017/3/28.
 */
var carousels=document.querySelectorAll(".carousel");
var carouselIndex=carousels.length-1;
var carouselBox=document.querySelector(".carousel-container");
function onclick() {
	for(var i=0;i<carouselIndex;i++){
		carousels[i].addEventListener("onclick",function () {
			var subLeft=carouselBox.clientLeft+carousels[i].clientWidth;
			carouselBox.style.width=subLeft+"px";
		});
	}
}
onclick();
