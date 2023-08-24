import { FetchError } from "@/modules/shared/domain";

import { CreateAccountRequest, AccountRepository } from "../domain";

class FetchAccountRepository implements AccountRepository {
  async create(request: CreateAccountRequest) {
    const response = await fetch("http://localhost:3001/api/account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new FetchError("Account could not be created", response.status);
    }
  }
}

export default FetchAccountRepository;
