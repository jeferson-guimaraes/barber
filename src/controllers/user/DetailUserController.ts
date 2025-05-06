import { Request, Response } from "express";
import { UserDetailService } from "../../services/user/DetailUserService";

class DetailUserController{
	async handle(request: Request, response: Response): Promise<any> {

		const user_id = request.user_id;

		const userDetailService = new UserDetailService();

		const user = await userDetailService.execute(user_id);

		return response.json(user);

	}
}

export { DetailUserController }