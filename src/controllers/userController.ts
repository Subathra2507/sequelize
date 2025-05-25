import { InterfaceUser, InterfaceUser2 } from '../interfaces/userInterfaces';
import { User }  from '../models/userModel';
import { Request,Response } from 'express';
//import * as userRoutes from '../routes/userRoutes';




//Fetching All User 

export const findAllUser = async(req: Request, res: Response) : Promise<void>=>{
  try{
       const users:InterfaceUser[] = await User.findAll();
       res.json(users);
       res.status(200).json({message:"User successfully retrieved",users});
  }catch(err){
    console.error(err);
    res.status(500).json({ error:"Failed to fetch users details"});
  }
};

//Create User 

export const createUser = async(req: Request, res: Response): Promise<any>=>{
  const {id,name,address } = req.body;

  try{
    const newUsers:InterfaceUser = await User.create({ id,name,address});

    res.status(201).json({message:"User created successfully",newUsers});
  }catch(err){
    console.error(err);
    res.status(500).json({error:"Does not create new user"});
  }
};

//Fetchone User 

export const findOneUser = async(req: Request, res: Response):Promise<any>=>{
const{ id } = req.params;

try{
  const user : InterfaceUser | null= await User.findByPk(id);
  if(!user){
      return  res.status(404).json({error:" User not found"});
  }
  res.json({user});
  res.status(201).json({message:" User successfully retrieved",user})
}catch(err){
  console.error(err);
  res.status(500).json({error: "Could not retrieve data"});
}
  
};

//Update User details 

export const updateUser = async(req:Request, res:Response):Promise<any>=>{
  const { id } = req.params;
  const {name, address} = req.body;

  try{
    const user: InterfaceUser2|null = await User.findByPk(id);

    if(!user){
      return res.status(404).json({error:"User not found"});
    }
    await user.update({
      name,
      address
    });
    res.json({message:"User successfully updated",user});
  }catch(err){
    console.error(err);
    res.status(500).json({message:"Could not updated User"});
    }
};

//Delete User

export const deleteUser = async(req: Request, res: Response):Promise<any>=>{
  const {id} = req.params;

  try{
    const user = await User.findByPk(id);
    if(!user){
      return res.status(404).json({error:"User not found"});
    }
    await user.destroy();
    res.json({message:"Successfully deleted"});
  }catch(err){
    console.error(err);
    res.status(500).json({error:"could not deleted user"});
  }
};













  
