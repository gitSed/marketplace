"use client";
import { Navbar } from "@/features/shared/components";
import { RegisterContainer } from "@/features/register/containers";
import { FetchAccountRepository } from "@/modules/register/infrastructure";

function HomePage() {
  const accountRepository = new FetchAccountRepository();

  return (
    <main>
      <Navbar />
      <RegisterContainer repository={accountRepository} />
    </main>
  );
}

export default HomePage;
