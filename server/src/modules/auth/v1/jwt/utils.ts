import jwt from 'jsonwebtoken'

function generateToken(userId: string): string {
  return jwt.sign(
    { userId },
    process.env.JWT_SECRET as string,
    { expiresIn: '1h' }
  );
}

export {
    generateToken
}