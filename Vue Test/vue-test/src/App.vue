<script setup>

import { ref } from 'vue';

    const name = ref ('Tanjim Taosif');
    const status = ref ('active');
    const tasks = ref (['Task One', 'Task Two', 'Task Three']);
    const link = ref ('https://www.google.com/');
    const newTask = ref('');

    const toggleStatus = () => {
      if (status.value === 'active'){
        status.value = 'pending'
      } else if (status.value === 'pending'){
        status.value = 'inactive';
      } else {
        status.value = 'actives'
      }
    };

    const addTask = () => {
      if (newTask.value.trim() !== '') {
        tasks.value.push(newTask.value);
        newTask.value = '';
      }
    };

</script>

<template>
<h1>{{name}}</h1>
<p v-if="status === 'active'" >User is active</p>
<p v-else-if="status === 'pending'" >User is pending</p>
<p v-else="status">User is inactive</p>

<form @submit.prevent="addTask">
  <label for="newTask">Add Task</label>
  <input type="text" id="newTask" name="newTask" v-model="newTask">
  <button type="submit">Submit</button>
</form>

<h2>Tasks:</h2>
<ul>
  <li v-for="task in tasks" :key="task">{{ task }}</li>
</ul>

<a v-bind:href="link">CLick for Google</a> <br>

<button @click="toggleStatus">Change Status</button>
</template>

<style>

</style>

