import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  const cards = [
    {
      title: "Guides",
      description: "Find useful MMO guides.",
    },
    {
      title: "Builds",
      description: "Explore character builds.",
    },
    {
      title: "Community",
      description: "Connect with other players.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gray-950">
      <Navbar />

      <main className="flex-1">
        <Hero cards={cards} />
      </main>

      <Footer />
    </div>
  );
}