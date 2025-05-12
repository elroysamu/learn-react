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
          {
            name: "Penne Arrabiata",
            description: "Pasta with spicy tomato sauce",
            price: 270,
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
          {
            name: "Greek Salad",
            description: "Salad with feta cheese and olives",
            price: 160,
            available: true,
          },
        ],
      },
      {
        name: "Desserts",
        items: [
          {
            name: "Tiramisu",
            description: "Coffee-flavored Italian dessert",
            price: 200,
            available: true,
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
          {
            name: "Sweet and Sour Pork",
            description: "Crispy pork with sweet and sour sauce",
            price: 180,
            available: true,
          },
        ],
      },
      {
        name: "Soups",
        items: [
          {
            name: "Hot and Sour Soup",
            description: "Spicy soup with tofu and vegetables",
            price: 130,
            available: true,
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
          {
            name: "Burritos",
            description: "Large flour tortilla with meat and beans",
            price: 220,
            available: true,
          },
        ],
      },
      {
        name: "Sides",
        items: [
          {
            name: "Guacamole & Chips",
            description: "Avocado dip with crispy tortilla chips",
            price: 100,
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
          {
            name: "Chicken Biryani",
            description: "Fragrant rice dish with chicken and spices",
            price: 250,
            available: true,
          },
        ],
      },
      {
        name: "Breads",
        items: [
          {
            name: "Garlic Naan",
            description: "Indian flatbread with garlic",
            price: 60,
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
          {
            name: "Tom Yum Soup",
            description: "Spicy and sour soup with shrimp",
            price: 220,
            available: true,
          },
        ],
      },
      {
        name: "Desserts",
        items: [
          {
            name: "Mango Sticky Rice",
            description: "Sweet rice with coconut milk and mango",
            price: 180,
            available: true,
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
          {
            name: "Tempura",
            description: "Lightly battered and fried seafood and vegetables",
            price: 300,
            available: true,
          },
        ],
      },
      {
        name: "Appetizers",
        items: [
          {
            name: "Edamame",
            description: "Steamed soybeans with sea salt",
            price: 120,
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
          {
            name: "Escargots",
            description: "Snails cooked in garlic butter",
            price: 320,
            available: true,
          },
        ],
      },
      {
        name: "Pastries",
        items: [
          {
            name: "Croissant",
            description: "Flaky buttery pastry",
            price: 100,
            available: true,
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
          {
            name: "Japchae",
            description: "Stir-fried glass noodles with vegetables",
            price: 250,
            available: true,
          },
        ],
      },
      {
        name: "Sides",
        items: [
          {
            name: "Kimchi",
            description: "Spicy fermented cabbage",
            price: 80,
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
          {
            name: "Goi Cuon",
            description: "Fresh spring rolls with shrimp and herbs",
            price: 180,
            available: true,
          },
        ],
      },
      {
        name: "Beverages",
        items: [
          {
            name: "Vietnamese Iced Coffee",
            description: "Strong coffee with condensed milk",
            price: 120,
            available: true,
          },
        ],
      },
    ],
  },
  132: {
    restaurantDetails: {
      name: "Greek Isles",
      description: "Mediterranean tastes from the Greek islands",
      address: "132 Athena Ave, Greece",
    },
    category: [
      {
        name: "Greek Specials",
        items: [
          {
            name: "Gyro Plate",
            description: "Lamb gyro with tzatziki and pita",
            price: 270,
            available: true,
          },
          {
            name: "Moussaka",
            description: "Baked eggplant with meat sauce and béchamel",
            price: 300,
            available: true,
          },
          {
            name: "Dolmades",
            description: "Stuffed grape leaves with rice",
            price: 160,
            available: true,
          },
        ],
      },
      {
        name: "Sides",
        items: [
          {
            name: "Tzatziki with Pita",
            description: "Greek yogurt dip with herbs and garlic",
            price: 100,
            available: true,
          },
        ],
      },
    ],
  },
  133: {
    restaurantDetails: {
      name: "Burger Town",
      description: "Classic and gourmet burgers with sides",
      address: "133 Burger Blvd, USA",
    },
    category: [
      {
        name: "Burgers",
        items: [
          {
            name: "Cheeseburger",
            description: "Beef patty with cheese, lettuce, and tomato",
            price: 180,
            available: true,
          },
          {
            name: "Bacon Double",
            description: "Double beef patties with crispy bacon",
            price: 250,
            available: true,
          },
          {
            name: "Veggie Burger",
            description: "Grilled vegetable patty with avocado",
            price: 160,
            available: false,
          },
        ],
      },
      {
        name: "Sides",
        items: [
          {
            name: "Fries",
            description: "Crispy golden fries",
            price: 80,
            available: true,
          },
        ],
      },
    ],
  },
  134: {
    restaurantDetails: {
      name: "Pizza Planet",
      description: "Out-of-this-world pizza with creative toppings",
      address: "134 Mozzarella Lane, USA",
    },
    category: [
      {
        name: "Pizzas",
        items: [
          {
            name: "Margherita",
            description: "Tomato, mozzarella, and basil",
            price: 200,
            available: true,
          },
          {
            name: "Pepperoni",
            description: "Classic pizza with spicy pepperoni",
            price: 220,
            available: true,
          },
          {
            name: "BBQ Chicken",
            description: "Barbecue sauce base with chicken and onions",
            price: 240,
            available: true,
          },
        ],
      },
      {
        name: "Drinks",
        items: [
          {
            name: "Soda",
            description: "Choice of cola, lemon-lime, or orange",
            price: 60,
            available: true,
          },
        ],
      },
    ],
  },
  135: {
    restaurantDetails: {
      name: "Middle East Feast",
      description: "Aromatic Middle Eastern dishes and grills",
      address: "135 Falafel Way, Lebanon",
    },
    category: [
      {
        name: "Main Dishes",
        items: [
          {
            name: "Shawarma",
            description: "Spiced meat wrap with garlic sauce",
            price: 220,
            available: true,
          },
          {
            name: "Falafel Plate",
            description: "Crispy chickpea fritters with hummus",
            price: 180,
            available: true,
          },
          {
            name: "Kebabs",
            description: "Grilled meat skewers with spices",
            price: 240,
            available: true,
          },
        ],
      },
      {
        name: "Desserts",
        items: [
          {
            name: "Baklava",
            description: "Sweet pastry with nuts and syrup",
            price: 160,
            available: true,
          },
        ],
      },
    ],
  },
  136: {
    restaurantDetails: {
      name: "Caribbean Catch",
      description: "Tropical seafood and island flavors",
      address: "136 Ocean Dr, Jamaica",
    },
    category: [
      {
        name: "Seafood Specials",
        items: [
          {
            name: "Jerk Shrimp",
            description: "Spicy grilled shrimp with Caribbean spices",
            price: 280,
            available: true,
          },
          {
            name: "Grilled Snapper",
            description: "Whole fish with herbs and lime",
            price: 350,
            available: false,
          },
          {
            name: "Coconut Curry Fish",
            description: "Fish fillet in coconut curry sauce",
            price: 300,
            available: true,
          },
        ],
      },
      {
        name: "Appetizers",
        items: [
          {
            name: "Plantain Chips",
            description: "Crispy fried plantains",
            price: 90,
            available: true,
          },
        ],
      },
    ],
  },
  137: {
    restaurantDetails: {
      name: "Soul Kitchen",
      description: "Comfort food from the American South",
      address: "137 Southern Ln, USA",
    },
    category: [
      {
        name: "Southern Comforts",
        items: [
          {
            name: "Fried Chicken",
            description: "Crispy seasoned chicken",
            price: 250,
            available: true,
          },
          {
            name: "Mac & Cheese",
            description: "Creamy cheese pasta",
            price: 180,
            available: true,
          },
          {
            name: "Collard Greens",
            description: "Slow-cooked greens with seasoning",
            price: 120,
            available: true,
          },
        ],
      },
      {
        name: "Desserts",
        items: [
          {
            name: "Peach Cobbler",
            description: "Baked peaches with a biscuit topping",
            price: 160,
            available: true,
          },
        ],
      },
    ],
  },
};

