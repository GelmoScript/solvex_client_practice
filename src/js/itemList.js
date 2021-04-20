let vItemList = new Vue({
  el: '#getItems',
  data: {
    items: []
  },
  computed: {
    itemsCount: function () {
      return this.items.length;
    },
    hasItems: function () {
      return this.items.length > 0;
    }
  },
  methods: {
    onFormSubmit: function () {
      alert('Button pressed');
    }
  }
});
