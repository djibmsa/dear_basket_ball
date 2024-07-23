const AbstractSeeder = require("./AbstractSeeder");
const FranchiseSeeder = require("./FranchiseSeeder");
const UserSeeder = require("./UserSeeder");

class PlayerSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "player",
      truncate: true,
      dependencies: [FranchiseSeeder, UserSeeder],
    });
  }

  run() {
    
    const players = [
      {
        firstname: "Magic",
        lastname: "Johnson",
        post: "meneur",
        user_id: 11,
        franchise_id: 1,
      },
      {
        firstname: "Isiah",
        lastname: "Thomas",
        post: "meneur",
        user_id: 10,
        franchise_id: 8,
      },
      {
        firstname: "Charles",
        lastname: "Barkley",
        post: "allier-fort",
        user_id: 9,
        franchise_id: 6,
      },
      {
        firstname: "Allen",
        lastname: "Iverson",
        post: "meneur",
        user_id: 8,
        franchise_id: 3,
      },
      {
        firstname: "Kevin",
        lastname: "Garnett",
        post: "pivot",
        user_id: 7,
        franchise_id: 2,
      },
      {
        firstname: "Stephen",
        lastname: "Curry",
        post: "pivot",
        user_id: 6,
        franchise_id: 5,
      },
      {
        firstname: "Tony",
        lastname: "Parker",
        post: "meneur",
        user_id: 5,
        franchise_id: 10,
      },
      {
        firstname: "Patrick",
        lastname: "Ewing",
        post: "Pivot",
        user_id: 4,
        franchise_id: 4,
      },
      {
        firstname: "Dwayne",
        lastname: "Wade",
        post: "meneur",
        user_id: 3,
        franchise_id: 7,
      },
      {
        firstname: "Michael",
        lastname: "Jordan",
        post: "allier",
        user_id: 1,
        franchise_id: 11,
      },
      {
        firstname: "Richard",
        lastname: "Johnny",
        post: "allier",
        user_id: 2,
        franchise_id: 11,
      },

      {
        firstname: "Derick",
        lastname: "Fisher",
        post: "meneur",
        user_id: 1,
        franchise_id: 1,
      },
    ];

    players.forEach((player) => {
     
      this.insert(player); // insert into player(firstname, lastname,post, franchise_id, user_id) values (?, ?, ?, ?, ?)
    });
  }
}
// Export the PlayerSeeder class
module.exports = PlayerSeeder;