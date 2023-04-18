// Select all variant elements.
const items = document.querySelectorAll(".sku-property-item");
console.log(items);
// Loop foreach variant image elements.
items?.forEach((item) => {
  // Click each item to force the image to be loaded.
  item.click();
});
