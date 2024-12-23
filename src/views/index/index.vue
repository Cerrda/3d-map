<script setup>
import Map from '@/components/map.vue'
// import mapJson from '@/assets/json/广东省.json'
import mapJson from '@/assets/json/福建省.json'
// import mapJson from '@/assets/json/中华人民共和国.json'
</script>

<template>
  <div>
    <Map :map-json="mapJson"></Map>
  </div>
</template>
