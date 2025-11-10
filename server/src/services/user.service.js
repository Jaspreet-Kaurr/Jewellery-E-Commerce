const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwtProvider = require("../config/jwtProvider.js");


const createUser = async (userData) => {
  // Logic to create a new user
  try {
    let {firstName, lastName, email, password} = userData;

    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      throw new Error('User already exists with this email :' ,email);
    }

    password = await bcrypt.hash(password, 8);

    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
    });

    return user;

  } catch (error) {

    throw new Error('Error creating user: ' + error.message);

  }

};



const findUserById = async (userId) => {
  // Logic to find a user by ID
  try {
    const user = await User.findById(userId).populate('address');
    if (!user) {
      throw new Error('User not found with ID: ' , userId);
    }
    return user;

  } catch (error) {
    throw new Error('Error finding user: ' + error.message);
  }
};  



const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({email});
    if (!user) {
      throw new Error('User not found with email : ' + email);
    }
    return user;
    
  } catch (error) {
    throw new Error('Error finding user: ' + error.message);
  }
};



const getUserProfileByToken = async (token) => {
    try {
        const userId = jwtProvider.getUserIdFromToken(token);
        // findUserById is defined above
        const user = await findUserById(userId);

        if (!user) {
            throw new Error('User not found with id: ' , userId);
        }

        return user;

    } catch (error) {
        throw new Error('Error getting user profile: ' , error.message);
    }
}




const getAllUsers = async () => {
    try {
        const users = await User.find();
        return users;
    }
    catch (error) {
        throw new Error('Error getting all users: ' + error.message);
    }
};


module.exports = {
    createUser,
    findUserById,
    getUserByEmail,
    getUserProfileByToken,
    getAllUsers,
};