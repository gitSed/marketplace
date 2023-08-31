import { z } from "zod";

import { implementModel } from "@/modules/shared/domain/utils";

import Account from "./Account";

interface IAccountSchema extends Account {
  confirmPassword: string;
}

const AccountSchema = implementModel<IAccountSchema>()
  .with({
    email: z.string().email(),
    username: z.string().min(3),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (!!password && !!confirmPassword && password !== confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords don't match",
        path: ["confirmPassword"],
      });
    }
  });

export default AccountSchema;
