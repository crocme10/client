<template>
  <div class='mt-8 w-full'>
    <ValidationProvider class='px-8 pt-6 pb-8 mb-4 font-header'>
      <div class='mb-4'>
        <label class='block text-gray-700 text-sm font-bold mb-2' for='username'>
          Username
        </label>
        <input name='username' class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 font-code leading-tight focus:outline-none focus:shadow-outline' id='username' type='text' placeholder='Username' required />
      </div>
      <div class='mb-4'>
        <label class='block text-gray-700 text-sm font-bold mb-2' for='email'>
          Email
        </label>
        <input name='email' class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 font-code leading-tight focus:outline-none focus:shadow-outline' id='email' type='text' placeholder='Email' required />
      </div>
      <input class='w-3/4 bg-gray-500 hover:bg-gray-600 text-white font-bold w-full py-3 mt-4' type='submit' value='Submit' />
    </ValidationProvider>

    <div v-if='loaded'>
      <ul class='m-6'>
        <li v-for='user in users' :key='user.id' class='font-text'>
          {{ user.id }} - {{ user.username }}
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Loading</p>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, extend } from 'vee-validate'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Users',
  data () {
    return {
      loaded: false
    }
  },
  components: {
    ValidationProvider
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
    extend('length', {
      validate (value, { min, max }) {
        return value.length >= min && value.length <= max
      },
      params: ['min', 'max'],
      message: 'invalid length'
    })
    await this.loadUsers()
    this.loaded = true
  }
}
</script>
