import itemService from './modules/ItemService.js';
import { loadItems } from './modules/itemRender.js';
const addButton = document.getElementById('addButton');

addButton.addEventListener('click', async () => {
  const name = document.getElementById('itemName').value;
  const description = document.getElementById('itemDescription').value;
  await itemService.create({ name, description });
  const items = await itemService.getAll();
  loadItems(items);
});

window.onload = async () => {
  const items = await itemService.getAll();
  loadItems(items);
};
