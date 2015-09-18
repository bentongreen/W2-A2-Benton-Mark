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
		$('[data-tags*="' + tag + '"]').stop(true).fadeTo( "fast", 1.0 )

	});
};

$('[data-show-tag]').click(selectTags);

	//Validate information on form submission is not blank

  $('#contact-submit').on('click', function(event) {

	  event.preventDefault();

	  var $name = $('#form_companyname').val();
		var $email = $('#form_email').val()
		var $message = $('#contact-form').val();

	  if ($name === '') {
  		alert("Please enter a valid name");
  	} else if ($email === '') {
  		alert("Please enter a valid email");
  	} else if ($message === '') {
  		alert("Please enter a valid message");
  	} else {
  		alert("Thank you for contacting us!");
  	}
  });



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
				