type GameCard = {
  title: string;
  description: string;
};

type GameCardsProps = {
  cards: GameCard[];
};

export default function GameCards({ cards }: GameCardsProps) {
  return (
    <div className="text-white">
      <h2 className="mb-6 text-3xl font-bold">
        Explore
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-xl bg-gray-800/90 p-5 backdrop-blur-sm transition hover:bg-gray-700/90"
          >
            <h3 className="text-xl font-bold">
              {card.title}
            </h3>

            <p className="mt-2 text-gray-400">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}