import Image from 'next/image';
import GameCards from './GameCards';

type GameCard = {
  title: string;
  description: string;
};

type HeroProps = {
  cards: GameCard[];
};

export default function Hero({ cards }: HeroProps) {
  return (
    <section className="relative min-h-[600px] overflow-hidden">
      {/* Background image */}
      <Image
        src="/rs3.jpg"
        alt="Castle background"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-gray-950 to-transparent" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-[600px] max-w-6xl flex-col justify-center px-6 py-16 text-white">
        
        {/* Title */}
        <div className="text-center">
          <h1 className="text-5xl font-bold">
            MMO Companion
          </h1>

          <p className="mt-4 text-xl text-gray-200">
            Your personal MMO companion for guides, builds, and community.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16">
          <GameCards cards={cards} />
        </div>

      </div>
    </section>
  );
}