let vForm = new Vue({
  el: '#form',
  data: {
    itemName: '',
    itemDescription: '',
    list: vItemList
  },
  methods: {
    onFormSubmit: function () {
      alert('Button pressed');
    }
  }
});
