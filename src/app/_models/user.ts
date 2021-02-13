export class User {
    id: number;
    username: string;
    password: string;
    name: string;
    role: string;
    token?: any;
    normalizedEmail: string;
}

export class UserPass {
    username: string;
    password: string;
    email: string;
}