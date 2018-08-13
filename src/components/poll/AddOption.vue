<template>
  <div>
    <vue-google-autocomplete
      ref="address"
      id="map"
      classname="address-field"
      placeholder="Please enter an address"
      v-on:placechanged="getAddressData"
      enable-geolocation= "true"
      types="establishment"
    >
    </vue-google-autocomplete>
  </div>
</template>
<script>
import VueGoogleAutocomplete from 'vue-google-autocomplete'
export default {
  name: 'add-option',
  components: { VueGoogleAutocomplete },
  data: function () {
    return {
      address: ''
    }
  },
  methods: {
    getAddressData: function (addressData, placeResultData, id) {
      this.$emit('placeAdded', { id: placeResultData.place_id, name: placeResultData.name })
    }
  }
}
</script>
<style scoped>
.address-field {
  width: 1000px;
}
</style>
