"use client";

import { useState } from "react";
import Link from "next/link";

import { games, type Game } from "../types/games";

type NavbarProps = {
  selectedGame: Game;
  setSelectedGame: (game: Game) => void;
};

export default function Navbar({
  selectedGame,
  setSelectedGame,
}: NavbarProps) {
  const [gameOpen, setGameOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold"
          >
            MMO Companion
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-8">

            {/* Home */}
            <Link
              href="/"
              className="hover:text-gray-300"
            >
              Home
            </Link>

            {/* Game-specific navigation */}
            {selectedGame.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-gray-300"
              >
                {item.label}
              </Link>
            ))}

            {/* Game Selector */}
            <div className="relative">
              <button
                type="button"
                className="rounded-lg bg-gray-700 px-4 py-2 hover:bg-gray-600"
                onClick={() =>
                  setGameOpen((current) => !current)
                }
              >
                {selectedGame.name}

                <span className="ml-2">
                  {gameOpen ? "▲" : "▼"}
                </span>
              </button>

              {gameOpen && (
                <div className="absolute right-0 top-full z-[9999] mt-2 w-64 rounded-lg bg-gray-900 p-2 shadow-2xl">

                  {games.map((game) => (
                    <button
                      key={game.id}
                      type="button"
                      className={`block w-full rounded-md px-4 py-3 text-left text-white hover:bg-gray-700 ${
                        game.id === selectedGame.id
                          ? "bg-gray-700"
                          : ""
                      }`}
                      onClick={() => {
                        setSelectedGame(game);
                        setGameOpen(false);
                      }}
                    >
                      {game.name}
                    </button>
                  ))}

                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}