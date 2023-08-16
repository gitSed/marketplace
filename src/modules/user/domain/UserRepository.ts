import User from "./User";

interface UserRepository {
  getAll(): Promise<User[]>;
}

export default UserRepository;
