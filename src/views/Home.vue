<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col col-sm-4">
        <form @submit.prevent="search">
          <input class="rounded pl-1" type="text" v-model="query" placeholder="Artist">
          <button class="btn btn-sm btn-dark" type="submit">Search</button>
        </form>
      </div>
      <results></results>
    </div>
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