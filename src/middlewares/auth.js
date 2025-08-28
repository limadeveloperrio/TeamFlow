// Lê um header "x-role": "admin" | "user"
export const requireRole = (role) => (req, res, next) => {
  const current = (req.headers['x-role'] || 'user').toLowerCase();
  if (current !== role) return res.status(403).json({ error: 'Forbidden' });
  next();
};
