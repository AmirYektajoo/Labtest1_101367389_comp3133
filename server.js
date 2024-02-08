const express = require('express');
const dotenv = require('dotenv');
const { chats } = require('./data/data');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');


dotenv.config();

connectDB();
const app = express();

app.use(express.json()); // to accept json data in the body

app.get("/", (req, res) => {
    res.send('API is running sucessfully.');
})

app.use('/api/user', userRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 8081;

app.listen(8081, console.log(`Server is running on port ${PORT}`));