import { PrismaService } from 'src/prisma/prisma.service';
import { User, Prisma } from '@prisma/client';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    user(userWhreUniqueInput: Prisma.UserWhereUniqueInput): Promise<User | null>;
    users(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.UserWhereUniqueInput;
        where?: Prisma.UserWhereInput;
        orderBy?: Prisma.UserOrderByWithRelationInput;
    }): Promise<User[]>;
    createUser(data: Prisma.UserCreateInput): Promise<User>;
}
