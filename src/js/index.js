import itemService from './modules/ItemService.js';

let vApp = new Vue({
  el: '#app',
  data: {
    itemName: '',
    itemDescription: '',
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
    getAllItems: async function () {
      const res = await fetch(this.apiUrl);
      const { value } = await res.json();
      return value;
    },
    createItems: async function ({ name, description }) {
      if (!name) throw 'Name cannot be empty';
      if (!description) throw 'Description cannot be empty';
      const itemToAdd = { name, description };
      await fetch(this.apiUrl, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(itemToAdd)
      });
    },
    onFormSubmit: async function () {
      await itemService.create({
        name: this.itemName,
        description: this.itemDescription
      });
      this.items = await itemService.getAll();
    }
  }
});
