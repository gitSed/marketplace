import CreateAccountRequest from "./CreateAccountRequest";

interface AccountRepository {
  create(request: CreateAccountRequest): Promise<void>;
}

export default AccountRepository;
