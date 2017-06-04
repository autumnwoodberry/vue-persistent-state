<template>
  <div class="card mb-2">
    <div class="card-block">
      <h4 class="card-title">Name: {{ value.name }}</h4>
      <div class="card-text">
        Type: {{ value.type }}<br>
        Age: {{ value.age }}<br>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'animal',
    props: {
      value: Object
    }
  }
</script>
