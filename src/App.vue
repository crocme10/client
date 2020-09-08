<template>
  <div id="app">
    <div id="nav">
      <ul class="flex">
        <li class="flex-1 mr-2">
          <router-link class="text-center block border border-white-rounded rounded py-2 px-4 text-blue-500 hover:bg-gray-200 text-white" to="/">Home</router-link>
        </li>
        <li class="flex-1 mr-2">
          <router-link class="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" to="/about">About</router-link>
        </li>
      </ul>
    </div>
    <div class="flex h-screen">
      <div class="w-1/12"></div>
      <div class="w-10/12 bg-gray-200">
        <router-view/>
      </div>
      <div class="w-1/12"></div>
    </div>
    <Notifications />
  </div>
</template>

<script>
import Notifications from '@/components/Util/Notifications'

export default {
  name: 'App',
  components: {
    Notifications
  }
}
</script>
