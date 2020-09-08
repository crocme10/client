<template>
  <ul class="m-6">
    <li v-for="user in users" :key="user.id" class="font-text">
      {{ user.id }} - {{ user.username }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Users',
  props: ['users']
}
</script>
