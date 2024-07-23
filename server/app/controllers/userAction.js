const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    // Fetch all players from the database
    const user = await tables.user.readAll();

    // Respond with the players in JSON format
    res.status(200).json(user);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    // Fetch a specific category from the database based on the provided ID
    const user = await tables.user.read(req.params.id);

    // If the category is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the category in JSON format
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const add = async (req, res, next) => {
  const dataUser = req.body;

  // Log the received data to debu

  try {
    const insertId = await tables.user.create(dataUser);

    // After creating the user, log the response

    res.status(201).json({ insertId });
  } catch (err) {
    console.error("Error creating user:", err);
    res
      .status(500)
      .json({ error: "An error occurred while creating the user" });
    next(err);
  }
};

module.exports = { browse, read, add };
