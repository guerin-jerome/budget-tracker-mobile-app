type User = {
    id: string;
    name: string;
    email: string;
    phone: string
    password: string;
    birthDate: string;
    creationDate: string;
}

type AppState = {
    user: User | null;
}

type Action = UserAction
