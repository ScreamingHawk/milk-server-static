var gUser;

function gSignInSuccess(googleUser) {
	gUser = googleUser.getBasicProfile();
	console.log('ID: ' + gUser.getId());
	console.log('Name: ' + gUser.getName());
	console.log('Image URL: ' + gUser.getImageUrl());
	console.log('Email: ' + gUser.getEmail());
	$('#uName').text(gUser.getName());
	$('#uDP').attr("src", gUser.getImageUrl()); 
	$('#g-signin2').addClass('hidden');
	$('#signInArea').removeClass('hidden');
}

function signOut() {
	var auth2 = gapi.auth2.getAuthInstance();
	auth2.signOut().then(function () {
		$('#g-signin2').removeClass('hidden');
		$('#signInArea').addClass('hidden');
		gUser = null;
		console.log('User signed out');
	});
}