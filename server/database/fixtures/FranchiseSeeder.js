const AbstractSeeder = require("./AbstractSeeder");

class FranchiseSeeder extends AbstractSeeder {
  constructor() {
    super({ 
      table: "franchise", 
      truncate: true });
  }

  run() {
   
    const franchises = [
      {
        
        name: "Lakers",
        city: "Los Angeles",
      },
      {
        
        name: "Celtics",
        city: "Boston",
      },
      {
        
        name: "Sixers",
        city: "Philadelphia",
      },
      {
        
        name: "Suns",
        city: "Phoenix",
      },
      {
       
        name: "Warriors",
        city: "Golden State",
      },
      {
        
        name: "Knicks",
        city: "New York",
      },
      {
        
        name: "Pistons",
        city: "Detroit",
      },
      {
       
        name: "Heat",
        city: "Miami",
      },
      {
        
        name: "Spurs",
        city: "San Antonio",
      },
      {
        
        name: "Bulls",
        city: "Chicago",
      },
      {
        name: "Kings",
        city: "Sacremento",
      },
    ];

    franchises.forEach((franchise) => {
      const franchiseWithRefName = {
        ...franchise,
        refName: `franchise_${franchise.name}`,
      };
      this.insert(franchiseWithRefName); // insert into franchise(name) values (?)
    });
  }
}
// Export the FranchiseSeeder class
module.exports = FranchiseSeeder;
