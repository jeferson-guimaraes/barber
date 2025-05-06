import prismaClient from "../../prisma";

interface HaircutRequest {
	user_id: string;
	haircut_id: string;
	name: string;
	price: number;
	status: boolean | string;
}

class UpdateHaircutService {
	async execute({ user_id, haircut_id, name, price, status }: HaircutRequest) {

		// Buscar a subscription do usuário logado
		const user = await prismaClient.user.findFirst({
			where: {
				id: user_id
			},
			include: {
				subscriptions: true
			}
		})

		if (user?.subscriptions?.status !== "active") {
			throw new Error("Not authorized");
		}

		console.log(status == "true" ? true : false);

		const haircut = await prismaClient.haircut.update({
			where: {
				id: haircut_id
			},
			data: {
				name: name,
				price: price,
				status: status === true || status === "true"
			}
		})

		return haircut;

	}
}

export { UpdateHaircutService }