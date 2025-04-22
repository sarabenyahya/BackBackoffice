// controllers/authController.js
const authService = require("../services/authService");

// Connexion de l'utilisateur
const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Utiliser le service d'authentification
    const user = await authService.login(username, password);

    // Créer une session avec les données de l'utilisateur
    req.session.user = user;

    res
      .status(200)
      .json({ message: "Connexion réussie", user: req.session.user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Déconnexion de l'utilisateur
const logoutUser = async (req, res) => {
  try {
    await authService.logout(req);
    res.status(200).json({ message: "Déconnexion réussie" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  loginUser,
  logoutUser,
};
