import { UserRepository } from "../domain/repositories";

function getAllUsers(repository: UserRepository) {
  return async () => {
    return await repository.getAll();
  };
}

export default getAllUsers;
