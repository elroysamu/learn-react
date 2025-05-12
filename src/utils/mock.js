export const listOfRestaurantMock = [
  {
    cloudnaryImageId: "123",
    cloudnaryImageUrl: "https://picsum.photos/201",
    name: "Pasta Paradise",
    cusines: "Italian",
    rating: 4.5,
    isPromoted: true,
  },
  {
    cloudnaryImageId: "124",
    cloudnaryImageUrl: "https://picsum.photos/202",
    name: "Dragon's Delight",
    cusines: "Chinese",
    rating: 4.2,
    isPromoted: false,
  },
  {
    cloudnaryImageId: "125",
    cloudnaryImageUrl: "https://picsum.photos/203",
    name: "Taco Haven",
    cusines: "Mexican",
    rating: 4.8,
    isPromoted: true,
  },
  {
    cloudnaryImageId: "126",
    cloudnaryImageUrl: "https://picsum.photos/204",
    name: "Curry Kingdom",
    cusines: "Indian",
    rating: 4.6,
    isPromoted: false,
  },
  {
    cloudnaryImageId: "127",
    cloudnaryImageUrl: "https://picsum.photos/205",
    name: "Thai Spice",
    cusines: "Thai",
    rating: 4.3,
    isPromoted: true,
  },
  {
    cloudnaryImageId: "128",
    cloudnaryImageUrl: "https://picsum.photos/206",
    name: "Sushi World",
    cusines: "Japanese",
    rating: 4.7,
    isPromoted: false,
  },
  {
    cloudnaryImageId: "129",
    cloudnaryImageUrl: "https://picsum.photos/207",
    name: "Parisian Bistro",
    cusines: "French",
    rating: 4.4,
    isPromoted: true,
  },
  {
    cloudnaryImageId: "130",
    cloudnaryImageUrl: "https://picsum.photos/208",
    name: "Seoul Kitchen",
    cusines: "Korean",
    rating: 4.6,
    isPromoted: false,
  },
  {
    cloudnaryImageId: "131",
    cloudnaryImageUrl: "https://picsum.photos/209",
    name: "Pho Haven",
    cusines: "Vietnamese",
    rating: 4.5,
    isPromoted: true,
  },
  {
    cloudnaryImageId: "132",
    cloudnaryImageUrl: "https://picsum.photos/210",
    name: "Greek Taverna",
    cusines: "Greek",
    rating: 4.3,
    isPromoted: false,
  },
  {
    cloudnaryImageId: "133",
    cloudnaryImageUrl: "https://picsum.photos/211",
    name: "Paella Palace",
    cusines: "Spanish",
    rating: 4.2,
    isPromoted: true,
  },
  {
    cloudnaryImageId: "134",
    cloudnaryImageUrl: "https://picsum.photos/212",
    name: "Turkish Delight",
    cusines: "Turkish",
    rating: 4.7,
    isPromoted: false,
  },
  {
    cloudnaryImageId: "135",
    cloudnaryImageUrl: "https://picsum.photos/213",
    name: "Lebanese Feast",
    cusines: "Lebanese",
    rating: 4.8,
    isPromoted: true,
  },
  {
    cloudnaryImageId: "136",
    cloudnaryImageUrl: "https://picsum.photos/214",
    name: "Burger Bliss",
    cusines: "American",
    rating: 4.5,
    isPromoted: false,
  },
  {
    cloudnaryImageId: "137",
    cloudnaryImageUrl: "https://picsum.photos/215",
    name: "Mediterranean Table",
    cusines: "Mediterranean",
    rating: 3.6,
    isPromoted: true,
  },
];

export const restaurantMenusMock = {
  123: {
    restaurantDetails: {
      name: "Pasta Paradise",
      description: "Delicious pasta dishes with a variety of sauces",
      address: "123 Pasta St, Italy",
    },
    category: [
      {
        name: "Pasta Dishes",
        items: [
          {
            name: "Spaghetti Carbonara",
            description: "Classic Italian pasta with eggs and cheese",
            price: 250,
            available: true,
          },
          {
            name: "Fettuccine Alfredo",
            description: "Creamy pasta with parmesan cheese",
            price: 300,
            available: true,
          },
        ],
      },
      {
        name: "Salads",
        items: [
          {
            name: "Caesar Salad",
            description: "Romaine lettuce with Caesar dressing",
            price: 150,
            available: true,
          },
          {
            name: "Caprese Salad",
            description: "Fresh mozzarella, tomatoes, and basil",
            price: 180,
            available: false,
          },
        ],
      },
    ],
  },
  124: {
    restaurantDetails: {
      name: "Dragon's Delight",
      description: "Traditional Chinese cuisine with modern flair",
      address: "124 Dragon Rd, China Town",
    },
    category: [
      {
        name: "Main Courses",
        items: [
          {
            name: "Kung Pao Chicken",
            description: "Spicy stir-fried chicken with peanuts and vegetables",
            price: 220,
            available: true,
          },
          {
            name: "Spring Rolls",
            description: "Crispy vegetable rolls with sweet chili dip",
            price: 120,
            available: false,
          },
        ],
      },
    ],
  },
  125: {
    restaurantDetails: {
      name: "Taco Haven",
      description: "Authentic Mexican street food and favorites",
      address: "125 Taco Blvd, Mexico City",
    },
    category: [
      {
        name: "Tacos & Quesadillas",
        items: [
          {
            name: "Tacos al Pastor",
            description: "Spicy pork tacos with pineapple",
            price: 200,
            available: true,
          },
          {
            name: "Quesadillas",
            description: "Grilled tortillas with cheese and peppers",
            price: 180,
            available: true,
          },
        ],
      },
    ],
  },
  126: {
    restaurantDetails: {
      name: "Curry Kingdom",
      description: "Rich and spicy Indian curry dishes",
      address: "126 Masala Lane, India",
    },
    category: [
      {
        name: "Curries & Tandoor",
        items: [
          {
            name: "Butter Chicken",
            description: "Creamy tomato chicken curry",
            price: 220,
            available: true,
          },
          {
            name: "Paneer Tikka",
            description: "Grilled cottage cheese with spices",
            price: 190,
            available: true,
          },
        ],
      },
    ],
  },
  127: {
    restaurantDetails: {
      name: "Thai Spice",
      description: "Flavors of Thailand, spicy and savory",
      address: "127 Bangkok Blvd, Thailand",
    },
    category: [
      {
        name: "Thai Specials",
        items: [
          {
            name: "Pad Thai",
            description: "Stir-fried noodles with shrimp and peanuts",
            price: 240,
            available: true,
          },
          {
            name: "Green Curry",
            description: "Thai green curry with chicken and coconut milk",
            price: 260,
            available: false,
          },
        ],
      },
    ],
  },
  128: {
    restaurantDetails: {
      name: "Sushi World",
      description: "Authentic Japanese sushi and ramen",
      address: "128 Tokyo St, Japan",
    },
    category: [
      {
        name: "Japanese Delights",
        items: [
          {
            name: "Sushi Platter",
            description: "Assorted nigiri and maki rolls",
            price: 400,
            available: true,
          },
          {
            name: "Ramen Bowl",
            description: "Pork bone broth with noodles and egg",
            price: 350,
            available: true,
          },
        ],
      },
    ],
  },
  129: {
    restaurantDetails: {
      name: "Parisian Bistro",
      description: "Elegant French cuisine and pastries",
      address: "129 Rue de Paris, France",
    },
    category: [
      {
        name: "French Cuisine",
        items: [
          {
            name: "Coq au Vin",
            description: "Chicken braised in red wine",
            price: 450,
            available: true,
          },
          {
            name: "Crepes Suzette",
            description: "French pancakes with orange liqueur",
            price: 280,
            available: false,
          },
        ],
      },
    ],
  },
  130: {
    restaurantDetails: {
      name: "Seoul Kitchen",
      description: "Home-style Korean meals and comfort food",
      address: "130 Seoul Rd, South Korea",
    },
    category: [
      {
        name: "Korean Dishes",
        items: [
          {
            name: "Bibimbap",
            description: "Mixed rice with vegetables and egg",
            price: 300,
            available: true,
          },
          {
            name: "Kimchi Stew",
            description: "Fermented cabbage stew with pork",
            price: 270,
            available: true,
          },
        ],
      },
    ],
  },
  131: {
    restaurantDetails: {
      name: "Pho Haven",
      description: "Comforting Vietnamese noodle soups and sandwiches",
      address: "131 Pho Street, Vietnam",
    },
    category: [
      {
        name: "Vietnamese Flavors",
        items: [
          {
            name: "Pho",
            description: "Vietnamese noodle soup with beef",
            price: 250,
            available: true,
          },
          {
            name: "Banh Mi",
            description: "French baguette with pork and pickled veggies",
            price: 200,
            available: false,
          },
        ],
      },
    ],
  },
  132: {
    restaurantDetails: {
      name: "Greek Taverna",
      description: "Mediterranean flavors with Greek traditions",
      address: "132 Athens Ave, Greece",
    },
    category: [
      {
        name: "Greek Favorites",
        items: [
          {
            name: "Moussaka",
            description: "Baked eggplant and meat casserole",
            price: 280,
            available: true,
          },
          {
            name: "Greek Salad",
            description: "Salad with feta cheese and olives",
            price: 150,
            available: true,
          },
        ],
      },
    ],
  },
  133: {
    restaurantDetails: {
      name: "Paella Palace",
      description: "Spanish rice dishes and desserts",
      address: "133 Valencia Rd, Spain",
    },
    category: [
      {
        name: "Spanish Specials",
        items: [
          {
            name: "Paella",
            description: "Spanish rice with seafood and saffron",
            price: 300,
            available: true,
          },
          {
            name: "Churros",
            description: "Fried dough with chocolate dip",
            price: 140,
            available: false,
          },
        ],
      },
    ],
  },
  134: {
    restaurantDetails: {
      name: "Turkish Delight",
      description: "Hearty Turkish meals and desserts",
      address: "134 Istanbul St, Turkey",
    },
    category: [
      {
        name: "Turkish Dishes",
        items: [
          {
            name: "Doner Kebab",
            description: "Grilled meat with veggies in flatbread",
            price: 220,
            available: true,
          },
          {
            name: "Baklava",
            description: "Layered pastry with nuts and syrup",
            price: 160,
            available: true,
          },
        ],
      },
    ],
  },
  135: {
    restaurantDetails: {
      name: "Lebanese Feast",
      description: "Delicious Lebanese food for all appetites",
      address: "135 Beirut Ave, Lebanon",
    },
    category: [
      {
        name: "Middle Eastern",
        items: [
          {
            name: "Shawarma Plate",
            description: "Grilled meat with hummus and salad",
            price: 240,
            available: true,
          },
          {
            name: "Falafel Wrap",
            description: "Chickpea balls in pita bread",
            price: 180,
            available: true,
          },
        ],
      },
    ],
  },
  136: {
    restaurantDetails: {
      name: "Burger Bliss",
      description: "Juicy burgers and American sides",
      address: "136 Burger Ln, USA",
    },
    category: [
      {
        name: "American Grill",
        items: [
          {
            name: "Cheeseburger",
            description: "Grilled beef patty with cheese",
            price: 230,
            available: true,
          },
          {
            name: "Buffalo Wings",
            description: "Spicy chicken wings with ranch",
            price: 200,
            available: false,
          },
        ],
      },
    ],
  },
  137: {
    restaurantDetails: {
      name: "Mediterranean Table",
      description: "Fresh, healthy Mediterranean meals",
      address: "137 Med Rd, Coastline",
    },
    category: [
      {
        name: "Mediterranean Cuisine",
        items: [
          {
            name: "Grilled Sea Bass",
            description: "Herbed fish with lemon sauce",
            price: 350,
            available: true,
          },
          {
            name: "Mediterranean Mezze",
            description: "Assorted dips and bread",
            price: 280,
            available: true,
          },
        ],
      },
    ],
  },
};
