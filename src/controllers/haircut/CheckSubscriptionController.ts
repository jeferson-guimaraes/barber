import { Request, Response } from "express";
import { CheckSubscriptionService } from "../../services/haircut/CheckSubscriptionService";

class CheckSubscriptionController {
	async handle(request: Request, response: Response): Promise<any> {
		
		const user_id = request.user_id;

		const checkSubscription = new CheckSubscriptionService();

		const status = await checkSubscription.execute({ user_id });

		return response.json(status);

	}
}

export { CheckSubscriptionController };