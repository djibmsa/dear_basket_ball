function PlayerList() {
    return (
        [
            {
              id: 1,
              firstname: "Magic",
              lastname: "Johnson",
              post: "meneur",
              franchise_id: this.getRef("franchise_Lakers").insertId,
              user_id: 8,
            },
            {
              id: 2,
              firstname: "Isiah",
              lastname: "Thomas",
              post: "meneur",
              franchise_id: this.getRef("franchise_Pistons").insertId,
              user_id: 7,
            },
            {
              id: 3,
              firstname: "Charles",
              lastname: "Barkley",
              post: "allier-fort",
              franchise_id: this.getRef("franchise_Suns").insertId,
              user_id: 6,
            },
            {
              id: 4,
              firstname: "Allen",
              lastname: "Iverson",
              post: "meneur",
              franchise_id: this.getRef("franchise_Sixers").insertId,
              user_id: 4,
            },
            {
              id: 5,
              firstname: "Kevin",
              lastname: "Garnett",
              post: "pivot",
              franchise_id: this.getRef("franchise_Celtics").insertId,
              user_id: 5,
            },
            {
              id: 6,
              firstname: "Stephen",
              lastname: "Curry",
              post: "pivot",
              franchise_id: this.getRef("franchise_Warriors").insertId,
              user_id: 4,
            },
            {
              id: 7,
              firstname: "Tony",
              lastname: "Parker",
              post: "meneur",
              franchise_id: this.getRef("franchise_Spurs").insertId,
              user_id: 3,
            },
            {
              id: 8,
              firstname: "Patrick",
              lastname: "Ewing",
              post: "Pivot",
              franchise_id: this.getRef("franchise_Knicks").insertId,
              user_id: 2,
            },
            {
              id: 9,
              firstname: "Dwayne",
              lastname: "Wade",
              post: "meneur",
              franchise_id: this.getRef("franchise_Heat").insertId,
              user_id: 1,
            },
            {
              id: 10,
              firstname: "Michael",
              lastname: "Jordan",
              post: "allier",
              franchise_id: this.getRef("franchise_Bulls").insertId,
              user_id: 1,
            },
            {
              id: 11,
              firstname: "Richard",
              lastname: "Johnny",
              post: "allier",
              franchise_id: this.getRef("franchise_Bulls").insertId,
              user_id: 1,
            },
          
            {
              id: 12,
              firstname: "Derick",
              lastname: "Fisher",
              post: "meneur",
              franchise_id: this.getRef("franchise_Lakers").insertId,
              user_id: 1,
            },
          ]

    );
}

export default PlayerList