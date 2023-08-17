"use client";
import { Navbar } from "@/features/shared/components";
import { HomeContainer } from "@/features/home/controllers";
import { RestUserRepository } from "@/modules/user/infrastructure";
import { RestHeroRepository } from "@/modules/hero/infrastructure";

function HomePage() {
  const userRepository = new RestUserRepository();
  const heroRepository = new RestHeroRepository();

  return (
    <main>
      <Navbar />
      <HomeContainer repositories={{ heroRepository, userRepository }} />
    </main>
  );
}

export default HomePage;
