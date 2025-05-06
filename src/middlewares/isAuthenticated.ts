import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
	sub: string;
}

export function isAuthenticated(request: Request, response: Response, next: NextFunction): void {
	const authToken = request.headers.authorization;

	if (!authToken) {
		response.status(401).end();
		return;
	}

	const [, token] = authToken.split(" ");

	try {
		const { sub } = verify(token, process.env.JWT_SECRET) as Payload;

		request.user_id = sub;

		next();
	} catch (error) {
		response.status(401).end();
		return ;
	}
}