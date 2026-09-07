export type GameCard = {
  title: string;
  description: string;
};

export type GameNavigation = {
  label: string;
  href: string;
};

export type Game = {
  id: string;
  name: string;
  navigation: GameNavigation[];
  cards: GameCard[];
};

export const games: Game[] = [
  {
    id: "wow",
    name: "World of Warcraft",

    navigation: [
               {
        label: "Auction House",
        href: "/games/wow/auctionhouse"
      },
         {
        label: "Characters",
        href: "/games/wow/characters",
      },
      {
        label: "Guides",
        href: "/games/wow/guides",
      },
    ],

    cards: [
      {
        title: "Guides",
        description: "Find useful World of Warcraft guides.",
      },
      {
        title: "Characters",
        description: "Explore World of Warcraft characters and stats.",
      },
          {
        title: "Auction",
        description: "Explore the auction house.",
      },
    ],
  },
 {
    id: "Rs3",
    name: "RuneScape 3",

    navigation: [
      {
        label: "Grand Exchange",
        href: "/games/rs3/grand-exchange",
      },
      {
        label: "Guides",
        href: "/games/rs3/guides",
      },
      
      {
        label: "Setups",
        href: "/games/rs3/setups",
      },
    ],

    cards: [
         {
        title: "Grand Exchange",
        description: "Explore the RuneScape 3 Grand Exchange.",
      },
      {
        title: "Guides",
        description: "Find useful RuneScape 3 guides.",
      },
   
      {
        title: "Stats",
        description: "Explore RuneScape 3 stats and skills.",
      },
    ],
  },
  {
    id: "ffxiv",
    name: "Final Fantasy XIV",

    navigation: [
      {
        label: "Jobs",
        href: "/games/ffxiv/jobs",
      },
      {
        label: "Guides",
        href: "/games/ffxiv/guides",
      },
      {
        label: "Crafting",
        href: "/games/ffxiv/crafting",
      },
        {
        label: "Market Board",
        href: "/games/ffxiv/market-board",
      },
    ],

    cards: [
      {
        title: "Jobs",
        description: "Explore Final Fantasy XIV jobs.",
      },
      {
        title: "Guides",
        description: "Find useful FFXIV guides.",
      },
      {
        title: "Crafting",
        description: "Explore crafting and gathering.",
      },
    ],
  },
];