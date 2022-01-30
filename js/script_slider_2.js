$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
		slidesToScroll:3,
		autoplay:false,
		speed:1000,
		pauseOnfocus:true,
		touchThreshold:10,
		touchMove:true,
		centerMode:true,
		responsive:[
			{
				breakpoint: 700,
				settings: {
					slidesToShow:1
				}
			},
			{

			}
		]
	});
});

