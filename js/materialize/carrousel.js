$(document).ready(function(){


// CARROUSEL  ===================================

 

	$('.carousel').carousel({shift:20, padding:0,  dist:-30});


    $(".BloqueLibros_1").carousel({dist:0});

 

	// next event
	$(".btn_right").click(function(){
    	$('.carousel').carousel('next');
	    
	});

	// prev event
	$(".btn_left").click(function(){
		$('.carousel').carousel('prev');
	});




$( window ).resize(function() {
	console.log("resize");
	$('.carousel').carousel('destroy');
    $('.carousel').carousel();
});






});

 
