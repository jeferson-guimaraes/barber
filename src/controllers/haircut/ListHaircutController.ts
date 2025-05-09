import { Request, Response } from "express";
import { ListHaircutService } from "../../services/haircut/ListHaircutService";

class ListHaircutController {
	async handle(request: Request, response: Response): Promise<any> {

		const user_id = request.user_id;
		const status = request.query.status as string;

		const listHaircut = new ListHaircutService();

		const haircuts = await listHaircut.execute({ user_id, status });

		return response.json(haircuts);

	}
}

export { ListHaircutController }