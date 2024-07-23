function PlayerEdit() {
    const action = (event) => {
      event.preventDefault();
  
      // post form data
    }
  
    return (
      <form method="post" onSubmit={action}>
        <label htmlFor="name">Nouvelle catégorie</label>{" "}
        <input type="text" id="name" name="name" />
        <button type="submit">Ajouter</button>
      </form>
    );
  }
  
  export default PlayerEdit;