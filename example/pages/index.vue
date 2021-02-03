<template>
  <ais-instant-search :search-client="$algolia" index-name="instant_search">
    <ais-search-box />
    <ais-stats />
    <ais-refinement-list attribute="brand" />
    <ais-hits>
      <template slot="item" slot-scope="{ item }">
        <p>
          <ais-highlight attribute="name" :hit="item" />
        </p>
        <p>
          <ais-highlight attribute="brand" :hit="item" />
        </p>
      </template>
    </ais-hits>
    <ais-pagination />
  </ais-instant-search>
</template>

<script>
import {
  AisInstantSearch,
  AisRefinementList,
  AisHits,
  AisHighlight,
  AisSearchBox,
  AisStats,
  AisPagination
} from 'vue-instantsearch'

export default {
  components: {
    AisInstantSearch,
    AisRefinementList,
    AisHits,
    AisHighlight,
    AisSearchBox,
    AisStats,
    AisPagination
  },
  head () {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/instantsearch.css@7.3.1/themes/algolia-min.css'
        }
      ]
    }
  }
}
</script>
