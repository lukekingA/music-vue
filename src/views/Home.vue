<template>
  <div class="home container-fluid">
    <div class="fixed-top">
      <div class="row bg-dark">
        <div class="col text-center text-light pt-4">
          <h1>Stream</h1>
        </div>
      </div>
      <div class="row mb-3 py-3 bg-dark shadow text-center">
        <div class="col col-sm-4 offset-sm-4">
          <form @submit.prevent="search">
            <input class="rounded pl-1 mr-2" type="text" v-model="query" placeholder="Artist">
            <button class="btn btn-sm btn-light" type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
    <results></results>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Results from '@/components/Results'

  export default {
    name: 'home',
    data() {
      return {
        query: '',
      }
    },
    components: {
      Results,
    },
    methods: {
      search() {
        this.$store.dispatch('getSongs', this.query)
        this.query = ''
      }
    }
  }
</script>