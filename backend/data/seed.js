const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Neighborhood = require('../models/Neighborhood');

dotenv.config();

const data = [
  {
    name: "Kondapur",
    city: "Hyderabad",
    safety: 4,
    affordability: 3,
    publicTransport: 5,
    greenery: 2,
    walkability: 4
  },
  {
    name: "Gachibowli",
    city: "Hyderabad",
    safety: 3,
    affordability: 4,
    publicTransport: 4,
    greenery: 3,
    walkability: 4
  },
  {
    name: "Indiranagar",
    city: "Bangalore",
    safety: 4,
    affordability: 2,
    publicTransport: 5,
    greenery: 3,
    walkability: 5
  },
  {
    name: "Whitefield",
    city: "Bangalore",
    safety: 3,
    affordability: 4,
    publicTransport: 3,
    greenery: 4,
    walkability: 3
  },
  {
    name: "Bandra",
    city: "Mumbai",
    safety: 3,
    affordability: 2,
    publicTransport: 5,
    greenery: 3,
    walkability: 4
  },
  {
    name: "Borivali",
    city: "Mumbai",
    safety: 4,
    affordability: 3,
    publicTransport: 4,
    greenery: 5,
    walkability: 3
  }
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Neighborhood.deleteMany({});
    await Neighborhood.insertMany(data);
    console.log("Database seeded!");
    process.exit();
  })
  .catch(err => console.log(err));
