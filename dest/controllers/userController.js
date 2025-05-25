"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.findOneUser = exports.createUser = exports.findAllUser = void 0;
const userModel_1 = require("../models/userModel");
//import * as userRoutes from '../routes/userRoutes';
//Fetching All User 
const findAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userModel_1.User.findAll();
        res.json(users);
        res.status(200).json({ message: "User successfully retrieved", users });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch users details" });
    }
});
exports.findAllUser = findAllUser;
//Create User 
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, name, address } = req.body;
    try {
        const newUsers = yield userModel_1.User.create({ id, name, address });
        res.status(201).json({ message: "User created successfully", newUsers });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Does not create new user" });
    }
});
exports.createUser = createUser;
//Fetchone User 
const findOneUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield userModel_1.User.findByPk(id);
        if (!user) {
            return res.status(404).json({ error: " User not found" });
        }
        res.json({ user });
        res.status(201).json({ message: " User successfully retrieved", user });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Could not retrieve data" });
    }
});
exports.findOneUser = findOneUser;
//Update User details 
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, address } = req.body;
    try {
        const user = yield userModel_1.User.findByPk(id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        yield user.update({
            name,
            address
        });
        res.json({ message: "User successfully updated", user });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Could not updated User" });
    }
});
exports.updateUser = updateUser;
//Delete User
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield userModel_1.User.findByPk(id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        yield user.destroy();
        res.json({ message: "Successfully deleted" });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "could not deleted user" });
    }
});
exports.deleteUser = deleteUser;
