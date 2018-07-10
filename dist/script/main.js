//Google maps
function initMap() {
        var location = {lat: 50.4334, lng: 30.5219};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: location
        });
        var marker = new google.maps.Marker({
          position: location,
          map: map
        });
      }
