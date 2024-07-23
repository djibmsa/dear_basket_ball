const argon2 = require('argon2');
const tables = require("../../database/tables");

const login = async (req, res, next) => {
  try {
    
    const user = await tables.user.readByEmailWithPassword(req.body.email);
    
    if (user === null) {
      res.status(422).json({ message: "L'email ou le mot de passe est incorrect." });
      return;
    }
    
    const isPasswordValid = await argon2.verify(user.password, req.body.password);
    
    if (!isPasswordValid) {
      res.status(422).json({ message: "L'email ou le mot de passe est incorrect." });
      return;
    }
    
    // Assuming you want to send the user object without the password
    const { password, ...userWithoutPassword } = user;
    res.json({ user: userWithoutPassword });
  } catch (err) {
    next(err);
  }
  
};

module.exports = { 
  login
};
