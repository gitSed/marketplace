"use client";
import { HomeContainer } from "@/features/home/components";
import { RestUserRepository } from "@/modules/user/infrastructure";

function HomePage() {
  const userRepository = new RestUserRepository();

  return (
    <main>
      <HomeContainer repository={userRepository} />
    </main>
  );
}

export default HomePage;
