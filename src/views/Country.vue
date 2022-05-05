<template>
    <!-- Without props props we have to use route -->
    <!-- <h1>Country detail: {{$route.params.name}}</h1> -->

    <!-- With props (setting props: true in the router file) -->
    <h1>Country detail: {{name}}</h1>
    <p v-for="(country, index) in arrayData" :key="index">
        {{ country.name }} - {{ country.region }}
    </p>
</template>

<script>
import {useRoute} from 'vue-router'
import { useFetch } from '../hooks/useFetch'
export default {
    props:['name'],
    setup(props){

        // With useRoute
        const nameParams = useRoute()
        const countryName = nameParams.params.name

        // const {arrayData} = useFetch('https://restcountries.com/v2/name/'+countryName)
        // return {arrayData}
        return {...useFetch('https://restcountries.com/v2/name/'+countryName)}
    }

}
</script>

<style>

</style>