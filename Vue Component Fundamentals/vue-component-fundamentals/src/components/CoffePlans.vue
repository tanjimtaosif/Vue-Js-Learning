<script setup>
    defineProps(["name"])
</script>

<template>
    <div class="plan">
      <div class="description">
        <!-- Using props -->
        <span class="title"> {{ name }} </span> 
      </div>
    </div>
</template>
<style>

</style>