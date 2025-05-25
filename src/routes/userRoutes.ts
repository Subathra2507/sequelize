

import  express from 'express';
import Sequelize from "sequelize";
import * as userController from '../controllers/userController'


const router = express.Router();
router.get('/', userController.findAllUser);
router.get('/:id',userController.findOneUser);
router.post('/',userController.createUser);
router.put('/:id',userController.updateUser);
router.delete('/:id',userController.deleteUser);


export default router;