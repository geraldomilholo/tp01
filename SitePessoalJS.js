function initialize() {
	var mapGoogle = document.getElementById('googlemaps');
    
    var mapOptions = {
		center: new google.maps.LatLng(-19.938411,-43.999692,17),
		zoom: 17,
		mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    
    var map = new google.maps.Map(mapGoogle, mapOptions)
    
    var cefet = new google.maps.LatLng(-19.938411, -43.999692,17);
		marcadorCefet = new google.maps.Marker({
    	position: praca,
   		map: map,
   		title:"CEFETMG"
		});

}
google.maps.event.addDomListener(window, 'load', initialize);


function date() {
       var e = document.getElementById("hr");
       if(e.style.display == 'block')
          e.style.display = 'none';
       else{
          e.style.display = 'block';
		document.getElementById("hr").innerHTML = Date();
		}
}

function on_off() {
    var image = document.getElementById('lamp');
	
    if (image.src.match("lampon")) {
        image.src = "Imagens/lampoff.png";
    } else {
        image.src = "Imagens/lampon.png";
    }
}
