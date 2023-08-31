import { Account } from "@/modules/register/domain/entities";

export const createAccountEmptyState = (): Account => ({
  email: "",
  password: "",
  username: "",
});
