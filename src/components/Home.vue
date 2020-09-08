<template>
  <div v-if="loaded">
    <Users :users='users' />
  </div>
  <div v-else>
    <p>Loading</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Users from './Users'

export default {
  name: 'Home',
  data () {
    return {
      loaded: false
    }
  },
  components: {
    Users
  },
  computed: {
    ...mapGetters({
      users: 'users/users'
    })
  },
  methods: {
    ...mapActions({
      loadUsers: 'users/loadUsers'
    })
  },
  async created () {
    await this.loadUsers()
    this.loaded = true
  }
}
</script>
