import { z } from "zod";

import { implementModel } from "@/modules/shared/domain/utils";

import Account from "./Account";

const AccountSchema = implementModel<Account>().with({
  email: z.string().email(),
  password: z.string().min(8),
  username: z.string().min(3),
});

export default AccountSchema;
