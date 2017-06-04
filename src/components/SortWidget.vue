<template>
  <select :value="value" @change="$emit('input', $event.target.value)">
    <option v-for="option in options" :value="option">
      {{ option }}
    </option>
  </select>
</template>

<script>
  export default {
    name: 'sort-widget',
    props: {
      value: String,
      options: Array
    }
  }
</script>
