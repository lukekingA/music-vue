import Vue from 'vue'
import Vuex from 'vuex'
//import axios from 'axios'
import $ from 'jquery'

let url = 'https://itunes.apple.com/search?callback=?&term='

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    songs: []
  },
  mutations: {
    setResults(state, data) {
      state.songs = data
    }
  },
  actions: {
    getSongs({
      commit
    }, query) {
      $.getJSON(url + query).then(res => {
        commit('setResults', res.results)
      })
    }
  }
})