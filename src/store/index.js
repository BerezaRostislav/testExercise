import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      {
        "id": 1,
        "name": "Jon Doe",
        "isDefault": true
      },
      {
        "id": 2,
        "name": "Daniel Lee"
      },
      {
        "id": 3,
        "name": "Ana Ivanovici"
      },
    ],
    userDetails: [
      {
        "id": 1,
        display_name: "Jon Doe",
        "organization": "Plant a tree",
        "role": "Superviser"
       },
        {
        "id": 2,
        display_name: "Daniel Lee",
        "organization": "Eco planet",
        "role": "Manager"
       },
       {
        "id": 3,
        display_name: "Ana Ivanovici",
        "organization": "Plant a tree",
        "role": "Admin"
       }
    ] 
  },
  mutations: {
    SET_USER_DETAILS(state, userDetails) {
      state.userDetails = userDetails;
    }
  },
  actions: {
    updateUserDetails({ commit }, newDetails) {
      commit('SET_USER_DETAILS', newDetails);
    }
  },
  modules: {
  }
})
