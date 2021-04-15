class ItemService {
  constructor() {
    this.apiUrl = 'https://localhost:5001/api/items';
  }

  async getAll() {
    const res = await fetch(this.apiUrl);
    const { value } = await res.json();
    return value;
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
}

export { ItemService };
