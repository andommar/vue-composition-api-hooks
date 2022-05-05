<template>
  <h1>Contador: {{contador}}</h1>
  <Btn :buttonText="'Increase'" @accion="increase"/>
  <Btn :buttonText="'Decrease'" @accion="decrease"/>

</template>

<script>
import Btn from '../components/Btn.vue'
import {useCounter} from '../hooks/useCounter'
export default {
    components: {
        Btn
    },
    setup(){
        // const {contador, increase,decrease} = useCounter()
        // return {contador, increase,decrease}
        return {...useCounter()}
    }

}
</script>

<style>

</style>