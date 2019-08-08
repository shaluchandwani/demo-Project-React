const Gallery = [
  {
    id: 1,
    title: "Pepe Jeans",
    slug: "Pepe-Jeans",
    vender: 1,
    size: ["medium", "small", "large"],
    amount: "200$"
  },
  {
    id: 2,
    title: "Micheal Chors Handbag",
    slug: "Micheal-Chors-Handbag",
    vender: 1,
    size: ["medium", "small", "large"],
    amount: "500$"
  },
  {
    id: 3,
    title: "Soft Toy Stitch by Disney",
    slug: "Soft-Toy-Stitch-by-Disney",
    vender: 1,
    size: ["medium", "small", "large"],
    amount: "1000$"
  },
  {
    id: 4,
    title: "Indian Wear Kerela Saree",
    slug: "Indian-Wear-Kerela-Saree",
    vender: 1,
    size: ["medium", "small", "large"],
    amount: "2000$"
  },
  {
    id: 5,
    title: "Men's Tshirt",
    slug: "Men's-Tshirt",
    vender: 1,
    size: ["medium", "small", "large"],
    amount: "2000$"
  },
  {
    id: 6,
    title: "Female Hair Band",
    slug: "Female-Hair-Band",
    vender: 3,
    size: ["medium", "small", "large"],
    amount: "2$"
  },
  {
    id: 7,
    title: "Multiutility Bag",
    slug: "Multiutility-Bag",
    vender: 1,
    size: ["medium", "small", "large"],
    amount: "700$"
  },
  {
    id: 8,
    title: "Roadster Jeans",
    slug: "Roadster-Jeans",
    vender: 2,
    size: ["medium", "small", "large"],
    amount: "200$"
  },
  {
    id: 9,
    title: "HeadPhones JBL",
    slug: "HeadPhones-JBL",
    vender: 1,
    size: ["Regular"],
    amount: "5000$"
  },
  {
    id: 10,
    title: "Speaker JBL BoomBox",
    slug: "Speaker-JBL-BoomBox",
    vender: 3,
    size: ["Regular"],
    amount: "10000$",
    image:
      "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/8544287/2019/2/12/66467281-c42e-4177-a0c1-8826ab1ac2371549966081210-Pepe-Jeans-Men-Blue-Slim-Fit-Low-Rise-Clean-Look-Stretchable-1.jpg"
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
