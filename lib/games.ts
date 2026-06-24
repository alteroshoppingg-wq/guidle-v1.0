export type GuideSection = {
  heading: string
  body: string
  list?: string[]
}

export type GuideMeta = {
  label: string
  value: string
}

export type Guide = {
  slug: string
  title: string
  role: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  patch: string
  summary: string
  tags: string[]
  meta: GuideMeta[]
  sections: GuideSection[]
}

export type Game = {
  slug: string
  name: string
  category: string
  tagline: string
  description: string
  image: string
  accent: string
  guideNoun: string
  guides: Guide[]
}

export const games: Game[] = [
  {
    slug: "albion-online",
    name: "Albion Online",
    category: "Sandbox MMORPG",
    tagline: "Builds for every playstyle in the open world of Albion.",
    description:
      "A classless sandbox MMO where your gear defines your role. Master gathering, PvE dungeons, and full-loot PvP with optimized weapon and armor combinations.",
    image: "/games/albion-online.png",
    accent: "oklch(0.82 0.16 185)",
    guideNoun: "Builds",
    guides: [
      {
        slug: "spear-pvp-bruiser",
        title: "Spear Bruiser — Open World PvP",
        role: "Melee DPS / Bruiser",
        difficulty: "Intermediate",
        patch: "Season 23",
        summary:
          "A self-sufficient open-world dueling build using the Spear line for high single-target burst and strong sustain.",
        tags: ["PvP", "Solo", "Open World"],
        meta: [
          { label: "Weapon", value: "Spear / Pike" },
          { label: "Armor", value: "Mercenary + Soldier" },
          { label: "Cost Tier", value: "T6 - T8" },
        ],
        sections: [
          {
            heading: "Core Equipment",
            body: "This build balances burst and survivability so you can win extended 1v1s without a backup set.",
            list: [
              "Main Hand: Spear (Spirit Hunter for ganking, Heron Spear for duels)",
              "Head: Mercenary Hood — bonus damage burst",
              "Chest: Soldier Armor — reduced crowd control duration",
              "Shoes: Mercenary Shoes — gap closer charge",
            ],
          },
          {
            heading: "Skill Rotation",
            body: "Open from stealth or with a charge, stack your spear combo, then commit your burst window.",
            list: [
              "Engage with Mercenary Shoes charge",
              "Land 3 stacks of Spear auto combo",
              "Activate W-skill burst and Mercenary Hood",
              "Kite with Q spin while cooldowns reset",
            ],
          },
          {
            heading: "Tips & Counters",
            body: "Spear excels against squishy targets but struggles into heavy sustain healers.",
            list: [
              "Save your interrupt for enemy heals or escapes",
              "Avoid extended fights against shield-based tanks",
              "Carry energy potions for prolonged chases",
            ],
          },
        ],
      },
      {
        slug: "arcane-staff-support",
        title: "Arcane Staff — Group Support",
        role: "Support / Utility",
        difficulty: "Advanced",
        patch: "Season 23",
        summary:
          "A high-impact ZvZ and small-scale support build focused on crowd control and enemy debuffs.",
        tags: ["PvP", "Group", "ZvZ"],
        meta: [
          { label: "Weapon", value: "Enigmatic Staff" },
          { label: "Armor", value: "Cleric + Scholar" },
          { label: "Cost Tier", value: "T7 - T8" },
        ],
        sections: [
          {
            heading: "Role Overview",
            body: "Arcane support enables your team with silences, displacement, and damage amplification rather than direct healing.",
          },
          {
            heading: "Core Equipment",
            body: "Prioritize cooldown and crowd control duration to maximize uptime on enemy backlines.",
            list: [
              "Main Hand: Enigmatic Staff — long-range silence",
              "Head: Cleric Cowl — instant cleanse",
              "Chest: Scholar Robe — energy sustain",
              "Cape: Demon Cape — burst escape",
            ],
          },
          {
            heading: "Engagement Pattern",
            body: "Stay behind your frontline and look for clustered enemies to chain your control abilities.",
            list: [
              "Wait for your tanks to engage",
              "Silence enemy healers and casters",
              "Reposition immediately after committing W",
            ],
          },
        ],
      },
      {
        slug: "nature-staff-healer",
        title: "Nature Staff — Sustain Healer",
        role: "Healer",
        difficulty: "Beginner",
        patch: "Season 23",
        summary:
          "An approachable, forgiving healer build perfect for learning group PvE and small-scale PvP.",
        tags: ["PvE", "Group", "Healing"],
        meta: [
          { label: "Weapon", value: "Nature Staff" },
          { label: "Armor", value: "Cleric + Scholar" },
          { label: "Cost Tier", value: "T5 - T7" },
        ],
        sections: [
          {
            heading: "Why Nature Staff",
            body: "Nature offers strong single-target healing with a unique rejuvenation mechanic that rewards proactive play.",
          },
          {
            heading: "Core Equipment",
            body: "Build for energy sustain so you never run dry during long dungeon clears.",
            list: [
              "Main Hand: Nature Staff or Wild Staff",
              "Head: Cleric Cowl — emergency cleanse",
              "Chest: Scholar Robe — energy regeneration",
              "Shoes: Cleric Sandals — movement burst",
            ],
          },
          {
            heading: "Healing Priorities",
            body: "Keep your rejuvenation stacks active on the tank and react to spike damage with your burst heal.",
            list: [
              "Pre-stack heals before pulls",
              "Reserve your cleanse for hard crowd control",
              "Watch your energy bar during boss phases",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "league-of-legends",
    name: "League of Legends",
    category: "MOBA",
    tagline: "Champion builds, runes, and itemization that climb.",
    description:
      "The world's premier MOBA. Find optimized rune pages, item paths, and matchup tips for every role from top lane to support.",
    image: "/games/league-of-legends.webp",
    accent: "oklch(0.7 0.16 250)",
    guideNoun: "Builds",
    guides: [
      {
        slug: "jinx-adc",
        title: "Jinx — Hyper-Carry ADC",
        role: "Bot Lane / Marksman",
        difficulty: "Intermediate",
        patch: "Patch 15.7",
        summary:
          "A scaling crit-marksman build that snowballs the late game with massive attack speed and reset potential.",
        tags: ["ADC", "Scaling", "Crit"],
        meta: [
          { label: "Primary", value: "Lethal Tempo" },
          { label: "Core Item", value: "Kraken Slayer" },
          { label: "Power Spike", value: "3 Items" },
        ],
        sections: [
          {
            heading: "Runes",
            body: "Lethal Tempo maximizes Jinx's rocket stacking and rewards extended fights.",
            list: [
              "Precision: Lethal Tempo, Presence of Mind, Legend: Alacrity, Cut Down",
              "Secondary: Sorcery — Gathering Storm, Manaflow Band",
            ],
          },
          {
            heading: "Item Build",
            body: "Rush attack speed and crit, then add survivability based on enemy threats.",
            list: [
              "Kraken Slayer (core damage)",
              "Phantom Dancer (attack speed + survivability)",
              "Infinity Edge (crit damage spike)",
              "Situational: Mortal Reminder vs healing, Guardian Angel vs assassins",
            ],
          },
          {
            heading: "How to Play",
            body: "Play safe early, use minigun range to poke, and look to clean up fights with passive resets.",
            list: [
              "Use rockets to clear waves and zone",
              "Swap to minigun for sustained DPS in fights",
              "Position at max range — let your frontline engage first",
            ],
          },
        ],
      },
      {
        slug: "darius-top",
        title: "Darius — Lane Bully Top",
        role: "Top Lane / Juggernaut",
        difficulty: "Beginner",
        patch: "Patch 15.7",
        summary:
          "A dominant early-game juggernaut that snowballs leads with bleed stacks and unstoppable executes.",
        tags: ["Top", "Bruiser", "Snowball"],
        meta: [
          { label: "Primary", value: "Conqueror" },
          { label: "Core Item", value: "Stridebreaker" },
          { label: "Power Spike", value: "Level 6" },
        ],
        sections: [
          {
            heading: "Runes",
            body: "Conqueror amplifies Darius's extended trades and healing in drawn-out fights.",
            list: [
              "Precision: Conqueror, Triumph, Legend: Tenacity, Last Stand",
              "Secondary: Resolve — Second Wind, Unflinching",
            ],
          },
          {
            heading: "Item Build",
            body: "Stridebreaker fixes Darius's kiting weakness while adding sticking power.",
            list: [
              "Stridebreaker (engage + waveclear)",
              "Sterak's Gage (survivability)",
              "Death's Dance (sustain + damage)",
              "Situational: Sundered Sky vs ranged matchups",
            ],
          },
          {
            heading: "How to Play",
            body: "Win the lane with aggressive trades, stacking your passive bleed before going for the all-in.",
            list: [
              "Auto-attack to apply Hemorrhage stacks",
              "Pull enemies with E when they go for minions",
              "Execute with R, and use the reset to chain kills",
            ],
          },
        ],
      },
      {
        slug: "lux-support",
        title: "Lux — Poke Support",
        role: "Support / Mage",
        difficulty: "Beginner",
        patch: "Patch 15.7",
        summary:
          "A long-range poke support that locks down targets with binding and bursts them from a safe distance.",
        tags: ["Support", "Poke", "Mage"],
        meta: [
          { label: "Primary", value: "Arcane Comet" },
          { label: "Core Item", value: "Luden's Companion" },
          { label: "Power Spike", value: "Level 9" },
        ],
        sections: [
          {
            heading: "Runes",
            body: "Arcane Comet rewards landing your binding with bonus poke damage.",
            list: [
              "Sorcery: Arcane Comet, Manaflow Band, Transcendence, Scorch",
              "Secondary: Inspiration — Biscuit Delivery, Cosmic Insight",
            ],
          },
          {
            heading: "Item Build",
            body: "Build for ability haste and burst so your combo one-shots squishies.",
            list: [
              "Luden's Companion (burst + mana)",
              "Shadowflame (penetration spike)",
              "Rabadon's Deathcap (AP amplifier)",
              "Situational: Zhonya's Hourglass vs assassins",
            ],
          },
          {
            heading: "How to Play",
            body: "Use your range to poke safely and set up picks for your team with Q binding.",
            list: [
              "Land Q to root, then follow with E and auto-attack",
              "Shield your ADC with W during trades",
              "Save R for confirmed kills or waveclear",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "dead-by-daylight",
    name: "Dead by Daylight",
    category: "Asymmetric Horror",
    tagline: "Killer and survivor builds to escape or to hunt.",
    description:
      "A 4v1 asymmetric horror game. Optimize your perk loadouts for chases, generator pressure, and clutch escapes on both sides of the fog.",
    image: "/games/dead-by-daylight.jpg",
    accent: "oklch(0.7 0.18 25)",
    guideNoun: "Builds",
    guides: [
      {
        slug: "killer-gen-pressure",
        title: "Killer — Gen Pressure & Slowdown",
        role: "Killer",
        difficulty: "Intermediate",
        summary:
          "A meta slowdown loadout that buys time and punishes survivors for grouping on generators.",
        patch: "Current Meta",
        tags: ["Killer", "Slowdown", "Meta"],
        meta: [
          { label: "Best On", value: "Most M1 Killers" },
          { label: "Playstyle", value: "Pressure" },
          { label: "Difficulty", value: "Medium" },
        ],
        sections: [
          {
            heading: "Perk Loadout",
            body: "This loadout focuses on stalling generator progress while you maintain map presence.",
            list: [
              "Pain Resonance — regress the most progressed gen on hook",
              "Pop Goes the Weasel — burst gen regression after hooks",
              "Corrupt Intervention — block far gens at the start",
              "Lethal Pursuer — locate survivors instantly",
            ],
          },
          {
            heading: "Game Plan",
            body: "Apply early pressure with Corrupt, then snowball with hook-based regression.",
            list: [
              "Use Lethal Pursuer to find an early chase",
              "Hook quickly to trigger Pain Resonance",
              "Kick the gen you just regressed with Pop",
            ],
          },
          {
            heading: "Tips",
            body: "Avoid tunneling early — spreading hooks maximizes your slowdown value.",
            list: [
              "Patrol the three strongest gens",
              "Don't commit to long chases against good loopers",
              "Track the Pain Resonance scream to your next target",
            ],
          },
        ],
      },
      {
        slug: "survivor-solo-queue",
        title: "Survivor — Solo Queue Survival",
        role: "Survivor",
        difficulty: "Beginner",
        summary:
          "A reliable, self-sufficient survivor build that helps you escape even without coordinated teammates.",
        patch: "Current Meta",
        tags: ["Survivor", "Solo", "Info"],
        meta: [
          { label: "Best For", value: "Solo Queue" },
          { label: "Playstyle", value: "Altruistic" },
          { label: "Difficulty", value: "Easy" },
        ],
        sections: [
          {
            heading: "Perk Loadout",
            body: "Information and second-chance perks keep you alive when your team can't communicate.",
            list: [
              "Windows of Opportunity — see pallets and windows in chase",
              "Self-Care or Botany — independent healing",
              "Kindred — reveal killer and teammates on hook",
              "Deja Vu — highlight the best gens to repair",
            ],
          },
          {
            heading: "Game Plan",
            body: "Prioritize generators efficiently and only go for safe, well-timed unhooks.",
            list: [
              "Use Deja Vu to split gens with teammates",
              "Read Kindred before going for a save",
              "Loop using Windows callouts to extend chases",
            ],
          },
          {
            heading: "Tips",
            body: "Survival in solo queue is about consistency — avoid greedy plays that trade your life.",
            list: [
              "Don't all group on one generator",
              "Take protection hits only when it's worth it",
              "Save your exhaustion perk for the critical chase",
            ],
          },
        ],
      },
      {
        slug: "survivor-chase-master",
        title: "Survivor — Chase Specialist",
        role: "Survivor",
        difficulty: "Advanced",
        summary:
          "A high-skill loadout built around extending chases to give your team maximum time on generators.",
        patch: "Current Meta",
        tags: ["Survivor", "Chase", "Exhaustion"],
        meta: [
          { label: "Best For", value: "Strong Loopers" },
          { label: "Playstyle", value: "Distraction" },
          { label: "Difficulty", value: "Hard" },
        ],
        sections: [
          {
            heading: "Perk Loadout",
            body: "Exhaustion and resilience perks let you survive long chases against any killer.",
            list: [
              "Dead Hard — dodge a hit and reset the chase",
              "Resilience — faster actions while injured",
              "Lithe — burst speed after vaulting",
              "Windows of Opportunity — never miss a loop",
            ],
          },
          {
            heading: "Game Plan",
            body: "Bait the killer into chasing you and lead them away from objectives.",
            list: [
              "Pre-drop unsafe pallets and keep moving",
              "Chain strong loops together across the map",
              "Use Lithe to reach the next tile safely",
            ],
          },
          {
            heading: "Tips",
            body: "Mastering chase requires map knowledge — learn every tile and pallet spawn.",
            list: [
              "Practice mind-games at jungle gyms",
              "Time Dead Hard for the killer's lunge",
              "Stay injured to keep Resilience active",
            ],
          },
        ],
      },
    ],
  },
]

export function getGame(slug: string): Game | undefined {
  return games.find((g) => g.slug === slug)
}

export function getGuide(gameSlug: string, guideSlug: string) {
  const game = getGame(gameSlug)
  const guide = game?.guides.find((g) => g.slug === guideSlug)
  if (!game || !guide) return undefined
  return { game, guide }
}
