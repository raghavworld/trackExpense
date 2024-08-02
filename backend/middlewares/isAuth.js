const jwt = require("jsonwebtoken");

const isTokenValid = async (req, res, next) => {
  console.log('auth',req.headers.authorization) //deBug
  if(!req?.headers?.authorization){
    throw new Error('authourization error')
  }
  
  const token = req.headers.authorization.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "Unauthorized" });
  }
  const tokenData = jwt.verify(token, "loginToken", (err, decoded) => {
    if (err) {
      console.log(err);
    } else {
      return decoded;
    }
  });
  if (!tokenData) {
    res.json({ message: "Unauthorized" });
  }
console.log(tokenData);
  req.user = tokenData;
  next();
};
module.exports = isTokenValid;