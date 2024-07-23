const AbstractRepository = require("./AbstractRepository");

class PlayerRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "player" });
  }

  // The C of CRUD - Create operation

  async create(player) {
    // Execute the SQL INSERT query to add a new category to the "player" table
    const [result] = await this.database.query(
      `insert into ${this.table} (name) values (?)`,
      [player.name]
    );
  
    // Return the ID of the newly inserted category
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific category by its ID
    const [rows] = await this.database.query(
      `select player.*, JSON_ARRAYAGG(
          JSON_OBJECT(
            "id", franchise.id,
            "name", franchise.name
          )
        ) as franchise from ${this.table}
        left join franchise on franchise.player_id = player.id
        where player.id = ?
        group by player.id`,
      [id]
    );
  
    // Return the first row of the result, which represents the category
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all players from the "player" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of players
    return rows;
  }

  async update(player) {
    // Execute the SQL UPDATE query to update a specific category
    const [result] = await this.database.query(
      `update ${this.table} set firstname = ? where id = ?`,
      [player.firstname, player.id]
    );
  
    // Return how many rows were affected
    return result.affectedRows;
  }
  
  async delete(id) {
    // Execute the SQL DELETE query to delete a specific category
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );
  
    // Return how many rows were affected
    return result.affectedRows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  // async update(item) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = PlayerRepository;
