<template>
  <div id="app" class="container mt-5">

    <!-- search by name -->
    <div class="mb-3">
      Search by Name: <search-widget :value="searchQuery" @input="$store.dispatch('setSearchQuery', $event)"></search-widget>
    </div>

    <!-- sort by age -->
    <div class="mb-3">
      Sort by: <sort-widget :value="sortValue" :options="sortOptions" @input="$store.dispatch('setSortValue', $event)"></sort-widget>
    </div>

    <!-- list of animals -->
    <animal v-for="animal in filteredAnimals" :value="animal"></animal>

  </div>
</template>

<script>
  import { mapState } from 'vuex'

  import SearchWidget from '@/components/SearchWidget'
  import SortWidget from '@/components/SortWidget'
  import Animal from '@/components/Animal'

  export default {
    name: 'app',
    components: {
      SearchWidget,
      SortWidget,
      Animal
    },
    computed: {
      ...mapState([
        'animals',
        'searchQuery',
        'sortOptions',
        'sortValue'
      ]),
      filteredAnimals () {
        return this.animals
          .filter(animal => {
            return this.searchQuery ? animal.name.toLowerCase().startsWith(this.searchQuery.toLowerCase()) : true
          })
          .sort((a, b) => {
            if (a[this.sortValue] < b[this.sortValue]) {
              return -1
            }
            if (a[this.sortValue] > b[this.sortValue]) {
              return 1
            }
            return 0
          })
      }
    }
  }
</script>
