<template>
  <div class="song">
    <div class="card">
      <img class="card-img-top" @click="playPause(song.trackId)" :src="song.artworkUrl100" alt="Card image cap">
      <div class="card-body">
        <h4 class="card-title">{{song.collectionName}}</h4>
        <h5 class="card-subtitle">{{song.trackName}}</h5>
        <audio :id="song.trackId" :src="song.previewUrl"></audio>
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
    computed: {},
    methods: {
      playPause(id) {
        let audio = $(`#${id}`)
        console.log(audio)
        if (audio.paused) {
          audio.play
        } else {
          audio.pause
        }
      }
    },
    components: {}
  }
</script>


<style scoped>

</style>