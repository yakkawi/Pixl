/* =Footer
============================================================================== */

	/* Full-Screen Header
	-------------------------------------------------------------------------- */

//		function fullscreenHeader(){
			
//			if ($(window).height() < 770) {
//				$('#fullScreen').css({ height: '770px' });
//			} else {
//				$('#fullScreen').css({ height: ($(window).height()) +'px' });
//			}

//		}	


/* =Document Ready
============================================================================== */

$(document).ready(function(){

	/* Full-Screen Header - Apply on page load and on resize
	-------------------------------------------------------------------------- */
		
		// page load
		// fullscreenHeader();
		
		// window resize
		// $(window).resize(function(){
		// 	fullscreenHeader();
		// });
		
	/* Match Height
	-------------------------------------------------------------------------- */
		
		var companyBlocks = $('#companies article .blocks');
		
		if ((companyBlocks.length) && ($(window).width() > 767)) {
		    companyBlocks.matchHeight();
		}
		
	/* Work
	-------------------------------------------------------------------------- */
		
		// project is in view
		
		var project = $('#fade #content article');
		
		project.addClass('outOfView');
		
		function projectInView() {
			var windowTop = $(window).scrollTop();
			var	windowBtm = windowTop + $(window).height();
		    project.each(function(){
		        projectTop = $(this).offset().top + $(this).height() / 4;
		        projectBtm = $(this).offset().top + $(this).height() / 1.1;
		        projectTop <= windowBtm && projectBtm >= windowTop ? $(this).removeClass('outOfView').addClass('inView') : $(this).removeClass('inView').addClass('outOfView')
		    });
		}
		
		$(window).scroll(function(){ projectInView(); });
		$(window).resize(function(){ projectInView(); });
		
	/* Contact
	-------------------------------------------------------------------------- */
		
		// validate + submit
		
		var contact = $('#contactForm');
		
		if (contact.length) {
			
			contact.validate({
				submitHandler: function(form) {
				    $(form).ajaxSubmit({
    			    	success: function() {
    						$('#success').fadeIn(300).delay(5000).fadeOut(300); 
    					}
    			    });
				}
			});

		}

}); // end document ready