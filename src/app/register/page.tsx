"use client";
import { Navbar } from "@/features/shared/components";
import { RegisterController } from "@/features/register/controllers";

function HomePage() {
  return (
    <main>
      <Navbar />
      <RegisterController />
    </main>
  );
}

export default HomePage;
