const authService = require("../services/authService");

class AuthController {
  static async loginUser(req, res) {
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
  }

  static async registerUser(req, res) {
    try {
      // Utiliser le service d'inscription
      const user = await authService.register(req.body);

      // Créer une session avec les données de l'utilisateur
      req.session.user = user;

      res
        .status(201)
        .json({ message: "Inscription réussie", user: req.session.user });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async logoutUser(req, res) {
    try {
      await authService.logout(req);
      res.status(200).json({ message: "Déconnexion réussie" });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
}

module.exports = AuthController;
