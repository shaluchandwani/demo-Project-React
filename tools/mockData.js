const Gallery = [
  {
    id: 1,
    title: "Pepe Jeans",
    slug: "Pepe-Jeans",
    vender: 1,
    size: ["medium", "small", "large"],
    amount: "200$",
    image:
      "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/8544287/2019/2/12/66467281-c42e-4177-a0c1-8826ab1ac2371549966081210-Pepe-Jeans-Men-Blue-Slim-Fit-Low-Rise-Clean-Look-Stretchable-1.jpg"
  },
  {
    id: 2,
    title: "Micheal Chors Handbag",
    slug: "Micheal-Chors-Handbag",
    vender: 1,
    size: ["medium", "small", "large"],
    amount: "500$",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81UYkEoyIIL._UY500_.jpg"
  },
  {
    id: 3,
    title: "Soft Toy Stitch by Disney",
    slug: "Soft-Toy-Stitch-by-Disney",
    vender: 1,
    size: ["medium", "small", "large"],
    amount: "1000$",
    image: "https://images-na.ssl-images-amazon.com/images/I/51Mt0yxK66L.jpg"
  },
  {
    id: 4,
    title: "Indian Wear Kerela Saree",
    slug: "Indian-Wear-Kerela-Saree",
    vender: 1,
    size: ["medium", "small", "large"],
    amount: "2000$",
    image:
      "https://4.imimg.com/data4/OO/WU/ANDROID-45970894/product-500x500.jpeg"
  },
  {
    id: 5,
    title: "Men's Tshirt",
    slug: "Men's-Tshirt",
    vender: 1,
    size: ["medium", "small", "large"],
    amount: "2000$",
    image:
      "https://ae01.alicdn.com/kf/HTB144XeKVXXXXbkXXXXq6xXFXXXB/official-DJ-T-Shirts-Men-Short-Sleeve-Man-T-Shirt-Cotton-O-Neck-The-New-Cheap.jpg_640x640.jpg"
  },
  {
    id: 6,
    title: "Female Hair Band",
    slug: "Female-Hair-Band",
    vender: 3,
    size: ["medium", "small", "large"],
    amount: "2$",
    image:
      "https://ae01.alicdn.com/kf/HTB1hX3dmvBNTKJjy0Fdq6APpVXa2/Women-Turban-Twist-Headband-Head-Wrap-Twisted-Knotted-Knot-Hair-Band-Candy-Hot-Sale-L4-B3.jpg"
  },
  {
    id: 7,
    title: "Multiutility Bag",
    slug: "Multiutility-Bag",
    vender: 1,
    size: ["medium", "small", "large"],
    amount: "700$",
    image: "http://happyjute.com/wp-content/uploads/2017/03/p1-4.jpg"
  },
  {
    id: 8,
    title: "Roadster Jeans",
    slug: "Roadster-Jeans",
    vender: 2,
    size: ["medium", "small", "large"],
    amount: "200$",
    image:
      "https://surbhi.bitumish.in/wp-content/uploads/2019/01/download_4-e1547990689950.jpg"
  },
  {
    id: 9,
    title: "HeadPhones JBL",
    slug: "HeadPhones-JBL",
    vender: 1,
    size: ["Regular"],
    amount: "5000$",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71h2HWoQBEL._SX569_.jpg"
  },
  {
    id: 10,
    title: "Speaker JBL BoomBox",
    slug: "Speaker-JBL-BoomBox",
    vender: 3,
    size: ["Regular"],
    amount: "10000$",
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5968/5968903_sd.jpg;maxHeight=640;maxWidth=550"
  }
];

const venders = [
  { id: 1, name: "Allen Solly creations" },
  { id: 2, name: "Adhya Creations" },
  { id: 3, name: "SHEIN" }
];

const newGallery = {
  id: null,
  title: "",
  vender: null,
  size: "",
  amount: "$"
};

module.exports = {
  newGallery,
  Gallery,
  venders
};
