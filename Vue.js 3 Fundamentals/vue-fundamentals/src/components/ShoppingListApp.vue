<script setup>
import {ref} from 'vue'

const header = ref('Shopping List App')
const items = ref ([
    {id:1, label:"10 Car"}, 
    {id:2, label:"20 Bikes"}, 
    {id:3, label:"3 EVs"}
])
</script>
<template>
<h1>{{ header }}</h1>
<ul>
    <li v-for="item in items" key="item.id">{{ item.label }}</li>
</ul>
</template>