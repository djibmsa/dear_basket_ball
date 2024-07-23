function News() {
  const action = (event) => {
    event.preventDefault();

    // post form data
  };

  return (
    <div>
      <h1>Postez votre joueur impactant</h1>

      <form method="post" onSubmit={action}>
        <label htmlFor="name">Liste des franchises</label>{" "}
        <input type="text" id="name" name="name" />
        <button type="submit">Ajouter</button>
      </form>

      <form method="post" onSubmit={action}>
        <label htmlFor="name">Nouvelle franchise</label>{" "}
        <input type="text" id="name" name="name" />
        <button type="submit">Ajouter</button>
      </form>

      <form method="post" onSubmit={action}>
        <label htmlFor="name">Liste des joueurs</label>{" "}
        <input type="text" id="name" name="name" />
        <button type="submit">Ajouter</button>
      </form>

      <form method="post" onSubmit={action}>
        <label htmlFor="name">Nouveau joueur</label>{" "}
        <input type="text" id="name" name="name" />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default News;
