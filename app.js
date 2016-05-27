const vm = new Vue({
  el: '#app',

  data: {
    articles: [],
    searchQuery: ''
  },
  methods: {
    search: function() {
      this.$http({
        url: 'https://en.wikipedia.org/w/api.php',
        method: 'JSONP',
        data: {
          format: 'json',
          action: 'query',
          generator: 'search',
          gsrnamespace: 0,
          prop: 'extracts',

          exintro: true,
          exsentences: 3,
          exlimit: 'max',
          gsrsearch: this.searchQuery,
          callback: 'JSON_CALLBACK'
        }
      }).then(this.setData.bind(this));
    },
    setData: function(res) {
      this.articles = res.data.query.pages;
    },
  },
})
Vue.transition('fade', {
  enterClass: 'fadeIn',
  leaveClass: 'fadeOutRight'
})
