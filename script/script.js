new Vivus(
	'rick',
	{
	  type: 'delayed',
	  duration: 200,
	  start: 'autostart',
	},
  );




let opened = false;

$('.logo').hover(function() {
   if(opened == false) {
	$(".gg").addClass("gg__active");
	$(".ggStoke").addClass("ggStoke__active");
	   opened = true;
   } else{
	$(".gg").removeClass("gg__active");
	$(".ggStoke").removeClass("ggStoke__active");
	   opened = false
   }
});


var $btn = document.getElementById('show');
var $nav = document.getElementById('nav');

$btn.addEventListener('click', function() {
    $nav.classList.toggle('active');
	$(".nav__burger").addClass("nav__burger__active");
	$(".burger__color").toggleClass("burger__color__active");
	$(".ggStoke").toggleClass("ggStoke__active");


});

$(".main").click(function () { 
	$("#nav").removeClass("active");
	
	
});
