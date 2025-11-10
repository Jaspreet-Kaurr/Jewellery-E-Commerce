
const jwt =  require('jsonwebtoken');


const generateToken = (userId) => {
    // Logic to generate JWT token
  
    // In JS , if key and value are same , we can just write once
    // const token = jwt.sign({userId : userId}, process.env.JWT_SECRET, {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
      expiresIn: '48h', // Token validity period
    });
    return token;
}


const getUserIdFromToken = (token) => {
    // Logic to decode JWT token and get user ID
    try {               
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        return decodedToken.userId;
    } catch (error) {
        throw new Error('Invalid token: ' + error.message);
    }
};


module.exports = {
    generateToken,
    getUserIdFromToken,
};