$(document).ready(function() {
	console.log("Скрипты подъехали")
	
	// Выпадающие меню
	$(function () {
		const dropdown = $('.faq__dropdown');
		const faq = $('.faq__item');
		const text = $(dropdown).find('p');
		

		faq.click(function() {
			const nextText = $(this).next(dropdown).find('p');
			const currentTriangle = $(this).find('.triangle')
			const triangle = faq.find('.triangle');

			if (currentTriangle.hasClass('rotate')) {
				currentTriangle.removeClass('rotate');
			} else currentTriangle.addClass('rotate');

			nextText.slideToggle('fast');
			

			text.not(nextText).slideUp("fast");
			triangle.not(currentTriangle).removeClass('rotate');

			
		});
	})

	// slider-mobile
	$(function () {
		$('.slider__mobile--first').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
	        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
	        var i = (currentSlide ? currentSlide : 0) + 1;
	        $(".slider__counter--first").text(i + '/' + slick.slideCount);
	    });

	    $('.slider__mobile--second').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
	        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
	        var i = (currentSlide ? currentSlide : 0) + 1;
	        $(".slider__counter--second").text(i + '/' + slick.slideCount);
	    });
		// slick
		$('.slider__mobile--first').slick({
			arrows: false,
		    dots: true,
		    dotsClass: "slider__counter",
		    adaptiveHeight: true,
		});

		$('.slider__mobile--second').slick({
			arrows: false,
		    dots: true,
		    dotsClass: "slider__counter",
		    adaptiveHeight: true,
		});	
	})

	// ScrollMagic
	$(function () {
		var tooSmall = false;
		
		var maxWidth = 769; // or whatever your max width is

		if( $(window).width() < maxWidth ) {
			tooSmall = false;
		}

		var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 800}});
		var controller2 = new ScrollMagic.Controller({globalSceneOptions: {duration:1300}});
		var controller3 = new ScrollMagic.Controller({globalSceneOptions: {duration:600}});
		var controller4 = new ScrollMagic.Controller({globalSceneOptions: {duration:600}});
		const btn = $('.b-how-it-work-slider__show-all');
		const card = $('.b-how-it-work-slider');
		const text = $('.b-how-it-work-slider__wrap');
		const wrapperBig = $('.fixed__content');
		const wrapperCard = $('.fixed-wr');


		function initScrollMagic() {
			$('body').scrollTop( 0 );

			// Смена карточек
			new ScrollMagic.Scene({triggerElement: "#trigger1"})
							.setClassToggle(".slider1", "b-how-it-work-slider--current")
							
							.on('enter', function(e) {
								$(".slider2").addClass( "b-how-it-work-slider--next")
							})
							.on('leave', function(e) {
								$(".slider2").removeClass( "b-how-it-work-slider--next")
							})

							.on('update leave', function(e) {
								
								if (e.target.controller().info("scrollDirection") === 'REVERSE' && e.type === 'leave') {
									$(".slider2").addClass( "b-how-it-work-slider--next")
								}
							})

							.on('start', function(e) {
								$(".slider1").addClass( "b-how-it-work-slider--current")
							})

							
							
							.addTo(controller);


			new ScrollMagic.Scene({triggerElement: "#trigger2"})
							.setClassToggle(".slider2", "b-how-it-work-slider--current")
							.on('enter', function(e) {
								$(".slider1").addClass( "b-how-it-work-slider--prev")
								$(".slider3").addClass( "b-how-it-work-slider--next")
							})
							.on('leave', function(e) {
								$(".slider1").removeClass( "b-how-it-work-slider--prev")
								$(".slider3").removeClass( "b-how-it-work-slider--next")
							})
							
							.addTo(controller);


			new ScrollMagic.Scene({triggerElement: "#trigger3"})
							.setClassToggle(".slider3", "b-how-it-work-slider--current")
							.on('enter', function(e) {
								$(".slider2").addClass( "b-how-it-work-slider--prev")
								$(".slider4").addClass( "b-how-it-work-slider--next")
							})
							.on('leave', function(e) {
								$(".slider2").removeClass( "b-how-it-work-slider--prev")
								$(".slider4").removeClass( "b-how-it-work-slider--next")
							})
							
							.addTo(controller);


			new ScrollMagic.Scene({triggerElement: "#trigger4"})
							.setClassToggle(".slider4", "b-how-it-work-slider--current")
							.on('enter', function(e) {
								$(".slider3").addClass( "b-how-it-work-slider--prev")
							})
							.on('leave', function(e) {
								$(".slider3").removeClass( "b-how-it-work-slider--prev")
								// $(".slider4").addClass( "b-how-it-work-slider--current")
							})
							
							.addTo(controller);
		 
		   
			// добавление position: fixed;
			
			 new ScrollMagic.Scene({triggerElement: "#trigger-fixed"})
							.setClassToggle(".fixed-wr", "fixed")
							
							.addTo(controller2); 


			// добавление position: absolute в конце страницы
			

			 new ScrollMagic.Scene({triggerElement: "#trigger-absolute"})
							.setClassToggle(".fixed-wr", "absolute")

							
							.addTo(controller3); 

			// Добавление класса current для последней карточки				
			

			 new ScrollMagic.Scene({triggerElement: "#trigger-absolute"})
							.setClassToggle(".slider4", "b-how-it-work-slider--current")
							.on('enter', function(e) {
								$(".slider3").addClass( "b-how-it-work-slider--prev")
							})
							.on('leave', function(e) {
								$(".slider4").addClass( "b-how-it-work-slider--current")
								// $(".slider4").addClass( "b-how-it-work-slider--current")
							})
							
							.addTo(controller4); 

			

			btn.click(function() {
				wrapperBig.toggleClass('initial');
				card.toggleClass('block');
				text.toggleClass('block');
				wrapperCard.toggleClass('block')

				// controller = null;
				// controller2 = null;
				// controller3	 = null;
				// controller4 = null;
				// scene = null;

				
					

				controller.update(true);

				if (card.hasClass('block')) {
					btn.html('Свернуть');
					// controller.destroy( true );
					// controller2.destroy( true );
					// controller3.destroy( true );
					// controller4.destroy( true );
				} else {
					btn.html('Показать все сразу');
					// initScrollMagic()
				}


				

				
			});				
				}

				

		if( !tooSmall ) {
			initScrollMagic() 
		}
	})

	// slider btns
	$(function () {
		const btn = $('.slider__btns .btn');

		btn.click(function() {
			if (!$(this).hasClass('active')) {
				$(this).addClass('active').siblings().removeClass('active');
			}
			
			if ($('.btn--ip').hasClass('active') && $(window).width() > 768) {
				$('.b-how-it-work-connect__slider--first').show();
				$('.b-how-it-work-connect__slider--second').hide();
			} else if ($(window).width() > 768) {
				$('.b-how-it-work-connect__slider--second').show();
				$('.b-how-it-work-connect__slider--first').hide();
			}

			if ($('.btn--ip').hasClass('active') && $(window).width() <= 768) {
				$('.slider__mobile-wr--first').show();
				$('.slider__mobile-wr--second').hide();
			} else if ($(window).width() <= 768) {
				$('.slider__mobile-wr--second').show();
				$('.slider__mobile-wr--second').removeClass('element-invisible');
				$('.slider__mobile-wr--first').hide();
			}
		});
	})
	
	// chat
	$(function() {

		var controller5 = new ScrollMagic.Controller({globalSceneOptions: {duration:700}});

		new ScrollMagic.Scene({triggerElement: ".chat"})
			
			.on('enter', function(e) {
				$('.chat__item--one').delay(3000).fadeIn('slow');
				$('.chat__item--two').delay(6000).fadeIn('slow');
				$('.chat__item--three').delay(9000).fadeIn('slow');
				$('.loader').delay(8800).fadeOut('fast');
			})
			
			
			.addTo(controller5);	
	})	

	// mask
	$(function () {
		 $('.phone').mask('+7(000) 000-00-000', {placeholder: "+7(xxx) xxx xx xx"});
	})	

	// pop-ups
	$(function () {
		//Оставить заявку
		$('.primary__button--bid').click(function(event) {
			$('.popup--request').fadeIn("slow");
		});

		$('.howcost__button').click(function(e) {
			e.preventDefault();

			let first = $(this).siblings('.howcost__square').find('span').first().text();
			let second = $(this).siblings('.howcost__square').find('span').eq(1).text();
			let value = first + '\t' + second;
				console.log(value)
			$('.form__input--hidden').val(value);
			$('.popup--request').fadeIn("slow");


			
		}); 

		$('.popup__form .form__btn').click(function(event) {
			if (!$('.popup .popup__wrapper input[type=checkbox]').is(':checked')) {
				$('#form__checkbox1').parent('.form__checkbox-wr').css('border', '1px solid red ');
			} else {
				$('#form__checkbox1').parent('.form__checkbox-wr').css('border', '1px solid transparent ');
			}
		});
 

		// Города	
		  $('.destination , .destination-mobile').click(function(event) {
			$('.popup--city').fadeIn("slow");
			$('.body').addClass('overflow-hidden');
		 }); 

		 $('.close').click(function(event) {
		 	$('.popup').fadeOut("slow");
		 	$('.body').removeClass('overflow-hidden');
		 });

		 $('.city__item').click(function() {
		 	 $('.destination').text($(this).text());
		 	 $('.city__input').val($(this).text());
		 	 $('.popup').fadeOut("slow");
		 	 $('.body').removeClass('overflow-hidden');
		 });

		$(document).on('click', function(e) {
		    if (!$(e.target).closest(".popup__content--request").length && !$(e.target).closest(".primary__button--bid").length && !$(e.target).closest(".howcost__button").length) {
		        $('.popup--request').fadeOut("slow");
		        
		    }
		  e.stopPropagation();
		});
	})	
	
	// scroll
	$(function () {
		var scroll = function (event) {

	        //забираем идентификатор бока с атрибута href
	        var id  = event.attr('href'),
	 
	        //узнаем высоту от начала страницы до блока на который ссылается якорь
	            top = $(id).offset().top;
	        //анимируем переход на расстояние - top за 1500 мс
	        $('body,html').animate({scrollTop: top}, 1500);
		}

		$('.primary__button--anchor').click(function(event) {
		    scroll($(this));
		});

		$('.footer__link a').click(function(event) {
		    scroll($(this));
		});
	})	
	 
	// position
	$(function () {
		$.get("//geoip.nekudo.com/api/ru", function(response) {
		  	console.log(response);

		  	$('.destination').text(response.city);
		}, "jsonp")
	})
});