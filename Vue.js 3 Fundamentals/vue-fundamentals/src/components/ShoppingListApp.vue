<script setup>
import {ref, computed} from 'vue'

// const characterCount = computed(() =>{
//     return newItem.value.length
// })
// Have to explore unshift
const header = ref('Shopping List App')

const reversedItems = computed(() =>[...items.value].reverse()
)

const items = ref ([
    {
        id:1, 
        label:"10 Car", 
        purchased: true,
        highPriority: false
    }, 
    {
        id:2, 
        label:"20 Bikes", 
        purchased: true,
        highPriority: false
    }, 
    {
        id:3, 
        label:"3 EVs", 
        purchased: false,
        highPriority: true
    },
    {
        id:4, 
        label:"5 Helicopter", 
        purchased: false,
        highPriority: true
    }
])
const newItem = ref("")

const newItemHighPriority = ref(false)

// newItem.value = "" by adding this part its clear the input filed after input
const submitItems = () => {
    items.value.push(
        {
            id: items.value.length +1, 
            label: newItem.value,
            highPriority: newItemHighPriority.value
        }
    )
    newItem.value = ""
    newItemHighPriority.value = ""
} 

const editing = ref(false)

const doEdit = (e) =>{
    editing.value = e
    newItem.value = ""
}

const togglePuchased = (item) => {
    item.purchased = !item.purchased
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
<!-- <p class="counter">
    {{ characterCount }}/200
</p> -->
<ul>
    <li 
    v-for="(item, index) in reversedItems" 
    :key="item.id"
    @click="togglePuchased(item)"
    class="static-class"
    :class="{
        strikeout: item.purchased, 
        priority: item.highPriority
        }">
        {{ item.label }}</li>
</ul>
<p v-if="!items.length">
    Nothing to see here
  </p>
</template>
