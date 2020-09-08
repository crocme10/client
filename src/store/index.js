import Vue from 'vue'
import Vuex from 'vuex'

import Users from './modules/users'
import Notifications from './modules/notifications'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    notifications: Notifications,
    users: Users
  }
})
