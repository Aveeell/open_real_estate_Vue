<template>
  <div>
    <div class="container">
      <h2>Search and add a pin</h2>
      <label>
        <gmap-autocomplete
          @place_changed="setPlace" style="width: 400px">
        </gmap-autocomplete>
        <button class="btn btn-primary" @click="addMarker">update</button>
      </label>
      <br>
    </div>
<!--    <br>-->
    <div class="container">
    <gmap-map
      :center="center"
      :zoom="16"
      style="width:100%;  height: 600px; border-color: black; border-width: 1px; border-style: solid;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
    </div>
    
    <div class="container">
        <p style="color: blue">

        </p>
    </div>
  </div>
</template>

<style>
    div.container {
        background-color: #ebebe0;
    }
    label {
        text-align: center;
/*        background-color: azure;*/
        border-width: 1px;
        border-color: black;
        border-style: solid;
    }
    gmap-autocomplete {
        background-color: aqua;
    }
</style>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null
    };
  },

  mounted() {
    this.geolocate();
  },

  methods: {
      
      updateCenter(location) {
            this.сenter = {
              lat: location.lat(),
              lng: location.lng(),
            }
          },          
          
          updatePlace(place) {
            console.log(place);                              
            this.updateCenter(place.geometry.location);
          },
      
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
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