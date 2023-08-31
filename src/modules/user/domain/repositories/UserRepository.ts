import User from "../entities/User";

interface UserRepository {
  getAll(): Promise<User[]>;
}

export default UserRepository;
