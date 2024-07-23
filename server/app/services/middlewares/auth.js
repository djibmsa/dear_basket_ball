const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

// Options de hachage (voir documentation : https://github.com/ranisalt/node-argon2/wiki/Options)
// Recommandations **minimales** de l'OWASP : https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html
const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 19 * 2 ** 10 /* 19 Mio en kio (19 * 1024 kio) */,
  timeCost: 2,
  parallelism: 1,
};

const hashPassword = async (req, res, next) => {
  try {

    // Extraction du mot de passe de la requête
    const { password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return console.error("error"); // gestion error
    }

    // Hachage du mot de passe avec les options spécifiées
    const hashedPassword = await argon2.hash(confirmPassword, hashingOptions);

    // Remplacement du mot de passe non haché par le mot de passe haché dans la requête

    req.body.confirmPassword = hashedPassword;

   

    return next();
  } catch (err) {
    next(err);
    return res.sendStatus(401);
  }
};

const verifyToken = (req, res, next) => {
  try {
    // Vérifier la présence de l'en-tête "Authorization" dans la requête
    const authorizationHeader = req.get("Authorization");

    if (authorizationHeader === null) {
      throw new Error("Authorization header is missing");
    }

    // Vérifier que l'en-tête a la forme "Bearer <token>"
    const [type, token] = authorizationHeader.split(" ");

    if (type !== "Bearer") {
      throw new Error("Authorization header has not the 'Bearer' type");
    }

    // Vérifier la validité du token (son authenticité et sa date d'expériation)
    // En cas de succès, le payload est extrait et décodé
    req.auth = jwt.verify(token, process.env.APP_SECRET);

    next();
  } catch (err) {
    console.error(err);

    res.sendStatus(401);
  }
};

const verifyCookie = (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    if (!token) {
      return res.sendStatus(401);
    }
    req.auth = jwt.verify(token, process.env.APP_SECRET);

    return next();
  } catch (err) {
    return res.sendStatus(404).send("il y eu une erreur");
  }
};

module.exports = {
  hashPassword,
  verifyToken,
  verifyCookie,
};
