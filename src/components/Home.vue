<template>
  <div class='mx-auto w-1/2'>
    <h2 class='text-center mt-12 font-header text-lg'>All Users</h2>
    <hr class='my-2 border-b-1 border-gray-900' />
    <AddUser />
    <Users />
  </div>
</template>

<script>
import Users from './Users'
import AddUser from './AddUser'

export default {
  name: 'Home',
  components: {
    AddUser,
    Users
  }
}
</script>
