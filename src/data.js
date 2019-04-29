let initialItems = [
  {
    description: "Nice boats. 50% off. wow.",
    price: 10000,
    image: "/boat.png",
    id: "asewq",
    sellerId: "ewio",
    avail: "5 available"
  },
  {
    id: "wqwasq",
    description: "Lawn chairs",
    price: 50,
    image: "/lawnchair.jpg",
    sellerId: "xcvb",
    avail: "2 available"
  },
  {
    id: "fdsw",
    description: "body pillow",
    price: 30,
    image: "/pillow.jpg",
    sellerId: "xcvb",
    avail: "1 available"
  },
  {
    id: "gtlwk",
    description: "a cat tree",
    price: "negotiable",
    image: "/cattree.jpg",
    sellerId: "lmno",
    avail: "1 available"
  },
  {
    id: "welkd",
    description: "an ice cube tray",
    price: 10,
    image: "/tray.jpg",
    sellerId: "ewio",
    avail: "4 availabe"
  }
];

let initialSellers = [
  { name: "Jack Frost", id: "ewio", rating: "5 stars" },
  {
    id: "xcvb",
    name: "Hank Green",
    rating: "2 stars"
  },
  {
    name: "Sally Field",
    id: "lmno",
    rating: "4 stars"
  }
];

let reviews = [
  {
    itemId: "asewq",
    reviewerId: "125",
    description: "Felt like a high roller. Wish it came with staff though."
  },
  {
    itemId: "wqwasq",
    reviewerId: "567",
    description: "I had a hole in mine when I received it. Wouldn't buy again!!"
  },
  {
    itemId: "xcvb",
    reviewerId: "125",
    description: "More firm that I was expecting. Good for the laughs though."
  },
  {
    itemId: "gtlwk",
    reviewerId: "567",
    description: "Mr. Winkle loves this tree! Super happy with my purchase."
  }
];

let reviewers = [
  {
    id: "125",
    name: "Bobby Flay",
    bio: "Love the highlife. Buy a lot of stuff. Trust my opinion."
  },
  {
    id: "567",
    name: "Matilda Brown",
    bio: "Loves cats and the outdoors. Stickler for quality."
  }
];

export { initialItems, initialSellers, reviews, reviewers };
