<template>
  <h1
    :style="{'color':color}"
  >Contador: {{dollarSign}}</h1>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
    props: ['contador', 'color'],
    setup(props){
        console.log(props.contador)
        const dollarSign = computed (()=>{
            return '$' + props.contador
        })

        return {dollarSign}
    },
    // computed: {
    //     dollarSign(){
    //         return '$' + this.contador
    //     }
    // }

}
</script>

<style>

</style>