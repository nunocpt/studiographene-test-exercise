/* ################ LOADER ################ */
$(window).on('load', function() {
	var  $cssLoader = $('.css-loader');
	$cssLoader.fadeOut();  
	$cssLoader.delay(350).fadeOut('slow');   
	$cssLoader.delay(350).css({'zIndex':'-1000'});
	
});




/* ################ HEADER ################ */
/* hamburguer */
$(document).ready(function(){
	$('.icon').click(function(){
		$('.icon').toggleClass('active');
		$('.hamburguer-pages').fadeToggle();
	})
});

$(document).ready(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop() > 0){
			$('.header-container').css({'background-color':'white'});
			$('.header-container').css({'box-shadow':'0px 0px 40px 0px rgba(255,218,201,1)'});
		}else{
			$('.header-container').css({'background-color':'transparent'});
			$('.header-container').css({'box-shadow':'0px 0px 0px 0px rgba(255,218,201,1)'});
		}
	});
});



/* scroll to div when clicking header link or left navbar*/
$('#header-pages > li > a, #header-login > li > a').click(function(event){

    event.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(target).offset().top-90
    }, 1500);

});

$('#menu > li').click(function(event){
    event.preventDefault();
    var target2 = $(this).attr('class');
    $('html, body').animate({
        scrollTop: $(target2).offset().top-90
    }, 1500);

});







/* ################ SECTION 2 ################ */
(function($) {

  $.fn.visible = function(partial) {

    var $t = $(this),
      $w = $(window),
      viewTop = $w.scrollTop(),
      viewBottom = viewTop + $w.height(),
      _top = $t.offset().top,
      _bottom = _top + $t.height(),
      compareTop = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };

})(jQuery);

var win = $(window);
var allMods = $(".section2-col-big-right");

allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible");
  }
});

win.scroll(function(event) {
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in");
    }
  });
});






/* ################ SECTION 4 ################ */
$(document).ready(function(){
	var section4_height = $('#section4').height();
	$('.grids').css({'height':section4_height});
});
window.onresize = function(event) {
    var section4_height = $('#section4').height();
	$('.grids').css({'height':section4_height});
};



var section4_top = $('#section4').offset().top+200;
var section4_end = $('#section4').offset().top+500;
$(window).scroll(function(){
  var height = $(window).scrollTop();
  if(height >= (section4_top - 1000) && (height < section4_end)){
    $("#our-menu-col-1, #our-menu-col-2, #our-menu-col-3, #our-menu-col-4").css({'transform':'translateY(0%)'});
  }else{
  	$("#our-menu-col-1, #our-menu-col-3").css({'transform':'translateY(70%)'});
  	$("#our-menu-col-2, #our-menu-col-4").css({'transform':'translateY(-70%)'});
  }
});





/* ################ SECTION 5 ################ */

var margin_size = '700px';
var cut_char = margin_size.length;

var current_margin = $('.popular-slider').css('margin-left');
var next_margin;

$('#arrow-left').click(function(){
	
	if(current_margin != '0px'){
		next_margin = current_margin.substring(0, current_margin.length-8);

		$('.popular-slider').css("margin-left","calc("+next_margin+")");
		current_margin = next_margin;
	}else{
		$('#arrow-left').css("color","gray");
		$('#arrow-right').css("color","black");
	}

});


$('#arrow-right').click(function(){

	$('#arrow-left').css("color","black");
	

	if(current_margin.length < 19){
		next_margin = current_margin + ' - 700px';

		$('.popular-slider').css("margin-left","calc("+next_margin+")");
		current_margin = next_margin;
	}else{
		$('#arrow-right').css("color","gray");
	}
});







var section5b_top = $('#section5').offset().top+700;

$(window).scroll(function(){
  var height = $(window).scrollTop();
  if(height >= (section5b_top - 1000)){
    $(".popular-slider").css({'opacity':'1'});
  }
});


/* ################ LEFT NAV-BAR ################ */
var section1_top = $('#section1').offset().top;
var section2_top = $('#section2').offset().top-440;
var section3_top = $('#section3').offset().top-300;
var section4b_top = $('#section4').offset().top-300;
var section5_top = $('#section5').offset().top-440;
var section6_top = $('#section6').offset().top-300;




/* Personal note: REMEMBER to do a "FOR" for the following section */
$(window).scroll(function(){

	var height = $(window).scrollTop();

	if((height >= (section1_top)) && (height < (section2_top))){
	$("#menu li:nth-child(1)").addClass('active');
	$("#menu li").not("#menu li:nth-child(1)").removeClass('active');
	};

	if((height >= (section2_top)) && (height < (section3_top))){
	$("#menu li:nth-child(2)").addClass('active');
	$("#menu li").not("#menu li:nth-child(2)").removeClass('active');
	};

	if((height >= (section3_top)) && (height < (section4b_top))){
	$("#menu li:nth-child(3)").addClass('active');
	$("#menu li").not("#menu li:nth-child(3)").removeClass('active');
	};

	if((height >= (section4b_top)) && (height < (section5_top))){
	$("#menu li:nth-child(4)").addClass('active');
	$("#menu li").not("#menu li:nth-child(4)").removeClass('active');
	};

	if((height >= (section5_top)) && (height < (section6_top))){
	$("#menu li:nth-child(5)").addClass('active');
	$("#menu li").not("#menu li:nth-child(5)").removeClass('active');
	};

	if(height >= (section6_top)){
	$("#menu li:nth-child(6)").addClass('active');
	$("#menu li").not("#menu li:nth-child(6)").removeClass('active');
	};
});

