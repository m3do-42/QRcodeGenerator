$(document).ready(function(){

	var qr_content = document.querySelector("#qr_content");

	function generator(){
		$( "#qr_code" ).empty();
		var qr_code = document.querySelector('#qr_code');
		new QRCode(qr_code, qr_content.value);
		qr_content.value="";
	}

	$( "#bouton" ).on( "click", function() {
		generator();
	});

});