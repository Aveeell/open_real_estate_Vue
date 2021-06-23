<template>
    <div class="container">
        <hr>
        <div class="google-map" :id="name"></div>
        <hr>
    </div>
</template>

<script>
    export default {
        name: 'google-map',
        props: ['name'],
        data: function () {
            return {
                map: '',
                markers: [
                    {
                        position: {
                            latitude: 48.712651,
                            longitude: 44.526711
                        }
                    },
                    {
                        position: {
                            latitude: 48.712725,
                            longitude: 44.525272
                        }
                    }
                ],
                center: {lat: 1, lng: 1}
            }
        },
        computed: {
            mapMarkers: function () {
                return this.markers
            }
        },
        mounted: function () {
            this.geolocate();
            const element = document.getElementById(this.name)
            const options = {
                zoom: 17,
                center: new google.maps.LatLng(this.center)
            }
            this.map = new google.maps.Map(element, options)

            this.markers.forEach((marker) => {
                const position = new google.maps.LatLng(marker.position.latitude, marker.position.longitude)
                marker.map = this.map
                marker.position = position
                new google.maps.Marker(marker)
            })

            
        },
        methods: {
          geolocate: function() {
           navigator.geolocation.getCurrentPosition(position => {
           this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
            };
          });    
         }
      }
    };
</script>

<style>
    .google-map {
        width: auto;
        height: 700px;
        margin: 0 auto;
        background: gray;
    }
</style>