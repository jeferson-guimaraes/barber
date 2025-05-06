import { Request, Response } from "express";
import { UpdateUserService } from "../../services/user/UpdateUserService";

class UpdateUserController {

	async handle(request: Request, response: Response): Promise<any> {
		const user_id = request.user_id;
		const { name, endereco } = request.body;

		const updateUser = new UpdateUserService();

		const user = await updateUser.execute({ user_id, name, endereco });

		return response.json(user);
	}
}

export { UpdateUserController };