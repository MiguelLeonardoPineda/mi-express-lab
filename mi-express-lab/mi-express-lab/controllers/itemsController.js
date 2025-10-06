let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' }
];

function getHome(req, res) {
  return res.json({ message: 'Bienvenido a mi primera API con Express.js' });
}

function getItems(req, res) {
  return res.json(items);
}

function getItemById(req, res) {
  const id = parseInt(req.params.id, 10);
  const item = items.find(i => i.id === id);
  if (!item) {
    return res.status(404).json({ error: 'Item no encontrado' });
  }
  return res.json(item);
}

function createItem(req, res) {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Falta la propiedad name en el body' });
  }
  const newId = items.length > 0 ? items[items.length - 1].id + 1 : 1;
  const newItem = { id: newId, name };
  items.push(newItem);
  return res.status(201).json(newItem);
}

module.exports = {
  getHome,
  getItems,
  getItemById,
  createItem
};
