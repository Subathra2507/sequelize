const User = require('../models/user');
exports.createUser = async( req, res) => {
    try{
        const { name,email } = req.body;
       const user = await User.create({ name, email});
       res.status(201).json({
        message: 'User created successfully',
        data: user
       });

    } catch(error){
        res.status(500).json({error: error.message});
    }
};

exports.findAllUser = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json({
      message: 'Users retrieved successfully',
      data: users
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.findOneUser = async (req, res) => {
 try{
  const user = await User.findByPk(req.params.id);
  if(!user){
    return res.status(404).json({
      error:'User not found'
    });
  }
 res.status(200).json({
  message: 'User retrieved successfully',
  data: user
 });
 }catch(error){
  res.status(500).json({
    error: error.message
  });
 }
};
  
  exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    await user.update(req.body);
    res.status(200).json({
      message: 'User updated successfully',
      data: user
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
  
  exports.removeUser = async (req, res) => {
  try {
    const deleted = await User.destroy({ where: { id: req.params.id } });
    if (!deleted) {
      return res.status(404).json({ error: 'User not found or already deleted' });
    }
    res.status(200).json({
      message: 'User deleted successfully',
      deleted: deleted
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};