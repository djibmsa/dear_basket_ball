const AbstractRepository = require("./AbstractRepository");

class FranchiseRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "franchise" });
  }

  // The C of CRUD - Create operation

  async create(franchise) {
    // Execute the SQL INSERT query to add a new category to the "franchise" table
    const [result] = await this.database.query(
      `insert into ${this.table} (name, city) values (?, ?)`,
      [franchise.name, franchise.city]
    );
  
    // Return the ID of the newly inserted category
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific category by its ID
    const [rows] = await this.database.query(
      `select franchise.*, JSON_ARRAYAGG(
          JSON_OBJECT(
            "id", player.id,
            "firstname", player.firstname
          )
        ) as player from ${this.table}
        left join player on player.franchise_id = franchise.id
        where franchise.id = ?
        group by franchise.id`,
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

  async update(franchise) {
    // Execute the SQL UPDATE query to update a specific category
    const [result] = await this.database.query(
      `update ${this.table} set name = ? where id = ?`,
      [franchise.name, franchise.id]
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

module.exports = FranchiseRepository;
