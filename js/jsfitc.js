$(document).ready(function(){
	
    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object
     
        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
             
            // Put together our final background position
            var coords = '50% '+ yPos + 'px';
 
            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        }); 
    });  
	
	$('#click').click(function(){
        // -55 offset because I have a fixed position header that is 55px in height
        var p = $('#home').position().top;
		$("html, body").animate({ scrollTop: p }, 600);
        return false;
    });
	
	$(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
            //show the link if the scroll is far away (200px) from the top
            $('#top').fadeIn();
        } else {
            $('#top').fadeOut();
        }
    });

	$('#top').click(function(){
        //scroll to position “0″ at a rate of 600
        $("html, body").animate({ scrollTop: 0 }, 600);
       return false;
    });
	
	$('#head').click(function() {
  $('#me').fadeToggle()
});

$('#learn1').click(function() {
  $('#learntoggle').fadeToggle()
  $('#hint').fadeOut()
});

$('#connect1').click(function() {
  $('#connecttoggle').fadeToggle()
});

$('#inspiration1').click(function() {
  $('#inspirationtoggle').fadeToggle()
});

$(function() {
    $( document ).tooltip();
  });
	  
}); 
