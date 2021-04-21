class ItemService {
  constructor() {
    this.apiUrl = 'https://localhost:5001/api/items';
  }

  async getAll() {
    const res = await fetch(this.apiUrl);
    const { value } = await res.json();
    return value;
  }

  async getById(id) {
    const items = await this.getAll();
    const item = items.find((item) => item.Id === id);
    return item;
  }

  async create({ name, description }) {
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
  }

  async update(id, item) {
    const urlToUpdate = this.apiUrl + `/${id}`;
    item = { id, ...item };
    const options = {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify(item)
    };
    const res = await fetch(urlToUpdate, options);
    console.log(res);
  }

  async delete(id) {
    console.log(id);
    await fetch(this.apiUrl + `/${id}`, {
      method: 'DELETE'
    });
  }
}

// export { ItemService };
export default new ItemService();
