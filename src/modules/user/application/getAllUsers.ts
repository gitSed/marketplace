import { User, UserRepository } from "../domain";

async function getAllUsers(repository: UserRepository): Promise<User[]> {
  return repository.getAll();
}

export default getAllUsers;
