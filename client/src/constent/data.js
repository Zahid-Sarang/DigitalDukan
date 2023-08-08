// import cap from "../assets/festured/2.webp";
// import shoes from "../assets/festured/3.webp";
// import glasses from "../assets/festured/4.webp";
// import watch from "../assets/festured/5.webp";

const featuredCardData = [
  {
    id: 1,
    discount: "15%",
    image: require("../assets/festured/2.webp"),
    title: "Adidas Woolen Cap",
    descriptions:
      "Casual wear (casual attire or clothing) may be a Western code that’s relaxed, occasional, spontaneous and fitted to everyday use. Casual wear became popular within the Western world following the counterculture of the 1960s.",
    actualPrice: "$100",
    discountPrice: "$85",
  },
  {
    id: 2,
    discount: "50%",
    image: require("../assets/festured/3.webp"),
    title: "Nike Leader VT",
    descriptions:
      "Footwear refers to garments worn on the feet, which originally serves to purpose of protection against adversities of the environment, usually regarding ground textures and temperature.",
    actualPrice: "$200",
    discountPrice: "$100",
  },
  {
    id: 3,
    discount: "30%",
    image: require("../assets/festured/4.webp"),
    title: "Ray ban Aviator",
    descriptions:
      "Polarized sunglasses reduce glare reflected off of roads, bodies of water, snow and other horizontal surfaces.Restore true color.Vision lenses are 400UV rated, meaning it can block UVA and UVB radiation.",
    actualPrice: "$850",
    discountPrice: "$595",
  },
  {
    id: 3,
    discount: "40%",
    image: require("../assets/festured/5.webp"),
    title: "Tissot Classic",
    descriptions:
      "The new-model Submariner now features Rolex’s powerhouse calibre 3235 Perpetual movement. An upgrade from the calibre 3135 movement,",
    actualPrice: "$1000",
    discountPrice: "$600",
  },
  // Add more objects as needed for each card
];

export default featuredCardData;
