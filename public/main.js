var selectTags = function(event){
	
	$('[data-show-tag]').click(function(event){
		event.preventDefault();

		var tag = $(event.currentTarget).data('show-tag');
	
		if(tag == 'all'){
			$('[data-tags]').fadeTo( "slow", 1.0 );;
			return;
		}

		//Hide all tagged content
		$('[data-tags]').fadeTo( "slow", 0.2 );
		//Show all tagged content that contains specified tag
		$('[data-tags*="' + tag + '"]').fadeTo( "slow", 1.0 );

	});
};

	$('[data-show-tag]').click(selectTags);

