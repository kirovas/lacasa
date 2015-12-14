$(window).bind('resize', function(e)
{
  if (window.RT) clearTimeout(window.RT);
  window.RT = setTimeout(function()
  {
    this.location.reload(false); /* false to get page from cache */
  }, 100);
});

$(function() {
	$('ul.hover_block li').hover(function(){
		$(this).find('img').animate({top:'182px'},{queue:false,duration:500});
	}, function(){
		$(this).find('img').animate({top:'0px'},{queue:false,duration:500});
	});
});


$(document).ready(function() {
	$('.box-container-img').hover(function(){
		var distance = $(this).outerHeight();
		$(this).find('.box-image').animate({ top : distance },{queue:false,duration:400});
	}, function(){
		$(this).find('.box-image').animate({ top : '0px' },{queue:false,duration:400});
	}); 

});

// test modernizr
$(document).ready(function() {
	if (!Modernizr.multiplebgs) {	 
	 $.colorbox({
		 href:"actualiza.html", 
		 width:"930px",
		 height:"650px"
	  });
	} 
});

// Masonry

$(function(){

  var 
	speed = 600,   // animation speed
	$wall = $('#images').find('.wrap')
  ;

  $wall.masonry({
	//columnWidth: 100, 
	// only apply masonry layout to visible elements
	itemSelector: '.work-box:not(.invis)',
	animate: true,
	animationOptions: {
	  duration: speed,
	  queue: false
	}
  });

  $('#filtering-nav a').click(function(){        

	if(!$(this).hasClass('on')) {
		$('#filtering-nav a').removeClass('on');
		$(this).addClass('on');
	}
	
	var colorClass = '.' + $(this).attr('class').split(" ")[0];

	if(colorClass == '.all') {
	  // show all hidden boxes
	  $wall.children('.invis')
		.toggleClass('invis').fadeIn(speed);
	} else {  
	  // hide visible boxes 
	  $wall.children().not(colorClass).not('.invis')
		.toggleClass('invis').fadeOut(speed);
	  // show hidden boxes
	  $wall.children(colorClass+'.invis')
		.toggleClass('invis').fadeIn(speed);
	}
	$wall.masonry();				

	return false;
  });

});

// Cross slide

jQuery(function($) {
 $('#crossslide').crossSlide({
  fade: 1
 }, [
	{
    src:  'images/ipad-preview-1.jpg', 
    from: 'top left 0.7x',
    to:   'bottom right 1x',
    time: 2
   }, {
    src:  'images/ipad-preview-2.jpg',
    from: 'bottom left 0.5x',
    to:   'top right',
    time: 2
   }, {
    src:  'images/acerca-de-mi-background.jpg',
    from: '100% 80% 0.7x',
    to:   '80% 0% 1x',
    time: 2
   }, {
    src:  'images/ipad-preview-3.jpg',
    from: '15% 90% 0.8x',
    to:   '15% 0% 0.4x',
    time: 2
   }, {
   src:  'images/ipad-preview-4.jpg',
   from: 'bottom left 0.4x',
   to:   'top right 0.8x',
   time: 2
  }
 ]);
});

// Colorbox

$(document).ready(function(){
	$("a[data-images-group]").colorbox();
});

// onePageMenu

$(document).ready(function() {	
	//antispam
	$("#key").val("staples");

	$('nav ul').onePageMenu({
		findSameAnchors: true,
		thresholdInViewport: 300,
		selectorAnimationDuration: 1000,
		selectorAnimationEasing: 'easeOutQuart',
		scrollToDefaults: {
			duration: 1000,
			easing: 'easeOutQuart'
		},
		afterActive: function() {
			$('#nav-logo').removeClass().addClass($(this).attr('id').replace('nav-', 'logo-'));
			$('#nav-slogan').removeClass().addClass($(this).attr('id').replace('nav-', 'slog-'));
		}
  	});
});

$(document).ready(function() {   
    $(".fade").fadeOut(1000);      
});

$('.works-in-detail').click(function(){     
    $(".fade").fadeIn(1000);      
});

$(document).ready(function() {   
	// this is the id of the form
$("#myform").submit(function(e) {

    var url = "mail.php"; // the script where you handle the form input.

    $.ajax({
           type: "POST",
           url: url,
           data: $("#main_form").serialize(), // serializes the form's elements.
           error: function(data) {
				$("#loading").fadeOut();
				$("#contactButtom").attr('disabled', false);
				$("#contactKo").html("Error fatal").fadeIn().delay(5000).fadeOut();
			},
		   success: function(data)
           {
              $("#contactOk").html('<h4>Спасибо! Ваш запрос отправлен!</h4>'); //hide form if we got a true to return
			  $("#contactOk").show();
setTimeout(function() { $("#contactOk").hide(); }, 5000);
            }
           
         });

    e.preventDefault(); // avoid to execute the actual submit of the form.
});
	
	$("#contactOk").bind("click", function() {
		var $contactOk = $(this);		
		$contactOk.fadeOut();
	});
});