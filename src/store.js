import Vue from 'vue'
import Vuex from 'vuex'
//import axios from 'axios'
import $ from 'jquery'

let url = 'https://itunes.apple.com/search?callback=?&term='

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    songs: [],
    activeSong: {}
  },
  mutations: {
    setResults(state, data) {
      state.songs = data
    },
    setActiveSong(state, data) {
      state.activeSong = data
    }
  },
  actions: {
    getSongs({
      commit
    }, query) {
      $.getJSON(url + query).then(res => {
        commit('setResults', res.results)
      })
    },
    setActive({
      commit
    }, song) {
      commit('setActiveSong', song)
    }
  }
})