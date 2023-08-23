"use client";
import { Navbar } from "@/features/shared/components";
import { HomeContainer } from "@/features/home/containers";
import { FetchUserRepository } from "@/modules/user/infrastructure";
import { FetchHeroRepository } from "@/modules/hero/infrastructure";

function HomePage() {
  const userRepository = new FetchUserRepository();
  const heroRepository = new FetchHeroRepository();

  /**
   * If offline mode is needed, we can create offline repositories:
   * const userRepository = new OfflineUserRepository();
   * const heroRepository = new OfflineHeroRepository();
   */

  return (
    <main>
      <Navbar />
      <HomeContainer repositories={{ heroRepository, userRepository }} />
    </main>
  );
}

export default HomePage;
