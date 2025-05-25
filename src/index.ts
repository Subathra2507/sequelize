import { sequelize } from "./config/db";
import  userRoutes from "./routes/userRoutes";
import express from 'express';



const app = express();

app.use(express.json());
app.use('/api/users',userRoutes);
// Sequelize DB connection
const port = 3000;

sequelize.sync()
  .then(() => {
    console.log("DB Synced...");
    app.listen(port, () => {
      console.log(`Server running at ${port}`);
    });
  })
  .catch((err: unknown) => {
    console.log("Failed to Sync", err);
  });






















