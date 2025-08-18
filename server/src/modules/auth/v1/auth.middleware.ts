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
      const tokenResult = await authService.verifyToken(token);

      if (tokenResult.valid && tokenResult.data) {
        // Token valido - verifica anche la sessione nel database
        const sessionValid = await authService.validateSession(tokenResult.data.sessionId);
        
        if (sessionValid) {
          // Tutto ok, popola req.user
          authReq.user = {
            id: tokenResult.data.userId,
            sessionId: tokenResult.data.sessionId,
            deviceId: tokenResult.data.deviceId
          };
          next();
        } else {
          return res.status(401).json({ 
            success: false,
            error: 'Sessione non valida o scaduta',
            code: 'INVALID_SESSION'
          });
        }
      } else if (tokenResult.expired) {
        // Token scaduto - suggerisci refresh
        return res.status(401).json({ 
          success: false,
          error: 'Token scaduto',
          code: 'TOKEN_EXPIRED',
          message: 'Usa il refresh token per ottenere un nuovo access token'
        });
      } else {
        // Token malformato o altri errori
        return res.status(401).json({ 
          success: false,
          error: tokenResult.error || 'Token non valido',
          code: 'INVALID_TOKEN'
        });
      }
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