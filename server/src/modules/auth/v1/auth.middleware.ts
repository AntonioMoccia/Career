import { NextFunction, Request, Response } from 'express';
import * as authService from './auth.service';

// Interfaccia per estendere Request con user
interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    sessionId: string;
    deviceId: string;
  };
}

// Middleware per autenticazione custom senza Passport/JWT
const auth = (req: Request, res: Response, next: NextFunction): void => {
  const authReq = req as AuthenticatedRequest;
  
  (async () => {
    try {
      const authHeader = req.headers.authorization;
      
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ 
          success: false,
          error: 'Token di accesso richiesto' 
        });
      }

      const token = authHeader.split(' ')[1];
      
      if (!token) {
        return res.status(401).json({ 
          success: false,
          error: 'Token di accesso richiesto' 
        });
      }

      // Verifica il token usando il nostro sistema custom
      const decoded = await authService.verifyToken(token);

      if (!decoded || !decoded.userId || !decoded.sessionId) {
        return res.status(401).json({ 
          success: false,
          error: 'Token non valido' 
        });
      }

      // Verifica la sessione nel database
      const sessionValidation = await authService.validateSession(decoded.sessionId);
      
      if (!sessionValidation) {
        return res.status(401).json({ 
          success: false,
          error: 'Sessione non valida o scaduta' 
        });
      }
      

      // Aggiungi i dati dell'utente alla request
      authReq.user = {
        id: decoded.userId,
        sessionId: decoded.sessionId,
        deviceId: decoded.deviceId
      };

      next();
    } catch (error) {
      console.error('Auth middleware error:', error);
      return res.status(401).json({ 
        success: false,
        error: 'Token non valido' 
      });
    }
  })();
};

export { auth };