function main() {
    $('form').submit(function(event) {
	    var $input = $(event.target).find('input');
	    var comment = $input.val();
	    alert(comment);
  	});

}

$(document).ready(main);

