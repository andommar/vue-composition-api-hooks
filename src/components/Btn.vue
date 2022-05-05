<template>
  <button @click="accionBtn">{{buttonText}}</button>
</template>

<script>
export default {
    props:['buttonText'],
    setup(props, context){
        const accionBtn = () => {
            context.emit('accion')
        }
    return {accionBtn}
    }
}
</script>

<style>

</style>