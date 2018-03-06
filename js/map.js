var map;
        $(document).ready(function() {
            map = new GMaps({
                el: '#map',
                lat: -1.506534,
                lng: 36.773575
            });

            map.addMarker({
                lat: -1.506534,
                lng: 36.773575,
                title: 'Marker with information',
                infoWindow: {
                    content: '<p>HTML Content</p>'
                }
            });
        });