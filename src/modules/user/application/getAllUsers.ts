import { UserRepository } from "../domain";

function getAllUsers(repository: UserRepository) {
  return async () => {
    return await repository.getAll();
  };
}

export default getAllUsers;
