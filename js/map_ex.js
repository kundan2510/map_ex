var currlat;
var currlong;
function getLocation()
            {
                alert('Getting Location...');
                try
                {
                    intel.xdk.geolocation.getCurrentPosition(sucGetLoc,failGetLoc);
                }
                catch (err)
                {
                    alert(err.message);
                    alert(err.name);
                }
            
            }
            
            function sucGetLoc(p){
                currlat = p.coords.latitude;
                currlong = p.coords.longitude;
            }
            
            function failGetLoc(){
                alert("Unable to find your current location.");
            }
function initialize() {
    getLocation();
  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(currlat, currlong)
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}
 var marker = new google.maps.Marker({
    position: map.getCenter(),
    map: map,
    title: 'Click to zoom'
  });

  google.maps.event.addListener(map, 'center_changed', function() {
    // 3 seconds after the center of the map has changed, pan back to the
    // marker.
    window.setTimeout(function() {
      map.panTo(marker.getPosition());
    }, 3000);
  });

  google.maps.event.addListener(marker, 'click', function() {
    map.setZoom(8);
    map.setCenter(marker.getPosition());
  });
