import { NextFunction, Request, Response } from 'express';
import passport from 'passport';

// Middleware generico per autenticazione con Passport
const auth = (req:Request,res:Response,next:NextFunction)=>{
       passport.authenticate(['jwt'], { session: false }, (err:any, user:any) => {
        if (err) return next(err);
        if (!user) return res.status(401).json({ message: 'Unauthorized' });
        req.user = user;
        next();
    })(req, res, next);
}

export {
    auth
}