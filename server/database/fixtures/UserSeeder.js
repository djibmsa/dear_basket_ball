const AbstractSeeder = require("./AbstractSeeder");

class UserSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "user", truncate: true });
  }

  // The run method - Populate the 'user' table with fake data

  run() {
    // Generate and insert fake data into the 'user' table
    for (let i = 1; i < 12; i += 1) {
      // Generate fake user data
      const fakeUser = {
        id: i,
        pseudo: `user_${i}`,
        email: this.faker.internet.email(), // Generate a fake email using faker library
        password: this.faker.internet.password(), // Generate a fake password using faker library
      };

      // Insert the fakeUser data into the 'user' table
      this.insert(fakeUser); // insert into user(email, password) values (?, ?)
    }
  }
}

// Export the UserSeeder class
module.exports = UserSeeder;
