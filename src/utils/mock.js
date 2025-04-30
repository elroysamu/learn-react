export const listOfRestaurantMock = [
    {
        cloudnaryImageId: "123",
        cloudnaryImageUrl: "https://picsum.photos/201",
        name: "Sunset Over the Hills",
        cusines: "Italian",
        rating: 4.5,
        deliveryTime: 30,
        costForTwo: 500
    },
    {
        cloudnaryImageId: "124",
        cloudnaryImageUrl: "https://picsum.photos/202",
        name: "Serene Lake View",
        cusines: "Chinese",
        rating: 4.2,
        deliveryTime: 25,
        costForTwo: 400
    },
    {
        cloudnaryImageId: "125",
        cloudnaryImageUrl: "https://picsum.photos/203",
        name: "Golden Beach Sunrise",
        cusines: "Mexican",
        rating: 4.8,
        deliveryTime: 35,
        costForTwo: 600
    },
    {
        cloudnaryImageId: "126",
        cloudnaryImageUrl: "https://picsum.photos/204",
        name: "Majestic Mountain Peaks",
        cusines: "Indian",
        rating: 4.6,
        deliveryTime: 20,
        costForTwo: 300
    },
    {
        cloudnaryImageId: "127",
        cloudnaryImageUrl: "https://picsum.photos/205",
        name: "Blossoming Cherry Trees",
        cusines: "Thai",
        rating: 4.3,
        deliveryTime: 40,
        costForTwo: 550
    },
    {
        cloudnaryImageId: "128",
        cloudnaryImageUrl: "https://picsum.photos/206",
        name: "Tranquil Forest Path",
        cusines: "Japanese",
        rating: 4.7,
        deliveryTime: 45,
        costForTwo: 700
    },
    {
        cloudnaryImageId: "129",
        cloudnaryImageUrl: "https://picsum.photos/207",
        name: "Charming Countryside",
        cusines: "French",
        rating: 4.4,
        deliveryTime: 50,
        costForTwo: 800
    },
    {
        cloudnaryImageId: "130",
        cloudnaryImageUrl: "https://picsum.photos/208",
        name: "Vibrant City Lights",
        cusines: "Korean",
        rating: 4.6,
        deliveryTime: 28,
        costForTwo: 450
    },
    {
        cloudnaryImageId: "131",
        cloudnaryImageUrl: "https://picsum.photos/209",
        name: "Peaceful Ocean Waves",
        cusines: "Vietnamese",
        rating: 4.5,
        deliveryTime: 32,
        costForTwo: 500
    },
    {
        cloudnaryImageId: "132",
        cloudnaryImageUrl: "https://picsum.photos/210",
        name: "Rustic Village Charm",
        cusines: "Greek",
        rating: 4.3,
        deliveryTime: 38,
        costForTwo: 550
    },
    {
        cloudnaryImageId: "133",
        cloudnaryImageUrl: "https://picsum.photos/211",
        name: "Golden Desert Dunes",
        cusines: "Spanish",
        rating: 4.2,
        deliveryTime: 26,
        costForTwo: 400
    },
    {
        cloudnaryImageId: "134",
        cloudnaryImageUrl: "https://picsum.photos/212",
        name: "Enchanting Waterfall",
        cusines: "Turkish",
        rating: 4.7,
        deliveryTime: 33,
        costForTwo: 600
    },
    {
        cloudnaryImageId: "135",
        cloudnaryImageUrl: "https://picsum.photos/213",
        name: "Lush Green Meadows",
        cusines: "Lebanese",
        rating: 4.8,
        deliveryTime: 29,
        costForTwo: 500
    },
    {
        cloudnaryImageId: "136",
        cloudnaryImageUrl: "https://picsum.photos/214",
        name: "Snowy Winter Wonderland",
        cusines: "American",
        rating: 4.5,
        deliveryTime: 31,
        costForTwo: 450
    },
    {
        cloudnaryImageId: "137",
        cloudnaryImageUrl: "https://picsum.photos/215",
        name: "Mediterranean Sunset",
        cusines: "Mediterranean",
        rating: 3.6,
        deliveryTime: 27,
        costForTwo: 400
    }
];

export const restaurantMenusMock = {
    "123": [
        { name: "Spaghetti Carbonara", description: "Creamy pasta with pancetta and parmesan", price: 250, available: true },
        { name: "Margherita Pizza", description: "Classic pizza with fresh mozzarella and basil", price: 300, available: true }
    ],
    "124": [
        { name: "Kung Pao Chicken", description: "Spicy stir-fried chicken with peanuts and vegetables", price: 220, available: true },
        { name: "Spring Rolls", description: "Crispy vegetable rolls with sweet chili dip", price: 120, available: false }
    ],
    "125": [
        { name: "Tacos al Pastor", description: "Spicy pork tacos with pineapple", price: 200, available: true },
        { name: "Quesadillas", description: "Grilled tortillas with cheese and peppers", price: 180, available: true }
    ],
    "126": [
        { name: "Butter Chicken", description: "Creamy tomato chicken curry", price: 220, available: true },
        { name: "Paneer Tikka", description: "Grilled cottage cheese with spices", price: 190, available: true }
    ],
    "127": [
        { name: "Pad Thai", description: "Stir-fried noodles with shrimp and peanuts", price: 240, available: true },
        { name: "Green Curry", description: "Thai green curry with chicken and coconut milk", price: 260, available: false }
    ],
    "128": [
        { name: "Sushi Platter", description: "Assorted nigiri and maki rolls", price: 400, available: true },
        { name: "Ramen Bowl", description: "Pork bone broth with noodles and egg", price: 350, available: true }
    ],
    "129": [
        { name: "Coq au Vin", description: "Chicken braised in red wine", price: 450, available: true },
        { name: "Crepes Suzette", description: "French pancakes with orange liqueur", price: 280, available: false }
    ],
    "130": [
        { name: "Bibimbap", description: "Mixed rice with vegetables and egg", price: 300, available: true },
        { name: "Kimchi Stew", description: "Fermented cabbage stew with pork", price: 270, available: true }
    ],
    "131": [
        { name: "Pho", description: "Vietnamese noodle soup with beef", price: 250, available: true },
        { name: "Banh Mi", description: "French baguette with pork and pickled veggies", price: 200, available: false }
    ],
    "132": [
        { name: "Moussaka", description: "Baked eggplant and meat casserole", price: 280, available: true },
        { name: "Greek Salad", description: "Salad with feta cheese and olives", price: 150, available: true }
    ],
    "133": [
        { name: "Paella", description: "Spanish rice with seafood and saffron", price: 300, available: true },
        { name: "Churros", description: "Fried dough with chocolate dip", price: 140, available: false }
    ],
    "134": [
        { name: "Doner Kebab", description: "Grilled meat with veggies in flatbread", price: 220, available: true },
        { name: "Baklava", description: "Layered pastry with nuts and syrup", price: 160, available: true }
    ],
    "135": [
        { name: "Shawarma Plate", description: "Grilled meat with hummus and salad", price: 240, available: true },
        { name: "Falafel Wrap", description: "Chickpea balls in pita bread", price: 180, available: true }
    ],
    "136": [
        { name: "Cheeseburger", description: "Grilled beef patty with cheese", price: 230, available: true },
        { name: "Buffalo Wings", description: "Spicy chicken wings with ranch", price: 200, available: false }
    ],
    "137": [
        { name: "Grilled Sea Bass", description: "Herbed fish with lemon sauce", price: 350, available: true },
        { name: "Mediterranean Mezze", description: "Assorted dips and bread", price: 280, available: true }
    ]
};
