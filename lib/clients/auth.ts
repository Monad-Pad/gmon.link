import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

if (!JWT_SECRET) {
	throw new Error("JWT_SECRET is not set in environment variables");
}

export function createToken(payload: object): string {
	return jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
}

export function verifyToken(token: string): { userId: number, iat: number, exp: number } | null {
	try {
		return jwt.verify(token, JWT_SECRET) as { userId: number, iat: number, exp: number };
	} catch (error) {
		return null;
	}
}

export function getTokenFromCookie(cookie: string): string | null {
    const tokenCookieString = cookie.split(";").find((str) => str.startsWith("auth_token="));
    if (!tokenCookieString) return null;
    const token = tokenCookieString.split("=")[1];
    return token;
}