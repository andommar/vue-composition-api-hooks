import { ref } from 'vue'

export function useCounter(){
    const contador = ref(0);

    const increase = () =>{
      contador.value ++
    }
    const decrease = () =>{
      contador.value --
    }

    return {contador, increase, decrease}
}