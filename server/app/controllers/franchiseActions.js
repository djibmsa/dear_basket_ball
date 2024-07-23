const tables = require("../../database/tables");

// Some data to make the trick
  
  // Declare the action
  
  const browse = async (req, res, next) => {
    try {
      // Fetch all franchises from the database
      const franchises = await tables.franchise.readAll();
  
      // Respond with the franchises in JSON format
      res.status(200).json(franchises);
    } catch (err) {
      // Pass any errors to the error-handling middleware
      next(err);
    }
  };

  const read = async (req, res, next) => {
    try {
      // Fetch a specific category from the database based on the provided ID
      const franchise = await tables.franchise.read(req.params.id);
  
      // If the category is not found, respond with HTTP 404 (Not Found)
      // Otherwise, respond with the category in JSON format
      if (franchise == null) {
        res.sendStatus(404);
      } else {
        res.status(200).json(franchise);
      }
    } catch (err) {
      // Pass any errors to the error-handling middleware
      next(err);
    }
  };
    
    const add = async (req, res, next) => {
      // Extract the franchise data from the request body
      const franchise = req.body;
    
      try {
        // Insert the franchise into the database
        const insertId = await tables.franchise.create(franchise);
    
        // Respond with HTTP 201 (Created) and the ID of the newly inserted franchise
        res.status(201).json({ insertId });
      } catch (err) {
        // Pass any errors to the error-handling middleware
        next(err);
      }
    };

    const edit = async (req, res, next) => {
      // Extract the category data from the request body and params
      const franchise = { ...req.body, id: req.params.id };
    
      try {
        // Update the category in the database
        await tables.franchise.update(franchise);
    
        // Respond with HTTP 204 (No Content)
        res.sendStatus(204);
      } catch (err) {
        // Pass any errors to the error-handling middleware
        next(err);
      }
    };
    
    const destroy = async (req, res, next) => {
      try {
        // Delete the category from the database
        await tables.franchise.delete(req.params.id);
    
        // Respond with HTTP 204 (No Content)
        res.sendStatus(204);
      } catch (err) {
        // Pass any errors to the error-handling middleware
        next(err);
      }
    };
  // Export it to import it somewhere else
  
  module.exports = { browse, read, add, edit, destroy };