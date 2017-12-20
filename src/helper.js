import shops from './app/components/Shop/json';

export function addToBag(id) {
  const item = shops.find(item => item.id === id);
  return item;
}