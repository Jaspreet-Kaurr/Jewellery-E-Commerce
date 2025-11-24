// Logic for handling requests (e.g., createUser, loginUser).

const userService = require("../services/user.service.js");


// using split to get token from  "Bearer token"  -->  [Bearer, token] --> [1] = token
const getUserProfile = async (req, res) => {
    try {
        const jwt = req.headers.authorization.split(' ')[1];

        if (!jwt) {
            return res.status(401).send({message: 'Authorization token missing'});
        }

        const user = await userService.getUserProfileByToken(jwt);
        return res.status(200).send({user});
    } 
    catch (error) {
        return res.status(500).send({error: error.message});
    }
};



 const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();  
        return res.status(200).send({users});
    }   
    catch (error) {
        return res.status(500).send({error: error.message});
    }
};



module.exports = {
    getUserProfile,
    getAllUsers
};