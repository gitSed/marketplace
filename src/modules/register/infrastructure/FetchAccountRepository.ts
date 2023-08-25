import { FetchError } from "@/modules/shared/domain";

import { CreateAccountRequest, AccountRepository } from "../domain";

class FetchAccountRepository implements AccountRepository {
  async create(request: CreateAccountRequest) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/account`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      }
    );

    if (!response.ok) {
      throw new FetchError("Account could not be created", response.status);
    }
  }
}

export default FetchAccountRepository;
