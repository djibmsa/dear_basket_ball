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
        franchise_id: this.getRef("franchise_Lakers").insertId,
        user_id: this.getRef("user_1").insertId,
      },
      {
        firstname: "Isiah",
        lastname: "Thomas",
        post: "meneur",
        franchise_id: this.getRef("franchise_Pistons").insertId,
        user_id: this.getRef("user_1").insertId,
      },
      {
        firstname: "Charles",
        lastname: "Barkley",
        post: "allier-fort",
        franchise_id: this.getRef("franchise_Suns").insertId,
        user_id: this.getRef("user_1").insertId,
      },
      {
        firstname: "Allen",
        lastname: "Iverson",
        post: "meneur",
        franchise_id: this.getRef("franchise_Sixers").insertId,
        user_id: this.getRef("user_1").insertId,
      },
      {
        firstname: "Kevin",
        lastname: "Garnett",
        post: "pivot",
        franchise_id: this.getRef("franchise_Celtics").insertId,
        user_id: this.getRef("user_1").insertId,
      },
      {
        firstname: "Stephen",
        lastname: "Curry",
        post: "pivot",
        franchise_id: this.getRef("franchise_Warriors").insertId,
        user_id: this.getRef("user_1").insertId,
      },
      {
        firstname: "Tony",
        lastname: "Parker",
        post: "meneur",
        franchise_id: this.getRef("franchise_Spurs").insertId,
        user_id: this.getRef("user_1").insertId,
      },
      {
        firstname: "Patrick",
        lastname: "Ewing",
        post: "Pivot",
        franchise_id: this.getRef("franchise_Knicks").insertId,
        user_id: this.getRef("user_1").insertId,
      },
      {
        firstname: "Dwayne",
        lastname: "Wade",
        post: "meneur",
        franchise_id: this.getRef("franchise_Heat").insertId,
        user_id: this.getRef("user_1").insertId,
      },
      {
        firstname: "Michael",
        lastname: "Jordan",
        post: "allier",
        franchise_id: this.getRef("franchise_Bulls").insertId,
        user_id: this.getRef("user_1").insertId,
      },
      {
        firstname: "Richard",
        lastname: "Johnny",
        post: "allier",
        franchise_id: this.getRef("franchise_Bulls").insertId,
        user_id: this.getRef("user_1").insertId,
      },

      {
        firstname: "Derick",
        lastname: "Fisher",
        post: "meneur",
        franchise_id: this.getRef("franchise_Lakers").insertId,
        user_id: this.getRef("user_1").insertId,
      },
    ];

    players.forEach((player) => {
     
      this.insert(player); // insert into player(firstname, lastname,post, franchise_id, user_id) values (?, ?, ?, ?, ?)
    });
  }
}
// Export the PlayerSeeder class
module.exports = PlayerSeeder;
