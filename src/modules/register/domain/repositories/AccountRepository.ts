import CreateAccountRequest from "../entities/CreateAccountRequest";

interface AccountRepository {
  create(request: CreateAccountRequest): Promise<void>;
}

export default AccountRepository;
