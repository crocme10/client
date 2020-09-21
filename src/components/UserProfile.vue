<template>
  <div class='mt-8 mx-auto md:w-1/2 lg:w-1/3 xl:w-1/4'>
    <h3 class='font-header text-xl text-center'> {{currentUser.user.username}} </h3>
    <p class='mt-8'>
      <strong>Id:</strong>
      {{currentUser.user.id}}
    </p>
    <p>
      <strong>Email:</strong>
      {{currentUser.user.email}}
    </p>
    <strong>Authorities:</strong>
    <ul>
      <li v-for="(role,index) in currentUser.roles" :key="index">{{role}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    currentUser () {
      return this.$store.state.auth.user
    }
  },
  mounted () {
    if (!this.currentUser) {
      this.$router.push('/login')
    }
  }
}
</script>
