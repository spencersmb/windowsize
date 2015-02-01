jQuery(document).ready(function($){

	//define sizes
	var desktopLarge = 1200,
		resizedWidth;

	moveNavigation();

	//smooth function execution for cross browser compatibility
	// onresize call function

	$(window).on('resize', function(){
		(!window.requestAnimationFrame) ? setTimeout(moveNavigation, 300) : window.requestAnimationFrame(moveNavigation);
	});

	function checkwindowWidth(){

		var windowWidth = $(window).width();

		// onresize add the new width to our variable
		$(window).resize(function() {
			resizedWidth = $(window).width();

			console.log(resizedWidth);
		});

		//
		//return true or false and to determine if we move navigation below
		if( resizedWidth >= desktopLarge || windowWidth >= desktopLarge ){
			return true;
		} else {
			return false;
		}
	};

	
	function moveNavigation(){

		//desktop returns true or false if its less or larger than our original variable.
		var desktop = checkwindowWidth();
		var navigationDesktop = $('.cd-nav');
		var navigationMobile = $('.cd-nav');


		if ( desktop ) {
        	console.log('desktop');
        	//
        	// detach current navigation
			// navigationMobile.detach();
			// add in new navigation and insert before the specified Div
			// navigationDesktop.insertBefore('.cd-header-buttons');
		} else {
			console.log('mobile');
			//
			// will need to play with where to insertbefore or after 
			// navigationDesktop.detach();
			// navigationMobile.insertAfter('.cd-main-content');
		}
	}
	
});