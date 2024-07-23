const tables = require("../../database/tables");

// Some data to make the trick
  
  // Declare the action
  
  const browse = async (req, res, next) => {
    try {
      // Fetch all players from the database
      const players = await tables.player.readAll();
  
      // Respond with the players in JSON format
      res.status(200).json(players);
    } catch (err) {
      // Pass any errors to the error-handling middleware
      next(err);
    }
  };

  const read = async (req, res, next) => {
    try {
      // Fetch a specific category from the database based on the provided ID
      const player = await tables.player.read(req.params.id);
  
      // If the category is not found, respond with HTTP 404 (Not Found)
      // Otherwise, respond with the category in JSON format
      if (player == null) {
        res.sendStatus(404);
      } else {
        res.status(200).json(player);
      }
    } catch (err) {
      // Pass any errors to the error-handling middleware
      next(err);
    }
  };

    const add = async (req, res, next) => {
      // Extract the player data from the request body
      const player = req.body;
    
      try {
        // Insert the player into the database
        const insertId = await tables.player.create(player);
    
        // Respond with HTTP 201 (Created) and the ID of the newly inserted player
        res.status(201).json({ insertId });
      } catch (err) {
        // Pass any errors to the error-handling middleware
        next(err);
      }
    };

    const edit = async (req, res, next) => {
      // Extract the category data from the request body and params
      const player = { ...req.body, id: req.params.id };
    
      try {
        // Update the category in the database
        await tables.player.update(player);
    
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
        await tables.player.delete(req.params.id);
    
        // Respond with HTTP 204 (No Content)
        res.sendStatus(204);
      } catch (err) {
        // Pass any errors to the error-handling middleware
        next(err);
      }
    };
  
  // Export it to import it somewhere else
  
  module.exports = { browse, read, add, edit, destroy };