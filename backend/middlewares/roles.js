export const verifyRole = (requiredRoles) => {
  return (req, res, next) => {
    const user = req.user; // Asumiendo que req.user ya está poblado por el middleware de autenticación

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (!requiredRoles.includes(user.role)) {
      return res.status(403).json({ message: "Forbidden: Insufficient role" });
    }

    next();
  };
};
