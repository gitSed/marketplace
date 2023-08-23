import { Account } from "@/modules/register/domain";

export const createAccountEmptyState = (): Account => ({
  email: "",
  password: "",
  username: "",
});
