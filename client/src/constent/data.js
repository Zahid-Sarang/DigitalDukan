// import cap from "../assets/festured/2.webp";
// import shoes from "../assets/festured/3.webp";
// import glasses from "../assets/festured/4.webp";
// import watch from "../assets/festured/5.webp";

import pr1 from "../assets/products/f1.jpg";
import pr2 from "../assets/products/f2.jpg";
import pr3 from "../assets/products/f3.jpg";
import pr4 from "../assets/products/f4.jpg";
import pr5 from "../assets/products/f5.jpg";
import pr6 from "../assets/products/f6.jpg";
import pr7 from "../assets/products/f7.jpg";
import pr8 from "../assets/products/f8.jpg";
import pro1 from "../assets/products/n1.jpg";
import pro2 from "../assets/products/n2.jpg";
import pro3 from "../assets/products/n3.jpg";
import pro4 from "../assets/products/n4.jpg";
import pro5 from "../assets/products/n5.jpg";
import pro6 from "../assets/products/n6.jpg";
import pro7 from "../assets/products/n7.jpg";
import pro8 from "../assets/products/n8.jpg";
import img1 from "../assets/products/img1.png";
import img2 from "../assets/products/img2.png";
import img3 from "../assets/products/img3.png";
import img4 from "../assets/products/img4.png";
import img5 from "../assets/products/img5.png";
import img6 from "../assets/products/img6.png";
import img7 from "../assets/products/img7.png";
import img8 from "../assets/products/img8.png";
import img9 from "../assets/products/img9.jpg";
import img10 from "../assets/products/img10.jpg";
import img11 from "../assets/products/img11.jpg";
import img12 from "../assets/products/img12.jpg";
import img13 from "../assets/products/img13.jpg";
import img14 from "../assets/festured/1.webp";

export const featuredCardData = [
  {
    id: 1,
    discount: "15",
    image: require("../assets/festured/2.webp"),
    title: "Adidas Woolen Cap",
    descriptions:
      "Casual wear (casual attire or clothing) may be a Western code that’s relaxed, occasional, spontaneous and fitted to everyday use. Casual wear became popular within the Western world following the counterculture of the 1960s.",
    actualPrice: "$100",
    discountPrice: "$85",
  },
  {
    id: 2,
    discount: "50",
    image: require("../assets/festured/3.webp"),
    title: "Nike Leader VT",
    descriptions:
      "Footwear refers to garments worn on the feet, which originally serves to purpose of protection against adversities of the environment, usually regarding ground textures and temperature.",
    actualPrice: "$200",
    discountPrice: "$100",
  },
  {
    id: 3,
    discount: "30",
    image: require("../assets/festured/4.webp"),
    title: "Ray ban Aviator",
    descriptions:
      "Polarized sunglasses reduce glare reflected off of roads, bodies of water, snow and other horizontal surfaces.Restore true color.Vision lenses are 400UV rated, meaning it can block UVA and UVB radiation.",
    actualPrice: "$850",
    discountPrice: "$595",
  },
  {
    id: 4,
    discount: "40",
    image: require("../assets/festured/5.webp"),
    title: "Tissot Classic",
    descriptions:
      "The new-model Submariner now features Rolex’s powerhouse calibre 3235 Perpetual movement. An upgrade from the calibre 3135 movement,",
    actualPrice: "$1000",
    discountPrice: "$600",
  },
  // Add more objects as needed for each card
];

export const products = [
  {
    id: 0,
    imageSrc: pr1,
    name: "Slim Fit Dress Shirt",
    price: 49.9,
    descriptions:
      "Sleek and stylish, this slim fit dress shirt offers a tailored look perfect for both office and evening wear.",
    category: "Men's",
    color: "Yellow",
    size: "M",
    discount: "50",
  },
  {
    id: 1,
    imageSrc: pr2,
    name: "Men's Dri-FIT T-Shirt",
    price: 240,
    descriptions:
      "Stay cool and dry during workouts with this men's Dri-FIT T-shirt, engineered for maximum breathability and performance.",
    category: "Sports",
    color: "Blue",
    size: "L",
    status: "in stock",
    discount: "50",
  },
  {
    id: 2,
    imageSrc: pr3,
    name: "Women's Badge of Sport Tee",
    price: 390,
    descriptions:
      "Show your love for sports with this vibrant red Adidas tee, designed exclusively for women who seek style with comfort.",
    category: "Women's",
    color: "Red",
    size: "S",
    status: "in stock",
    discount: "50",
  },
  {
    id: 3,
    imageSrc: pr4,
    name: "Men's 1950s Sportswear T-Shirt",
    price: 490,
    descriptions:
      "Capture the essence of the 1950s with this retro Levi's sportswear tee, a blend of timeless style and modern comfort.",
    category: "Men's",
    color: "Gray",
    size: "XL",
    status: "in stock",
    discount: "50",
  },
  {
    id: 4,
    imageSrc: pr5,
    name: "Men's 1950s Sportswear T-Shirt",
    price: 490,
    descriptions:
      "Relive the vintage vibes with this 1950s-inspired Levi's tee, perfect for the modern man with a taste for the classics.",
    category: "Men's",
    color: "Gray",
    size: "XL",
    status: "in stock",
    discount: "50",
  },

  // Update

  {
    id: 5,
    imageSrc: pr6,
    name: "Women's Basic Tee, Men's Rebel Bold Tee",
    price: 90,
    descriptions:
      "H&M presents a versatile basic tee for women and a bold statement tee for men – combining simplicity with attitude.",
    category: "women's",
    color: "White",
    size: "M",
    status: "in stock",
    discount: "50 ",
  },
  {
    id: 6,
    imageSrc: pr7,
    name: "Women's Cotton Classic Pant",
    price: 390,
    descriptions:
      "Experience the soft touch of classic cotton with Puma's crew neck T-shirt, designed to keep you comfortable all day.",
    category: "Women's",
    color: "Black",
    size: "L",
    status: "in stock",
    discount: "50 ",
  },
  {
    id: 7,
    imageSrc: pr8,
    name: "Women's Classic Fit Crewneck T-Shirt",
    price: 290,
    descriptions:
      "Elegance meets comfort in this Ralph Lauren classic fit tee for women, making it a wardrobe must-have.",
    category: "Women's",
    color: "Blue",
    size: "M",
    status: "in stock",
    discount: "20 ",
  },
  {
    id: 8,
    imageSrc: pro1,
    name: "Slim Fit Dress Shirt",
    price: 120,
    descriptions:
      "Exude sophistication in Calvin Klein's slim fit dress shirt, tailor-made for those moments that demand a refined touch.",
    category: "Sports",
    color: "White",
    size: "L",
    status: "in stock",
    discount: "30 ",
  },
  {
    id: 9,
    imageSrc: pro2,
    name: "Men's Dri-FIT T-Shirt",
    price: 250,
    descriptions:
      "Elevate your workouts with Nike's Dri-FIT T-shirt, ensuring you remain cool, dry, and unstoppable.",
    category: "Sports",
    color: "Green",
    size: "M",
    status: "in stock",
    discount: "15 ",
  },
  {
    id: 10,
    imageSrc: pro3,
    name: "Women's Badge of Sport Tee",
    price: 300,
    descriptions:
      "Adidas' Badge of Sport Tee is where fashion meets passion for sports, designed for women who love to stand out.",
    category: "Women's",
    color: "Pink",
    size: "M",
    status: "in stock",
    discount: "10 ",
  },
  {
    id: 11,
    imageSrc: pro4,
    name: "Men's 1950s Sportswear T-Shirt",
    price: 180,
    descriptions:
      "Take a nostalgic trip back to the 1950s with Levi's iconic sportswear tee, seamlessly blending history and style.",
    category: "Men's",
    color: "Brown",
    size: "L",
    status: "in stock",
    discount: "25 ",
  },
  {
    id: 12,
    imageSrc: pro5,
    name: "Men's Tech 2.0 Short Sleeve T-Shirt",
    price: 170,
    descriptions:
      "Step into the future of sportswear with Under Armour's Tech 2.0 tee, designed for optimum performance and style.",
    category: "Men's",
    color: "Black",
    size: "M",
    status: "in stock",
    discount: "20 ",
  },
  {
    id: 13,
    imageSrc: pro6,
    name: "Men's Cotton Classic Shorts",
    price: 110,
    descriptions:
      "Strike a balance between classic and bold with H&M's curated collection of tees for both men and women.",
    category: "Men's",
    color: "Gray",
    size: "S",
    status: "in stock",
    discount: "15 ",
  },
  {
    id: 14,
    imageSrc: pro7,
    name: "Men's Cotton Classic Short Sleeve Crew Neck T-Shirt",
    price: 215,
    descriptions:
      "Classic, comfortable, and unmistakably Puma – this cotton tee promises style without compromising on comfort.",
    category: "Men's",
    color: "Brown",
    size: "M",
    status: "in stock",
    discount: "10 ",
  },
  {
    id: 15,
    imageSrc: pro8,
    name: "Women's Classic Fit Crewneck T-Shirt",
    price: 250,
    descriptions:
      "Crafted with precision, Ralph Lauren presents a tee that defines elegance and ensures a flattering fit for every woman.",
    category: "Women's",
    color: "Purple",
    size: "M",
    status: "in stock",
    discount: "20 ",
  },
  {
    id: 16,
    imageSrc: img1,
    name: "Slim Fit Dress Shirt",
    price: 990,
    descriptions:
      "Stand out in any formal setting with Calvin Klein's slim fit dress shirt, now available at an unbeatable discount.",
    category: "Sports",
    color: "Blue",
    size: "L",
    status: "in stock",
    discount: "60 ",
  },
  {
    id: 17,
    imageSrc: img2,
    name: "Men's Dri-FIT T-Shirt",
    price: 290,
    descriptions:
      "Push your limits with Nike's Dri-FIT technology, ensuring every workout is a step towards excellence.",
    category: "Sports",
    color: "Orange",
    size: "M",
    status: "in stock",
    discount: "60 ",
  },
  {
    id: 18,
    imageSrc: img3,
    name: "Kid's Badge of Sport Tee",
    price: 199,
    descriptions:
      "Celebrate the spirit of sport with Adidas' iconic tee, designed for women who play hard and look great.",
    category: "Kids",
    color: "Pink",
    size: "M",
    status: "in stock",
    discount: "60 ",
  },
  {
    id: 19,
    imageSrc: img4,
    name: "Kid's 1950s Sportswear T-Shirt",
    price: 299,
    descriptions:
      "Marrying vintage charm with Levi's quality, this 1950s inspired tee is a nod to the golden age of sportswear.",
    category: "Kids",
    color: "Olive",
    size: "L",
    status: "out of stock",
    discount: "20",
  },
  {
    id: 20,
    imageSrc: img5,
    name: "Kid's Tech 2.0 Short Sleeve T-Shirt",
    price: 399,
    descriptions:
      "Under Armour's Tech 2.0 tee: where modern engineering meets timeless design, ensuring you're always ahead of the game.",
    category: "Kids",
    color: "Gray",
    size: "M",
    status: "out of stock",
    discount: "20",
  },
  {
    id: 21,
    imageSrc: img6,
    name: "Women's Basic Tee, Men's Rebel Bold Tee",
    price: 199,
    descriptions:
      "From casual days to bold statements, H&M's collection has you covered with tees that speak volumes.",
    category: "Casual",
    color: "Green",
    size: "S",
    status: "out of stock",
    discount: "20",
  },
  {
    id: 22,
    imageSrc: img7,
    name: "Kid's Cotton Classic Short Sleeve Crew Neck T-Shirt",
    price: 499,
    descriptions:
      "Comfort has a new name with Puma's classic cotton tee, ensuring you stay relaxed and stylish all day.",
    category: "Kids",
    color: "Red",
    size: "M",
    status: "out of stock",
    discount: "20",
  },
  {
    id: 23,
    imageSrc: img8,
    name: "Kid's Classic Fit Crewneck T-Shirt",
    price: 190,
    descriptions:
      "Experience the luxury of Ralph Lauren with this classic fit tee, tailored for women who appreciate timeless elegance.",
    category: "Kids",
    color: "Black",
    size: "L",
    status: "out of stock",
    discount: "20",
  },
  {
    id: 24,
    imageSrc: img9,
    name: "Elegant Leather Tote",
    price: 380,
    descriptions:
      "A blend of elegance and durability, this leather tote is perfect for both office and casual outings.",
    category: "Bags",
    color: "Brown",
    size: "M",
    status: "in stock",
    discount: "20",
  },
  {
    id: 25,
    imageSrc: img10,
    name: "Sporty Backpack",
    price: 320,
    descriptions:
      "Crafted for adventurers, this backpack comes with multiple compartments to keep your essentials organized.",
    category: "Bags",
    color: "Black",
    size: "L",
    status: "in stock",
    discount: "15 ",
  },
  {
    id: 26,
    imageSrc: img11,
    name: "Classic Crossbody Bag",
    price: 290,
    descriptions:
      "Versatile and chic, this crossbody bag complements any outfit, ensuring you always step out in style.",
    category: "Bags",
    color: "Red",
    size: "S",
    status: "in stock",
    discount: "10 ",
  },
  {
    id: 27,
    imageSrc: img12,
    name: "Travel Duffel Bag",
    price: 350,
    descriptions:
      "Your perfect travel companion, this duffel bag is spacious enough to carry all your essentials for that weekend getaway.",
    category: "Bags",
    color: "Navy",
    size: "L",
    status: "in stock",
    discount: "25 ",
  },
  {
    id: 28,
    imageSrc: img13,
    name: "Bohemian Sling Bag",
    price: 170,
    descriptions:
      "Show off your bohemian side with this vibrant and stylish sling bag, ideal for casual outings.",
    category: "Bags",
    color: "Brown",
    size: "M",
    status: "out of stock",
    discount: "20",
  },
  {
    id: 29,
    imageSrc: img14,
    name: "Nike Bag",
    price: 170,
    descriptions:
      "Show off your bohemian side with this vibrant and stylish sling bag, ideal for casual outings.",
    category: "Bags",
    color: "Brown",
    size: "M",
    status: "out of stock",
    discount: "30",
  },
];


export const ITEMS_PER_PAGE = 6