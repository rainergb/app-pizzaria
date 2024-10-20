import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AuthRequest {
    email: string;
    password: string;
}

class AuthUserService {
    async execute({ email, password }: AuthRequest) {
        // Verificar se o email existe.
        const user = await prismaClient.user.findFirst({
            where: {
                email: email,
            },
        });

        // Se o usuário não for encontrado, lance um erro
        if (!user) {
            throw new Error("Email está incorreto");
        }

        // Verificar se a senha está correta.
        const passwordMatch = await compare(password, user.password);

        // Se a senha não corresponder, lance um erro
        if (!passwordMatch) {
            throw new Error("Senha está incorreta");
        }

        // gerar um token JWT
        const token = sign(
            {
                name: user.name,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '30d'
            }
        )

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
        }
    }
}

export { AuthUserService };
