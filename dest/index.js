"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./config/db");
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/users', userRoutes_1.default);
// Sequelize DB connection
const port = 3000;
db_1.sequelize.sync()
    .then(() => {
    console.log("DB Synced...");
    app.listen(port, () => {
        console.log(`Server running at ${port}`);
    });
})
    .catch((err) => {
    console.log("Failed to Sync", err);
});
