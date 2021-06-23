<template>
    <div class="container">
        <h1>Ok</h1>
        <div id="map"></div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                map: none,
                sevice: none,
                infowindow: none,
                request: {
                    query: 'store',
                    fields: ['name', 'geometry']
                }
            }
        },
        methods: {
            initMap: function() {
                var vlg = new google.maps.LatLng(48.712651, 44.526711);
                this.infowindow = new google.maps.InfoWindow();

                this.map = new google.maps.Map(
                    document.getElementById('map'), {
                        center: vlg,
                        zoom: 15
                    });
            },
            createMarker: function(place) {
            
        }
    
    
    
    
    
    //--------------------------------------------------------------
      }
    }

</script>

<style scoped>
    #map {
        height: 100%;
    }

</style>
