class Product {
  constructor(itemId, imgSrc, name, retailPrice, cnt = 1) {
    this.itemId = itemId;
    this.imgSrc = imgSrc;
    this.name = name;
    this.retailPrice = retailPrice;
    this.cnt = cnt;
  }
}

export default Product;
