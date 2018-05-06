var growler = new Vue({
  el: '#growler',
  data: {
    appName: 'Growler',
    query: '',
    isPowerSyntaxEnabled: false,
    searchIndexes: [],
    otherSearchIndexes: []

  }
})

new Vue({
  el: '#selecti',
  data: {
    selectedSearchIndex: 'beers',
    selectedSearchIndexes: ['beers', 'pubs']
  }
})