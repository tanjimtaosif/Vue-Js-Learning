<script setup>
    import { ref, reactive } from 'vue';
    // reactive don't work with premitive 
    // Also state can't be string or number
    // Also it can't be boolean
    const state = reactive({count: 0})

    const increament = () => {
         state.count++
        
    }
    const msg = ref("Counter App in Vue")
    console.log(msg.value);
    
</script>

<template>
    <h1>
    {{ msg }}
    {{  state.count}}
    </h1>
    <button @click="increament">
        Increament Count
    </button>
</template>