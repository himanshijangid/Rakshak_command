var slide_Index = 1;

showSlide(slide_Index);


function plusSlides(n){

showSlide(slide_Index += n);

}


function currentSlide(n) {

showSlide(slide_Index = n);

}


function showSlide(n){

var i;

var slides = document.getElementsByClassName("myslides");

var dots = document.getElementsByClassName("dots");

if (n > slides.length) { slide_Index = 1};

if (n < 1) { slide_Index = slides.length};

for (i=0;i<slides.length;i++) {

slides[i].style.display = "none";

};

for (i=0;i<dots.length;i++) {

dots[i].className = dots[i].className.replace(" active","");

};

slides[slide_Index-1].style.display = "block";

dots[slide_Index-1].className += " active";

}
 console.log(" js is running ");
 