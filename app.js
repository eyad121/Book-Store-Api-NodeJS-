'use strict';
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const { sequelize } = require('./models');
const app = express();
const PORT = process.env.PORT || 3000;
const userRoutes = require('./routes/UserRoutes');
const bookRoutes = require('./routes/BookRoutes');
const orderRoutes = require('./routes/OrderRoutes');
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json());
app.use('/users', userRoutes);
app.use('/books', bookRoutes);
app.use('/orders', orderRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.json({ success: true, 
    dbUser: process.env.DB_DIALECT, 
    message: 'sequelize app running'});  
});

app.use(errorHandler);

async function startServer() {
    try{
        await sequelize.authenticate();
        console.log("The Sequelize is running correct", sequelize.config.database);

        await sequelize.sync({ alter: true });
        console.log("database synced");

        app.listen(PORT, () => {
        console.log(`The Server on ${PORT}`); 
    });}
    catch(err){
        console.error('connection failed', err.message);
    }
}
startServer();

