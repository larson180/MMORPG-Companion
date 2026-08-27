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
        label: "Guides",
        href: "/wow/guides",
      },
      {
        label: "Builds",
        href: "/wow/builds",
      },
      {
        label: "Raids",
        href: "/wow/raids",
      },
    ],

    cards: [
      {
        title: "Guides",
        description: "Find useful World of Warcraft guides.",
      },
      {
        title: "Builds",
        description: "Explore World of Warcraft builds.",
      },
      {
        title: "Raids",
        description: "Prepare for your next raid.",
      },
    ],
  },

  {
    id: "ffxiv",
    name: "Final Fantasy XIV",

    navigation: [
      {
        label: "Jobs",
        href: "/ffxiv/jobs",
      },
      {
        label: "Guides",
        href: "/ffxiv/guides",
      },
      {
        label: "Crafting",
        href: "/ffxiv/crafting",
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

  {
    id: "gw2",
    name: "Guild Wars 2",

    navigation: [
      {
        label: "Guides",
        href: "/gw2/guides",
      },
      {
        label: "Builds",
        href: "/gw2/builds",
      },
      {
        label: "Classes",
        href: "/gw2/classes",
      },
    ],

    cards: [
      {
        title: "Guides",
        description: "Find useful Guild Wars 2 guides.",
      },
      {
        title: "Builds",
        description: "Explore Guild Wars 2 builds.",
      },
      {
        title: "Classes",
        description: "Learn about Guild Wars 2 classes.",
      },
    ],
  },
];