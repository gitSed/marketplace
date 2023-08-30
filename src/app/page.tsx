"use client";
import { Navbar } from "@/features/shared/components";
import { HomeContainer } from "@/features/home/containers";
import {
  FetchUserRepository,
  ReactQueryUserFetcher,
} from "@/modules/user/infrastructure";
import {
  FetchHeroRepository,
  ReactQueryHeroFetcher,
} from "@/modules/hero/infrastructure";

function HomePage() {
  const userRepository = new FetchUserRepository();
  const heroRepository = new FetchHeroRepository();

  const userFetcher = new ReactQueryUserFetcher();
  const heroFetcher = new ReactQueryHeroFetcher();

  /**
   * If offline mode is needed, we can create offline repositories:
   * const userRepository = new OfflineUserRepository();
   * const heroRepository = new OfflineHeroRepository();
   */

  return (
    <main>
      <Navbar />
      <HomeContainer
        repositories={{ heroRepository, userRepository }}
        fetchers={{ userFetcher, heroFetcher }}
      />
    </main>
  );
}

export default HomePage;
