<script setup>
import {ref} from 'vue'

const header = ref('Shopping List App')
const items = ref ([
    // {id:1, label:"10 Car"}, 
    // {id:2, label:"20 Bikes"}, 
    // {id:3, label:"3 EVs"},
    // {id:4, label:"5 Helicopter"}
])
const newItem = ref("")
const newItemHighPriority = ref(false)
// newItem.value = "" by adding this part its clear the input filed after input
const submitItems = () => {
    items.value.push({id: items.value.length +1, label: newItem.value})
    newItem.value = ""
} 

const editing = ref(false)
const doEdit = (e) =>{
    editing.value = e
    newItem.value = ""
}
</script>
<template>
    <div class="header">
        <h1>{{ header }}</h1>

        <button v-if="editing" class="btn" @click="doEdit(false)">Cancel</button>
        <button v-else class="btn btn-primary" @click="doEdit(true)" >Add Item</button>
    </div>

<!-- without mathod for @submit.prevent= "items.push({id: items.length +1, label: newItem}) - items.push({id: items.length +1, label: newItem})"" -->
<form class="add-item-form" 
v-if="editing"
@submit.prevent="submitItems">
    <!-- v-model.lazy \ v-model.number \ v-model.trim  -->
    <!-- v-on:keyup.enter triggers the enter key -->
    <!-- v-on:keyup.enter="items.push({id: items.length +1, label: newItem})" -->
    <input v-model.trim="newItem" type="text" placeholder="add an item">
   <div> Priority:
    <label>
      <input type="checkbox" v-model="newItemHighPriority">
      High Priority
    </label>
  </div>
    <br>
    <div>
        <button 
        :disabled="newItem.length === 0"
        class="btn btn-primary ">Save Items</button>
    </div>
</form>
<ul>
    <li 
    v-for="({id, label}, index) in items" 
    :key="id">
        {{ label }}</li>
</ul>
<p v-if="!items.length">
    Nothing to see here
  </p>
</template>
