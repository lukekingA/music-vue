<template>
  <div>
    <div class="results col col-sm-4">
      <h3>{{songs[0].artistName}}</h3>

      <ul class="">
        <li class="" @click="setActiveSong(song)" v-for="song in songs" v-if="song.kind == 'song'">{{song.trackName}}</li>
      </ul>
    </div>
    <song :song="activeSong"></song>
  </div>


</template>


<script>
  import Song from '@/components/Song.vue'
  export default {
    name: 'results',
    data() {
      return {
        activeSong: {}
      }
    },
    computed: {
      songs() {
        return this.$store.state.songs
      }
    },
    methods: {
      setActiveSong(song) {
        this.activeSong = song
      }
    },
    components: {
      Song
    }
  }
</script>


<style>
  li {
    list-style: none;
  }

  li:hover {
    color: blue;
    cursor: pointer;
    font-size: 1.2rem;
  }
</style>