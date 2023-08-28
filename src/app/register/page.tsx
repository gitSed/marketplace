"use client";
import { Navbar } from "@/features/shared/components";
import { RegisterContainer } from "@/features/register/containers";
import {
  FetchAccountRepository,
  ReactQueryAccountFetcher,
} from "@/modules/register/infrastructure";

function RegisterPage() {
  const accountRepository = new FetchAccountRepository();
  const accountFetcher = new ReactQueryAccountFetcher();

  return (
    <main>
      <Navbar />
      <RegisterContainer
        repository={accountRepository}
        fetcher={accountFetcher}
      />
    </main>
  );
}

export default RegisterPage;
