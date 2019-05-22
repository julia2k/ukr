

function slider(quantityOfElementsInRow){
	document.getElementById("slider-mask").style.display="block";
	var sliderMaskWidth=document.getElementById("slider-mask").getBoundingClientRect().width;
	var slideWidth=sliderMaskWidth/quantityOfElementsInRow-15;
	var slides=document.getElementById("slide").getElementsByTagName("li");
	for(let i=0; i<slides.length; i++){
		slides[i].style.width= slideWidth+"px";	
	}
}

function sliderRensponsivity(windowWidth){

	if(windowWidth<1025 && windowWidth>=700){
	    slider(2);	
	}else if(windowWidth<700){
		slider(1);	
	}else{
		slider(3);
	}
}
window.onload = function() {
	sliderRensponsivity(window.innerWidth); 

};
window.onresize = function() {
	sliderRensponsivity(window.innerWidth); 
};
	
	var position=0;
function sliding(clicked_id){
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
		slideControlsColorChange(position,sliderMaskW,sliderWidth);
	}

	function slideControlsColorChange(position,sliderMaskW,sliderWidth){
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

	}
	function burgerMenuBlock(){
		document.getElementById("burger-submenu").style.display="block";
	}
	function closeBurgerMenu(){
		document.getElementById("burger-submenu").style.display="none";
	}