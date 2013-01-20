(function($){
	//Définition var global
	var $slider = $('.slider');
	var delay = 5000;
	
	
	//Action du spider
	var switchImg = function(e){
		var $nextImg = $slider.filter(':visible').next();
		
		if($nextImg.size() == 0){
			$nextImg = $slider.first();
		}
		
		$slider.filter(':visible').fadeOut('fast', function(){
			$nextImg.fadeIn('fast');
		});
	};
	
	//Load de la page
	$(function (){
		$slider.not(':first').hide();
		
		setInterval(switchImg, delay);
	});

})(jQuery);