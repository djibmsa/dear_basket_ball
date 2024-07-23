// Declare the action

const boston = (req, res) => {
  console.info(req.query);

  res.send(`Dear basketball, ${req.query.name} !`);
  };
  
  // Export it to import it somewhere else
  
  module.exports = { boston };