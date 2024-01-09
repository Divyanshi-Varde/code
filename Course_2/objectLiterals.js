function createBookShop(inventory) {
  return {
    // inventory: inventory, // we can't assign the same value to both key and pair
    inventory,
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceforTitle(title) {
      return this.inventory.find((book) => book.title === title).price;
    },
  };
}
const inventory = [
  { title: "Harry Potter", price: 200 },
  { title: "The Catcher in the Rye", price: 60 },
];

const bookshop = createBookShop(inventory);
console.log(bookshop.inventoryValue());
console.log(bookshop.priceforTitle("Harry Potter"));


