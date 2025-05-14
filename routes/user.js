const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', userController.createUser);
router.get('/', userController.findAllUser);
router.get('/:id', userController.findOneUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.removeUser);

module.exports = router;
