<template>
  <div class="home">
    <h1
      :style="{'color':color}"
      >
      Contador: {{contador}}</h1>
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {

  },
  data(){
    return{
      contador: 0
    }
  },
  computed:{
    color(){
      if(this.contador < 0){
        return 'red'
      } else {
        return 'blue'
      }
    }
  },
  methods: {
    increase(){
      this.contador ++
    },
    decrease(){
      this.contador --
    }
  }
}
</script>
