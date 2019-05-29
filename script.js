

function slider(quantityOfElementsInRow1,quantityOfElementsInRow2){
	document.getElementById("slider-mask").style.display="block";
	document.getElementById("slider-greyArticle-mask").style.display="block";

	var sliderMaskWidth=document.getElementById("slider-mask").getBoundingClientRect().width;
	var greySliderMaskWidth=document.getElementById("slider-greyArticle-mask").getBoundingClientRect().width;
	var slideWidth=sliderMaskWidth/quantityOfElementsInRow1-15;
	var greyslideWidth=greySliderMaskWidth/quantityOfElementsInRow2;
	var slides=document.getElementById("slide").getElementsByTagName("li");
	var greySlides=document.getElementsByClassName("greySlide");
	for(let i=0; i<slides.length; i++){
		slides[i].style.width= slideWidth+"px";	
	}
	for(let j=0; j<greySlides.length; j++){
		greySlides[j].style.width= greyslideWidth+"px";	
	}
	// console.log(quantityOfElementsInRow);
}

function sliderRensponsivity(windowWidth){

	if(windowWidth<1025 && windowWidth>=700){
	    slider(2,2);	
	}else if(windowWidth<700 && windowWidth>600){
		slider(1,2);	
	}else if(windowWidth<600){
		slider(1,1);	
	}else{
		slider(3,3);
	}
}
window.onload = function() {
	sliderRensponsivity(window.innerWidth); 

};
window.onresize = function() {
	sliderRensponsivity(window.innerWidth); 
};
	
	var position=0;
	var positionGreySlider=0;
function sliding(clicked_id){
	var whichSlider;
	if(clicked_id=="next" || clicked_id=="prev"){
		var sliderMaskW=document.getElementById("slider-mask").getBoundingClientRect().width;
		var sliderWidth=document.getElementById("slide").getBoundingClientRect().width;
		if(clicked_id=="next"){
			if(position>=sliderMaskW-sliderWidth+15){
					   position-=sliderMaskW;
					   document.getElementById("slide").style.left=position+"px";
				}
			}else{
				if(position<=-sliderMaskW){
			position+=sliderMaskW;
			document.getElementById("slide").style.left=position+"px";
				}
			}
   		witchSlider=1;
		slideControlsColorChange(position,sliderMaskW,sliderWidth,witchSlider);
	} else
	if(clicked_id=="greyArticle-next" || clicked_id=="greyArticle-prev"){
		var sliderGrayArticleMaskWidth=document.getElementById("slider-greyArticle-mask").getBoundingClientRect().width;
		var sliderGrayArticleWidth=document.getElementById("greyArticle_slide").getBoundingClientRect().width;
		if(clicked_id=="greyArticle-next"){
			if(positionGreySlider>=sliderGrayArticleMaskWidth-sliderGrayArticleWidth+15){
					   positionGreySlider-=sliderGrayArticleMaskWidth;
					   document.getElementById("greyArticle_slide").style.left=positionGreySlider+"px";
				}
			}else{
				if(positionGreySlider<=-sliderGrayArticleMaskWidth){
			positionGreySlider+=sliderGrayArticleMaskWidth;
			document.getElementById("greyArticle_slide").style.left=positionGreySlider+"px";
				}
			}
   		witchSlider=2;
		slideControlsColorChange(positionGreySlider,sliderGrayArticleMaskWidth,sliderGrayArticleWidth,witchSlider);
	}
}

	function slideControlsColorChange(position,sliderMaskW,sliderWidth,witchSlider){
		switch(witchSlider){
			case 1:
				if(position>=sliderMaskW-sliderWidth+15){
					document.getElementById("next").style.color="white";
				}else{
					document.getElementById("next").style.color="#5E5B5B";
				}
				if(position<=-sliderMaskW){
					document.getElementById("prev").style.color="white";
				}else{
					document.getElementById("prev").style.color="#5E5B5B";
				}
				break;
			case 2:
				if(position>=sliderMaskW-sliderWidth+15){
					document.getElementById("greyArticle-next").style.color="black";
				}else{
					document.getElementById("greyArticle-next").style.color="red";
				}
				if(position<=-sliderMaskW){
					document.getElementById("greyArticle-prev").style.color="black";
				}else{
					document.getElementById("greyArticle-prev").style.color="red";
				}
				break;
		}
	}
	function burgerMenuBlock(){
		document.getElementById("burger-submenu").style.display="block";
	}
	function closeBurgerMenu(){
		document.getElementById("burger-submenu").style.display="none";
	}