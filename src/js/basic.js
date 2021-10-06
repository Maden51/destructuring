export default function destructor(obj) {
  const { special } = obj;
  const arr = [];
  for (const item of special) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = item;
    arr.push({
      id, name, icon, description,
    });
  }
  return arr;
}
