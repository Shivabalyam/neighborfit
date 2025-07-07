const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const matchRoutes = require('./routes/match');


const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/match', matchRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch(err => console.log(err));


app.get('/', (req, res) => {
  res.send(' NeighborFit backend is running');
});
  