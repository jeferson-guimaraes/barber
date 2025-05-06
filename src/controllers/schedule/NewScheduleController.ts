import { Request, Response } from "express";
import { NewSchedulerService } from "../../services/schedule/NewSchedulerService";

class NewScheduleController {
	async handle(request: Request, response: Response): Promise<any> {

		const { haircut_id, customer } = request.body;
		const user_id = request.user_id;

		const newSchedule = new NewSchedulerService();

		const schedule = await newSchedule.execute({
			haircut_id,
			customer,
			user_id
		});

		return response.json(schedule);

	}
}

export { NewScheduleController };