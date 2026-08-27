"use client";

import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

import { games } from "./types/games";

export default function Home() {
  const [selectedGame, setSelectedGame] = useState(games[0]);

  return (
    <div className="flex min-h-screen flex-col bg-gray-950">
      <Navbar
        selectedGame={selectedGame}
        setSelectedGame={setSelectedGame}
      />

      <main className="flex-1">
        <Hero cards={selectedGame.cards} />
      </main>

      <Footer />
    </div>
  );
}