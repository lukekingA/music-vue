<template>
  <div class="song row" v-if="song.trackName">
    <div class="col col-sm-4 offset-sm-4">
      <div class="card p-2 shadow my-3">
        <img class="card-img-top" data-toggle="tooltip" data-placement="top" title="Click to Preview" @click="playPause(song.trackId)"
          :src="song.artworkUrl100" alt="Card image cap">
        <div class="card-body">
          <div class="d-flex justify-content-between border-bottom shadow-sm mb-1">
            <span>Released: {{date}}</span>
            <span>Album price: {{song.collectionPrice}}</span>
          </div>
          <h4 class="card-title">{{song.collectionName}}</h4>
          <h5 class="card-subtitle">{{song.trackName}}</h5>
          <audio :id="song.trackId" :src="song.previewUrl"></audio>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import $ from 'jquery'
  export default {
    name: 'song',
    data() {
      return {}
    },
    props: ['song'],
    computed: {
      date() {
        let date = new Date(this.$store.state.activeSong.releaseDate)
        return date.getFullYear()
      }
    },
    methods: {
      playPause(id) {
        let audio = $(`#${id}`)[0]
        if (audio.paused) {
          audio.play()
        } else {
          audio.pause()
        }
      }
    },
    components: {}
  }
</script>


<style scoped>
  .card>img:hover {
    cursor: pointer;

  }
</style>