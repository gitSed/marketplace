import { User, UserRepository } from "../domain";

interface ApiUser {
  [id: number]: {
    name: string;
    email: string;
    password: string;
  };
}

class FetchUserRepository implements UserRepository {
  async getAll(): Promise<User[]> {
    const response = await fetch("http://localhost:3001/api/users");
    const users = (await response.json()) as ApiUser;

    return Object.entries(users).map(([id, user]) => ({
      id: Number(id),
      name: user.name,
      email: user.email,
      password: user.password,
    }));
  }
}

export default FetchUserRepository;
