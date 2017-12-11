
var libros = [


];

var content="books";

$(document).ready (function () {

    $(".bar-percent").animate({ width:"90%" }, 1500);


    $(".logo-main").click (function() {
	var cadenas = ["Because it's raining", "Because it's lorem ipsum", "LOL WTF MMMMMM" ];
	$(".logo-main span").text ( cadenas[ Math.floor(Math.random() * cadenas.length) ] );
	
    });

    $(".menu_in").click (function() {
	$(this).animate({
	    width:0 ,
	    height: 0,
	}, 500, "linear", function() {

	});

	    $(".menu_blanco").delay(200).animate({
		width: 230,
		height: 230
	    }, 1000, "easeOutBounce");
    });

    $(".menu_blanco").click (function() {

	$(".menu_in").delay(200).animate({
	    width:  "17%",
	    height: 114.125,
	}, 1000, "easeOutBounce", function() {
	    
	});

	    $(this).animate({
		width: 0,
		height: 0
	    }, 500, "linear");
    });

    changeCategory("content");

}); 


function changeCategory(category) {

    var item = $(".menu_blanco img");
    if (category ==  'content' ) {
	item.attr("src", "img/READ-R.png");
    } 

}


function handleImageLoad(event) {
    stage.update();
}



// Eventos SLDIER =====================================


$(".Slider1").click(function(){
    $(".PopupSlider1").fadeIn();

    var img = $(this).attr("img");
    var text = $(this).attr("text");
    var path_book =  $(this).attr("book");
    $(".popupLibro .libro").attr("src", "img/popup/"+img+"").load( function() {
    $(".popupData").fadeIn()
    
    });
    $(".popupData").hide();
    $(".popupData p").text(text);


    $("#buttonGo").unbind("click");
    
    $("#buttonGo").click(function () {
	    window.location.href = "libros/"+path_book+"/index.html";
    });

    

    
 });



$(".PopupSlider1").click(function(){
    $(".PopupSlider1").fadeOut();
 });


$(".PruebaLibro").click(function(){
    $(".PopupLibroTexto").fadeIn();
 });


$(".PopupLibroTexto").click(function(){
    $(".PopupLibroTexto").fadeOut();
 });



// Eventos Menu Home =====================================


// next event
$(".itemsMenu1").click(function(){

    $(".items").removeClass("itemsCurrent");
    $(".itemsMenu1").addClass("itemsCurrent");
    $(".BloqueLibros_2").hide();
    $(".BloqueLibros_3").hide();
    $(".BloqueLibros_1").fadeIn();
         
 });

$(".itemsMenu2").click(function(){

    $(".items").removeClass("itemsCurrent");
    $(".itemsMenu2").addClass("itemsCurrent");

     $(".BloqueLibros_1").hide();
    $(".BloqueLibros_3").hide();
    $(".BloqueLibros_2").fadeIn();
         
 });

$(".itemsMenu3").click(function(){

    $(".items").removeClass("itemsCurrent");
    $(".itemsMenu3").addClass("itemsCurrent");

     $(".BloqueLibros_1").hide();
    $(".BloqueLibros_2").hide();
    $(".BloqueLibros_3").fadeIn();
         
 });


// Eventos para el PLUS =====================================

$(".open-plus").click(function(){ 
  $(".bar-window-ON").fadeIn();
});


$(".close-plus").click(function(){ 
  $(".bar-window-ON").fadeOut();
});







