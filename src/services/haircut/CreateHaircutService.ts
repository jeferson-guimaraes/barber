import prismaClient from "../../prisma";

interface HaircutRequest {
	user_id: string;
	name: string;
	price: number;
}

// Verificar quantos modelos ess usuário já tem cadastrado
// Verificar se ele é premium se não limitamos a quantidade de modelos para cadastrar

class CreateHaircutService {
	async execute({ user_id, name, price }: HaircutRequest) {
		if(!name || !price) {
			throw new Error("Name and price are required");
		}

		// Verificar quantos modelos ess usuário já tem cadastrado
		const myHaircuts = await prismaClient.haircut.count({
			where: {
				user_id: user_id
			}
		})

		const user = await prismaClient.user.findFirst({
			where: {
				id: user_id
			},
			include: {
				subscriptions: true
			}
		})

		if (myHaircuts >= 3 && user?.subscriptions?.status !== "active") {
			throw new Error("Not authorized");
		}

		const haircut = await prismaClient.haircut.create({
			data: {
				name: name,
				price: price,
				user_id: user_id
			}
		})

		return haircut;
	}
}

export { CreateHaircutService }