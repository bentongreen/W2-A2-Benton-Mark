var selectTags = function(event){

	$('[data-show-tag]').click(function(event){
		event.preventDefault();

		var tag = $(event.currentTarget).data('show-tag');


		if(tag == 'all'){
			$('[data-tags]').stop(true).fadeTo( "fast", 1.0 );;
			return;
		}

		//Hide all tagged content
		$('[data-tags]').stop(true).fadeTo( "fast", 0.2 );


		//Show all tagged content that contains specified tag
		$('[data-tags*="' + tag + '"]').stop(true).fadeTo( "fast", 1.0 );

	});
};

	$('[data-show-tag]').click(selectTags);

//Slick Carousel by Ken Wheeler http://kenwheeler.github.io/slick/
$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    responsive: true,
    swipe: true,
    dotsClass: true,
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "ease",
    easing: "linear",
    pauseOnHover: true,
    touchMove: true
  });
});
				