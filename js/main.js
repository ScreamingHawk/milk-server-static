$('.animate-hellip').animateHellip();

function scrollToElement(eId){
    $('html,body').animate({scrollTop: $("#"+ eId).offset().top},'slow');
	$('#navmenu').click();
	return false;
}