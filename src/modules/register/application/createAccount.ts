import { CreateAccountRequest, AccountRepository } from "../domain";

function createAccount(repository: AccountRepository) {
  return async (request: CreateAccountRequest) => {
    return repository.create(request);
  };
}

export default createAccount;
