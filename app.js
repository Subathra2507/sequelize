const express = require('express');
const app = express();
const sequelize = require('./sequalizeConfig');
const userRoutes = require('./routes/user');

app.use(express.json());
app.use('/users', userRoutes);

// Sequelize DB connection
sequelize.sync().then(() => {
  console.log('Database connected and synced');
  app.listen(3000, () => console.log('Server running at http://localhost:3000'));
}).catch(err => console.error('DB Error:', err));
