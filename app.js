require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const cookieParser = require('cookie-parser');
const {writeUsers } = require('./services/userService');


app.use(express.json());
app.use(cookieParser());


const recipeRoutes = require('./routes/recipeRoutes');
app.use('/api/recipes', recipeRoutes);
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes)
const cookBookRoutes = require('./routes/cookBookRoutes');
app.use('/api/cookbooks', cookBookRoutes)
const menuRoutes = require('./routes/menuRoutes');
app.use('/api/menus', menuRoutes)
const cookBook_RecipeRoutes = require('./routes/cookBook_RecipeRoutes');
app.use('/api/cookBook_Recipes', cookBook_RecipeRoutes)
const autentificationRoute = require('./routes/autentificationRoute');
app.use('/api/autentification', autentificationRoute)


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
