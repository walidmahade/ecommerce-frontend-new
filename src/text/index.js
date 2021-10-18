const PRODUCTS = [
  {
    id: 1,
    title: "Organic Coconut Soap",
    price: 45,
    featured_img:
      "/assets/images/products/product-image-cold-pressed-orange.webp",
  },
  {
    id: 2,
    title: "Cold Pressed Extract",
    price: 59,
    featured_img: "/assets/images/products/product-image-almonds.webp",
  },
  {
    id: 3,
    title: "Green Cream",
    price: 79,
    featured_img: "/assets/images/products/green-cream.webp",
  },
];

let x = PRODUCTS.filter((item) => item.id === 1);

console.log(x);
