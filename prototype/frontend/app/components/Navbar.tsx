'use client';

import { useState } from 'react';
import Link from 'next/link';
import { games, type Game } from '../types/games';

export default function Navbar() {
  const [gameOpen, setGameOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState<Game>(games[0]);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            MMO Companion
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-8">

            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>

            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>

            <Link href="/services" className="hover:text-gray-300">
              Services
            </Link>

            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>

            {/* MMO Dropdown */}
            <div className="relative">

              <button
                type="button"
                className="rounded-lg bg-gray-700 px-4 py-2 hover:bg-gray-600"
                onClick={() => {
                  console.log('MMO BUTTON CLICKED');
                  setGameOpen((current) => !current);
                }}
              >
                {selectedGame.name}

                <span className="ml-2">
                  {gameOpen ? '▲' : '▼'}
                </span>
              </button>

              {/* Dropdown */}
              {gameOpen && (
                <div className="absolute right-0 top-full z-[9999] mt-2 w-64 rounded-lg bg-gray-900 p-2 shadow-2xl">

                  {games.map((game) => (
                    <button
                      key={game.id}
                      type="button"
                      className="block w-full rounded-md px-4 py-3 text-left text-white hover:bg-gray-700"
                      onClick={() => {
                        console.log('Selected:', game.name);
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