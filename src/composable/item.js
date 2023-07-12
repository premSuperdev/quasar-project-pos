export function ItemApi() {
  async function get() {
    return await fetch("src/db/data/item.json").then((e) => e.json());
  }
  return {
    get,
  };
}
