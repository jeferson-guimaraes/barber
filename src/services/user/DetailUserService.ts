import prismaClient from "../../prisma";

class UserDetailService{
	async execute(user_id: string){

		const user = await prismaClient.user.findFirst({
			where: {
				id: user_id
			},
			select: {
				id: true,
				name: true,
				email: true,
				endereco: true,
				subscriptions:{
					select: {
						id: true,
						priceId: true,
						status: true
					}
				}
			}
		})

		if (!user) {
			throw new Error("User not found");
		}

		return user;
	}
}

export { UserDetailService}