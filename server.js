const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const secretKey = process.env.JWT_SECRET_KEY;

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

const mongoURI = 'mongodb+srv://suhas:Suhas09%40135@cluster0.5y6hqvt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  appName: 'Your App Name'
})
  .then(() => console.log('MongoDB Atlas connected'))
  .catch(err => console.log(err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Routes
const eventsRouter = require('./routes/events');
const authRouter = require('./routes/auth');

app.use('/api/events', eventsRouter);
app.use('/api/auth', authRouter);


