// Select all variant elements.
const items = document.querySelectorAll(".sku-property-item");
// Loop foreach variant image elements.
items?.forEach((item) => {
  // Click each item to force the image to be loaded.
  item?.click();
});

// After everything is clicked, click the first item in each variant section again to reset the selected state.
const lists = document.querySelectorAll(".sku-property-list");
lists?.forEach((list) => {
  // This will also distract the user to look at the early variants first while the later one are loading their images.
  if (list?.children?.length) list.children[0].click();
});
