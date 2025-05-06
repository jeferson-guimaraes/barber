import prismaClient from "../../prisma";

interface ScheduleRequest {
	customer: string;
	haircut_id: string;
	user_id: string;
}

class NewSchedulerService {
	async execute({ customer, haircut_id, user_id }: ScheduleRequest) {

		if (customer === "" || haircut_id === "") {
			throw new Error("Error schedule new service.");
		}

		const scheduler = await prismaClient.service.create({
			data: {
				customer,
				haircut_id,
				user_id
			}
		});

		return scheduler;

	}
}

export { NewSchedulerService }