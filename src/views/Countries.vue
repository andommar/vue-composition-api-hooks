<template>
  <h1>Countries list</h1>
  <p v-for="(country, index) in arrayData" :key="index">
      <router-link :to="{name: 'country', params:{name:country.name}}">
      {{ country.name }}
      </router-link>
  </p>
</template>

<script>
import { useFetch } from '../hooks/useFetch'
export default {
    setup(){
        return {...useFetch('https://restcountries.com/v2/all')}
    }

}
</script>

<style>

</style>