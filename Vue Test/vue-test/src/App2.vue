<script>
export default{
  data() {
    return{
      name: 'Md. Tanjim Mahtab Taosif',
      status: 'active',
      tasks: ['Task One', 'Task Two', 'Task Three'],
      link: 'https://www.google.com/'

    };
  },

  methods: {
    toggleStatus(){
      if (this.status === 'active'){
        this.status = 'pending'
      } else if (this.status === 'pending'){
        this.status = 'inactive';
      } else {
        this.status = 'actives'
      }
    }
  }
};
</script>

<template>
<h1>{{name}}</h1>
<p v-if="status === 'active'" >User is active</p>
<p v-else-if="status === 'pending'" >User is pending</p>
<p v-else="status">User is inactive</p>

<h2>Tasks:</h2>
<ul>
  <li v-for="task in tasks" :key="task">{{ task }}</li>
</ul>

<a v-bind:href="link">CLick for Google</a> <br>

<button @click="toggleStatus">Change Status</button>
</template>

<style>

</style>

