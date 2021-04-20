const loadItems = (items) => {
  let itemList = document.getElementById('itemList');
  itemList.innerHTML = '';
  items.forEach((item) => {
    const todoItem = createItem(item);
    itemList.appendChild(todoItem);
  });
};

const createItem = ({ Id, Name, Description, Checked }) => {
  const checkbox = createItemCheckBox(Id, Checked);
  const label = createItemLabel(Id, Name, Description, checkbox);
  const item = document.createElement('div');
  item.classList.add('item');
  item.id = Id;
  item.appendChild(label);
  return item;
};

const createItemCheckBox = (id = '', checked = false) => {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = `checkbox-${id}`;
  checkbox.classList.add('checkbox');
  checkbox.checked = checked;
  return checkbox;
};

const createItemLabel = (id = '', name = '', description = '', checkbox) => {
  const label = document.createElement('label');
  label.classList.add('label');
  label.id = `label-${id}`;
  const descriptionDisplayed = description ? `: ${description}` : '';
  const labelText = name + descriptionDisplayed;
  const labelTextNode = document.createTextNode(labelText);
  label.appendChild(checkbox);
  label.appendChild(labelTextNode);
  return label;
};

export { loadItems };
