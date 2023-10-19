(function($) {
    'use strict';	
			

			/*==== Mobile Menu  ====*/
			$('.mobile-menu nav').meanmenu({
				meanScreenWidth: "990",
				meanMenuContainer: ".mobile-menu",
				onePage: true,
			});
			
			/*==== Top quearys menu  ====*/
			var emsmenu = $(".em-quearys-menu i.t-quearys");
			var emscmenu = $(".em-quearys-menu i.t-close");
			var emsinner = $(".em-quearys-inner");
			emsmenu.on('click', function() {
				emsinner.addClass('em-s-open');
				$(this).addClass('em-s-hiddens');
				emscmenu.removeClass('em-s-hidden');
			});
			emscmenu.on('click', function() {
				emsinner.removeClass('em-s-open');
				$(this).addClass('em-s-hidden');
				emsmenu.removeClass('em-s-hidden');
			});

			/*==== popup mobile menu  ====*/
			
			  var mrightma = $(".mobile_menu_o i.openclass");
			var mrightmi = $(".mobile_menu_o i.closeclass");
			var mrightmir = $(".mobile_menu_inner");
			var mobile_ov = $(".mobile_overlay");
			mrightma.on('click', function() {
				mrightmir.addClass('tx-s-open');
				mobile_ov.addClass('mactive');
			});
			mrightmi.on('click', function() {
				mrightmir.removeClass('tx-s-open');
				mobile_ov.removeClass('mactive');
			});	

			// slick slider
			$('.heroSlider').slick({
				dots: false,
				autoplay: true,
				infinite: true,
				button: true,				
				speed: 300,
				slidesToShow: 3,
				slidesToScroll: 1,
				responsive: [
				  {
					breakpoint: 1024,
					settings: {
					  slidesToShow: 3,
					  slidesToScroll: 3,
					  infinite: true,
					  dots: true
					}
				  },
				  {
					breakpoint: 600,
					settings: {
					  slidesToShow: 2,
					  slidesToScroll: 2
					}
				  },
				  {
					breakpoint: 480,
					settings: {
					  slidesToShow: 1,
					  slidesToScroll: 1
					}
				  }
				  // You can unslick at a given breakpoint now by adding:
				  // settings: "unslick"
				  // instead of a settings object
				]
			  });
			  $('.doctor-slider').slick({
				dots: false,
				autoplay: true,
				infinite: true,
				button: true,				
				speed: 300,
				slidesToShow: 1,
				slidesToScroll: 1,
				responsive: [
				  {
					breakpoint: 1024,
					settings: {
					  slidesToShow: 3,
					  slidesToScroll: 3,
					  infinite: true,
					  dots: true
					}
				  },
				  {
					breakpoint: 600,
					settings: {
					  slidesToShow: 2,
					  slidesToScroll: 2
					}
				  },
				  {
					breakpoint: 480,
					settings: {
					  slidesToShow: 1,
					  slidesToScroll: 1
					}
				  }
				  // You can unslick at a given breakpoint now by adding:
				  // settings: "unslick"
				  // instead of a settings object
				]
			  });
			
			/*==== counter active ====*/ 
				
			

})(jQuery);




