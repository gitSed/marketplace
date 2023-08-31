import { AccountRepository } from "../domain/repositories";
import { CreateAccountRequest } from "../domain/entities";

function createAccount(repository: AccountRepository) {
  return async (request: CreateAccountRequest) => {
    return repository.create(request);
  };
}

export default createAccount;
