import { useState } from "react";
import "./alltime.css";

function Hallof() {
  const [imageSrc, setImageSrc] = useState(null);
  const [imageTitle, setImageTitle] = useState("");

  const handleButtonClick = (image, title) => {
    setImageSrc(image);
    setImageTitle(title);
  };

  return (
    <>
      <div>
        <h1>Joueur impactant</h1>
      </div>
      <div>
        <p>
          Être le meilleur joueur de basketball demande bien plus que des
          compétences techniques. C’est une combinaison de qualités physiques,
          mentales, émotionnelles et sociales qui distingue les grands joueurs.
          Voici quelques-unes des qualités essentielles pour exceller dans le
          basketball : Voici le texte avec les ponctuations correctement
          formatées :<br />
          <br />
          1. Compétences techniques Dribble et contrôle de balle : Un bon joueur
          doit être capable de dribbler avec les deux mains, de changer de
          direction rapidement et de maintenir un contrôle précis du ballon sous
          pression. Tir : La précision au tir, qu’il s’agisse de tirs à
          mi-distance, de trois points ou de lancers francs, est cruciale. Un
          excellent tireur a une technique de tir cohérente et efficace. Passes
          : Savoir passer le ballon de manière précise et opportune est
          essentiel pour créer des opportunités de score et pour une bonne
          dynamique d’équipe. Défense : Un bon joueur doit aussi être un
          excellent défenseur, capable de bloquer, de voler le ballon et de
          contester les tirs de l’adversaire.
          <br />
          <br />
          2. Capacités physiques Agilité : La capacité de se déplacer rapidement
          et efficacement sur le terrain est vitale. Cela inclut les changements
          rapides de direction et la réactivité. Endurance : Le basketball est
          un sport exigeant physiquement. Avoir une bonne condition physique
          permet de maintenir un haut niveau de performance tout au long du
          match. Force : La force musculaire est importante pour le rebond, la
          défense et la capacité à résister aux contacts physiques avec les
          adversaires. Vitesse : Une grande vitesse permet de battre les
          défenseurs en un contre un et de mener des contre-attaques efficaces.
          <br />
          <br />
          3. Intelligence de jeu Vision du jeu : Comprendre le jeu, anticiper
          les mouvements des adversaires et coéquipiers, et prendre des
          décisions rapides sont des qualités cruciales. Esprit stratégique : Un
          grand joueur sait quand prendre des risques, comment exploiter les
          faiblesses de l’adversaire et comment diriger son équipe sur le
          terrain. Adaptabilité : La capacité à s’adapter rapidement aux
          différentes situations de jeu et aux ajustements tactiques est
          essentielle.
          <br />
          <br />
        </p>

        <div className="image-display">
          <div className="mesgars">
            <button
              type="button"
              onClick={() =>
                handleButtonClick("src/assets/images/kb8.jpg", "Kobe Bryant")
              }
            >
              <img
                className="ball"
                alt="ball"
                src="src/assets/images/ball.jpg"
              />
            </button>
            <button
              type="button"
              onClick={() =>
                handleButtonClick(
                  "src/assets/images/allen.jpg",
                  "Allen Iverson"
                )
              }
            >
              <img
                className="ball"
                alt="ball"
                src="src/assets/images/ball.jpg"
              />
            </button>
            <button
              type="button"
              onClick={() =>
                handleButtonClick("src/assets/images/mg92.jpg", "Magic Johnson")
              }
            >
              <img
                className="ball"
                alt="ball"
                src="src/assets/images/ball.jpg"
              />
            </button>
          </div>

          {imageSrc && (
            <div className="image-container">
              <h2 className="nickname">{imageTitle}</h2>
              <img src={imageSrc} alt={imageTitle} />
            </div>
          )}
        </div>

        <p>
          4. Qualités mentales et émotionnelles Concentration : Maintenir un
          haut niveau de concentration, surtout dans les moments critiques du
          jeu, est crucial pour la performance. Résilience : Les meilleurs
          joueurs savent surmonter les moments de difficulté, les erreurs et les
          défaites. La capacité à rebondir et à continuer à se battre est
          vitale. Mentalité de gagnant : Une volonté indéfectible de gagner,
          combinée à un travail acharné et à un dévouement total, est ce qui
          distingue les bons joueurs des grands joueurs.
          <br />
          <br />
          5. Qualités sociales et de leadership Communication : Être capable de
          communiquer efficacement avec les coéquipiers et les entraîneurs est
          crucial pour le bon fonctionnement de l’équipe. Travail d’équipe : Le
          basketball est un sport collectif. Savoir jouer en équipe, partager le
          ballon et soutenir ses coéquipiers est essentiel. Leadership : Un
          grand joueur souvent inspire et motive ses coéquipiers. Le leadership
          peut se manifester par l'exemple, en donnant des conseils ou en
          encourageant l’équipe.
          <br />
          <br />
          6. Éthique de travail Dévouement et discipline : Les meilleurs joueurs
          consacrent énormément de temps à l’entraînement, à l’étude du jeu et à
          l’amélioration de leurs compétences. Apprentissage continu : Être
          ouvert à apprendre, à recevoir des critiques constructives et à
          toujours chercher à s’améliorer est crucial pour rester au sommet de
          son art
        </p>
      </div>
    </>
  );
}

export default Hallof;
