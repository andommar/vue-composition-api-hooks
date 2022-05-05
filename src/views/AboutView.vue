<template>
  <div class="about">
    <Title :color="color" :contador="contador"/>
    <!-- <h1 :style="{'color':color}">
      Contador: {{contador}}</h1> -->
    <!-- <button @click="increase">+</button>
    <button @click="decrease">+</button> -->
    <Btn :buttonText="'Increase'" @accion="increase"/>
    <hr>
    <input type="text" v-model="texto">
    <p>{{texto}}</p>
  </div>
</template>

<script>
import Title from '../components/Title.vue'
import Btn from '../components/Btn.vue'
import { ref, computed } from 'vue'
export default {
  components: {
    Title, Btn
  },
  setup() {
    const contador = ref(0);
    const texto = ref('')

    const increase = () =>{
      contador.value ++
    }
    const decrease = () =>{
      contador.value --
    }

    const color = computed(()=>{
      if(contador.value < 0){
        return 'red'
      } else {
        return 'blue'
      }
    })

    return {contador, increase, decrease, color, texto}
  },
}
</script>