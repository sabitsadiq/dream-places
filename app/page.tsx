import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex felx-col">
      <Header />
      <section className="md:container mx-auto">
        <Hero />
      </section>
    </main>
  );
}
