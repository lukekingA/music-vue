<template>
  <div>
    <div class="row top-margin">
      <div v-if="songs.length" class="results col">
        <h3 class="my-2">{{songs[0].artistName}}</h3>

        <ul class="d-flex flex-wrap">
          <li class="px-1 border border-dark bg-ltgrey rounded m-1 shadow" @click="setActiveSong(song)" v-for="song in songs"
            v-if="song.kind == 'song'"><span>
              <i class="fas fa-play"></i> </span>
            <span> {{song.trackName}}</span></li>
        </ul>
      </div>
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
        this.$store.dispatch('setActive', song)
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
  }

  .bg-ltgrey {
    background-color: rgba(73, 73, 73, 0.61);
  }

  .top-margin {
    margin-top: 150px;
  }
</style>