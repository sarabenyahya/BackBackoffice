const User = require("../models/User");
const bcrypt = require("bcryptjs");

class AuthService {
  static async register(data) {
    const user = new User(data);
    const hash = await bcrypt.hash(data.password, 10);
    user.password = hash;
    return await user.save();
  }

  static async login(username, password) {
    // Trouver l'utilisateur par son nom d'utilisateur
    const user = await User.findOne({ username });
    if (!user) throw new Error("Utilisateur non trouvé");

    // Comparer le mot de passe
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Mot de passe incorrect");

    // Retourner les informations de l'utilisateur (sans le mot de passe)
    return {
      id: user._id,
      username: user.username,
      role: user.role,
    };
  }

  static logout(req) {
    return new Promise((resolve, reject) => {
      req.session.destroy((err) => {
        if (err) reject("Erreur lors de la déconnexion");
        else resolve("Déconnexion réussie");
      });
    });
  }
}

module.exports = AuthService;
