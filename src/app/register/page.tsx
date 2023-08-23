"use client";
import { Navbar } from "@/features/shared/components";
import { RegisterContainer } from "@/features/register/containers";

function HomePage() {
  return (
    <main>
      <Navbar />
      <RegisterContainer />
    </main>
  );
}

export default HomePage;
