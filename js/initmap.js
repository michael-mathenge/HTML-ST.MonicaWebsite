function initMap() {
            var location = {
                lat: -1.506534,
                lng: 36.773575
            };
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 4,
                center: location
            });
            var marker = new google.maps.Marker({
                position: location,
                map: map
            });
        }