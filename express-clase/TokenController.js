import jwt from 'jsonwebtoken';

const JWT_SECRET = 'jwt_secret_key';

class TokenController {
  constructor(service) {
    this.service = service;
  }
  
  generateToken = (userId) => jwt.sign({ userId }, JWT_SECRET, { expiresIn: '24h'});
  
  validateToken = (token) => jwt.verify(token, JWT_SECRET);

  checkRole = (role) => {
    return (req, res, next) => {
      if (role === 'public') {
        next();
        return
      }
      if (role === 'admin' || role === 'user') {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
          res.status(401).json({ error: 'Authorization header is required' });
          return;
        }
        try {
          const decoded = this.validateToken(authHeader);
          const user = this.service.getUser(decoded.userId);
          req.user = user;
          next();
        } catch (error) {
          res.status(401).json({ error: 'Invalid token' });
        }
      } else {
        throw new Error(`Invalid role: ${role}`);
      }
    }
  }
}

export default TokenController;
