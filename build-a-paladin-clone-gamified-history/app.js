const STORAGE_KEY = "chronicle-quest-progress-v1";
const XP_PER_LEVEL = 350;

const lessons = [
  {
    id: "rosetta",
    title: "Cracking the Nile Code",
    era: "Ancient Egypt",
    region: "North Africa",
    minutes: 3,
    xp: 90,
    requiredXp: 0,
    image: "assets/rosetta.png",
    summary: "Join a young scribe as a carved stone turns conquest, language, and memory into a puzzle.",
    scenes: [
      {
        title: "A Stone With Three Voices",
        copy: "The fort at Rashid is loud with picks and orders. Under the dust, a black slab appears. The same decree is cut three times: sacred signs, daily script, and Greek. Your commander sees loot. You see a key.",
        prompt: "What do you protect first?",
        choices: [
          {
            label: "Copy every symbol before the stone moves",
            trait: "Archivist",
            result: "You preserve the fragile evidence. Later scholars can compare line by line instead of trusting rumor."
          },
          {
            label: "Ask the Greek reader to translate aloud",
            trait: "Diplomat",
            result: "You turn the crowd into witnesses. The stone becomes more than a trophy because people understand why it matters."
          }
        ]
      },
      {
        title: "Patterns in the Dust",
        copy: "Names repeat where royal titles appear. If a name can anchor one script, it can pull another into view. The old signs are not decorative. They are a language waiting for patience.",
        prompt: "Which clue do you chase?",
        choices: [
          {
            label: "Circle repeated royal names",
            trait: "Pattern seeker",
            result: "You identify a bridge between known and unknown writing systems."
          },
          {
            label: "Sort signs by sound and meaning",
            trait: "Linguist",
            result: "You avoid a trap: some signs carry sounds, others carry ideas, and many do both."
          }
        ]
      }
    ],
    quiz: [
      {
        question: "Why was the Rosetta Stone so useful to later historians?",
        options: ["It listed every pharaoh in order", "It repeated one decree in multiple scripts", "It was written in Latin"],
        answer: 1,
        lore: "The repeated decree let scholars compare Greek with Egyptian scripts."
      },
      {
        question: "What larger historical skill does this lesson model?",
        options: ["Comparing sources", "Ignoring context", "Memorizing dates only"],
        answer: 0,
        lore: "Historians often use comparison to turn fragments into evidence."
      }
    ]
  },
  {
    id: "marathon",
    title: "Run Before Dawn",
    era: "Classical Greece",
    region: "Mediterranean",
    minutes: 4,
    xp: 120,
    requiredXp: 0,
    image: "assets/marathon.png",
    summary: "Make the tense calls that shaped a small city's stand against a huge imperial force.",
    scenes: [
      {
        title: "The Beach Fills With Sails",
        copy: "Athenian scouts return breathless: Persian ships have landed at Marathon. The city has hoplites, nerves, and not enough time. Every hour spent arguing gives the enemy a cleaner road inland.",
        prompt: "How do you advise the generals?",
        choices: [
          {
            label: "Hold the ridge and force a narrow fight",
            trait: "Tactician",
            result: "The ridge turns panic into geometry. Terrain can shrink a larger army."
          },
          {
            label: "Send a runner for Spartan help",
            trait: "Connector",
            result: "Alliances matter, but distance and ritual calendars can slow even urgent promises."
          }
        ]
      },
      {
        title: "A Thin Center",
        copy: "Miltiades proposes a risky formation: strengthen the wings and leave the center thinner. If the center bends without breaking, the wings may fold around the invaders.",
        prompt: "What do you do with the line?",
        choices: [
          {
            label: "Trust the weighted wings",
            trait: "Risk reader",
            result: "The line becomes a trap. A weakness can be bait when everyone understands the plan."
          },
          {
            label: "Keep every section equal",
            trait: "Stabilizer",
            result: "The soldiers feel safer, but the plan loses the surprise that could offset Persian numbers."
          }
        ]
      },
      {
        title: "News Must Outrun Fear",
        copy: "After the clash, the city still waits. Rumor can defeat a tired army if the truth arrives too late. Someone must carry the outcome home before panic opens the gates.",
        prompt: "What message matters most?",
        choices: [
          {
            label: "Say the city held because citizens acted together",
            trait: "Civic spark",
            result: "The victory becomes a story about participation, not just commanders."
          },
          {
            label: "Warn that the empire may return",
            trait: "Strategist",
            result: "Celebration stays useful when it becomes preparation."
          }
        ]
      }
    ],
    quiz: [
      {
        question: "What gave the Athenians an advantage at Marathon?",
        options: ["Fighting on chosen terrain", "A much larger navy", "Gunpowder weapons"],
        answer: 0,
        lore: "The plain and ridge shaped how the battle could unfold."
      },
      {
        question: "The thin-center plan shows which historical idea?",
        options: ["Risk can be strategic", "Numbers never matter", "Leaders avoid choices"],
        answer: 0,
        lore: "Historical outcomes often turn on risky decisions made under pressure."
      },
      {
        question: "Why do stories of Marathon still matter?",
        options: ["They explain civic identity", "They ended all wars", "They prove myths are facts"],
        answer: 0,
        lore: "Communities use remembered moments to define values and belonging."
      }
    ]
  },
  {
    id: "silkroad",
    title: "Caravan of Borrowed Ideas",
    era: "Silk Roads",
    region: "Central Asia",
    minutes: 4,
    xp: 130,
    requiredXp: 260,
    image: "assets/silkroad.png",
    summary: "Trade silk, stories, glass, horses, and beliefs across an unforgiving desert route.",
    scenes: [
      {
        title: "The Oasis Ledger",
        copy: "At Dunhuang, your caravan is more than goods. A monk needs paper, a merchant wants lapis, and a healer carries a recipe from far west. The market is a map made of voices.",
        prompt: "Which exchange do you prioritize?",
        choices: [
          {
            label: "Trade space for manuscripts",
            trait: "Curator",
            result: "Ideas travel light. A bundle of pages can outlive a wagon of silk."
          },
          {
            label: "Secure horses for the next pass",
            trait: "Quartermaster",
            result: "Survival keeps culture moving. Logistics are part of intellectual history."
          }
        ]
      },
      {
        title: "A Storm Erases the Trail",
        copy: "Wind turns the road into a blank page. The guide listens for bells tied to lead animals. Someone recites a prayer in a language you do not know, and everyone understands the fear.",
        prompt: "How do you keep the caravan together?",
        choices: [
          {
            label: "Pair strangers by skill",
            trait: "Organizer",
            result: "Trust forms faster when people depend on each other for practical tasks."
          },
          {
            label: "Follow the guide without debate",
            trait: "Listener",
            result: "Expertise matters most when the evidence is hidden by dust."
          }
        ]
      }
    ],
    quiz: [
      {
        question: "The Silk Roads moved more than luxury goods. What else traveled?",
        options: ["Ideas and technologies", "Only armies", "Only coins"],
        answer: 0,
        lore: "Religions, inventions, crops, and artistic styles moved with people and goods."
      },
      {
        question: "Why were oasis cities important?",
        options: ["They were exchange hubs", "They blocked all trade", "They were empty camps"],
        answer: 0,
        lore: "Oasis cities connected merchants, translators, pilgrims, and officials."
      }
    ]
  },
  {
    id: "baghdad",
    title: "Night Shift at the House of Wisdom",
    era: "Islamic Golden Age",
    region: "West Asia",
    minutes: 5,
    xp: 150,
    requiredXp: 540,
    image: "assets/baghdad.png",
    summary: "Translate, test, and debate in a city where knowledge is treated like infrastructure.",
    scenes: [
      {
        title: "Ink Before Sunrise",
        copy: "Baghdad's library hums after midnight. Greek geometry, Persian astronomy, and Indian numerals share one table. A patron asks what should be copied first before a shipment leaves at dawn.",
        prompt: "What earns the first scribes?",
        choices: [
          {
            label: "Mathematics that helps engineers and merchants",
            trait: "Pragmatist",
            result: "Useful knowledge spreads quickly because it solves immediate problems."
          },
          {
            label: "Philosophy that sharpens debate",
            trait: "Debater",
            result: "Argument becomes a tool for testing assumptions, not just winning status."
          }
        ]
      },
      {
        title: "The Astronomer's Table",
        copy: "A chart predicts a star's position, but the observation is slightly off. The room grows quiet. Respect for inherited books now meets respect for measurement.",
        prompt: "How do you resolve the mismatch?",
        choices: [
          {
            label: "Record the observation beside the old table",
            trait: "Empiricist",
            result: "Preserving disagreement gives the next scholar something real to test."
          },
          {
            label: "Copy the old table exactly",
            trait: "Conservator",
            result: "Transmission matters, but knowledge can stall when copying replaces checking."
          }
        ]
      }
    ],
    quiz: [
      {
        question: "What made the House of Wisdom historically important?",
        options: ["Translation and scholarship", "A ban on mathematics", "A single royal diary"],
        answer: 0,
        lore: "It represents a culture of collecting, translating, debating, and extending knowledge."
      },
      {
        question: "Why does recording a mismatch matter?",
        options: ["It creates testable evidence", "It hides errors", "It ends debate forever"],
        answer: 0,
        lore: "Historical science advances when observations can challenge inherited claims."
      }
    ]
  },
  {
    id: "mansa",
    title: "Gold on the Desert Road",
    era: "Medieval Africa",
    region: "West Africa",
    minutes: 4,
    xp: 150,
    requiredXp: 820,
    image: "assets/mansa.png",
    summary: "Follow Mansa Musa's pilgrimage and see how wealth, faith, and reputation moved together.",
    scenes: [
      {
        title: "A Procession Like a River",
        copy: "The caravan leaving Mali is impossible to ignore. Gold, officials, scholars, and servants move toward Cairo and Mecca. Every gift tells the world something about Mali's power.",
        prompt: "How should the gifts be handled?",
        choices: [
          {
            label: "Give generously to signal abundance",
            trait: "Prestige builder",
            result: "The display makes Mali famous, but too much gold can disturb local prices."
          },
          {
            label: "Fund scholars and buildings along the route",
            trait: "Institution maker",
            result: "Wealth becomes durable when it supports learning and architecture."
          }
        ]
      },
      {
        title: "Timbuktu in the Mind",
        copy: "On the return journey, architects and scholars are invited west. The pilgrimage is no longer only devotion. It becomes a recruitment network for a growing intellectual center.",
        prompt: "What do you bring home?",
        choices: [
          {
            label: "Teachers and manuscripts",
            trait: "Knowledge patron",
            result: "A city becomes influential when it attracts people who can teach and copy."
          },
          {
            label: "Builders who can shape public space",
            trait: "Civic planner",
            result: "Architecture turns a ruler's ambition into places people use every day."
          }
        ]
      }
    ],
    quiz: [
      {
        question: "Mansa Musa's pilgrimage affected how outsiders viewed Mali because it displayed...",
        options: ["Wealth and connection", "Isolation from trade", "A lack of leadership"],
        answer: 0,
        lore: "The journey broadcast Mali's wealth, faith, and diplomatic reach."
      },
      {
        question: "Why is Timbuktu associated with learning?",
        options: ["Scholars and manuscripts", "No trade routes", "No libraries"],
        answer: 0,
        lore: "Timbuktu became known for scholarship, book culture, and religious learning."
      }
    ]
  },
  {
    id: "meiji",
    title: "Steam Over Edo Bay",
    era: "Modern Asia",
    region: "Japan",
    minutes: 5,
    xp: 170,
    requiredXp: 1180,
    image: "assets/meiji.png",
    summary: "Navigate reform, pressure, and identity as Japan debates how to meet industrial empires.",
    scenes: [
      {
        title: "Black Ships, Bright Questions",
        copy: "Foreign steamships make old defenses look thin. Some leaders want to preserve every custom. Others argue that survival requires learning from the threat without becoming a copy of it.",
        prompt: "What principle guides reform?",
        choices: [
          {
            label: "Borrow tools, debate values",
            trait: "Selective reformer",
            result: "Modernization becomes a negotiation between utility and identity."
          },
          {
            label: "Reject outside pressure entirely",
            trait: "Guardian",
            result: "Resistance protects dignity, but it may leave the state exposed to stronger powers."
          }
        ]
      },
      {
        title: "A School Bell Rings",
        copy: "Railways and factories matter, but schools may matter more. A generation trained in science, administration, and shared national language can move faster than any single machine.",
        prompt: "Where do you invest first?",
        choices: [
          {
            label: "Public education",
            trait: "Capacity builder",
            result: "Education creates the people who can run new systems."
          },
          {
            label: "Heavy industry",
            trait: "Industrial planner",
            result: "Factories change military and economic power, especially when paired with skilled workers."
          }
        ]
      }
    ],
    quiz: [
      {
        question: "A key Meiji-era challenge was balancing modernization with...",
        options: ["Cultural and political identity", "Total isolation forever", "The end of education"],
        answer: 0,
        lore: "Reformers debated how to adopt useful systems while preserving authority and identity."
      },
      {
        question: "Why did education matter to modernization?",
        options: ["It built administrative and technical capacity", "It stopped all industry", "It removed the need for reform"],
        answer: 0,
        lore: "Modern institutions need trained people as much as machines."
      }
    ]
  }
];

const skillNodes = [
  {
    id: "ancient",
    title: "Ancient Evidence",
    copy: "Decode inscriptions, compare sources, and follow the first civic myths.",
    requiredXp: 0,
    color: "#2f7e65",
    icon: "landmark"
  },
  {
    id: "routes",
    title: "Routes and Exchanges",
    copy: "Unlock trade networks where goods, faiths, and inventions cross borders.",
    requiredXp: 260,
    color: "#317aa0",
    icon: "route"
  },
  {
    id: "knowledge",
    title: "Knowledge Cities",
    copy: "Enter libraries, observatories, schools, and debate halls.",
    requiredXp: 540,
    color: "#5c527f",
    icon: "book-open"
  },
  {
    id: "africa",
    title: "African Kingdoms",
    copy: "Trace wealth, pilgrimage, diplomacy, and manuscript cultures.",
    requiredXp: 820,
    color: "#c95b4a",
    icon: "gem"
  },
  {
    id: "reform",
    title: "Reform and Revolt",
    copy: "See how states adapt under pressure from empires and industry.",
    requiredXp: 1180,
    color: "#d89c35",
    icon: "factory"
  }
];

const dailyQuestions = [
  {
    question: "Which habit best protects historical accuracy?",
    options: ["Compare independent sources", "Trust the loudest story", "Skip context"],
    answer: 0
  },
  {
    question: "A trade route is also a route for...",
    options: ["Ideas and disease", "Only identical goods", "No cultural contact"],
    answer: 0
  },
  {
    question: "Why do historians care about incentives?",
    options: ["They shape decisions", "They erase evidence", "They replace chronology"],
    answer: 0
  }
];

const leaderboard = [
  { name: "Amina", xp: 2460 },
  { name: "Diego", xp: 2310 },
  { name: "Noor", xp: 2200 },
  { name: "You", xp: 0, you: true },
  { name: "Mila", xp: 1910 }
];

const defaultState = {
  xp: 310,
  completed: ["rosetta"],
  lessonScores: { rosetta: 2 },
  choices: {},
  streak: 6,
  freeze: 1,
  boosts: 2,
  dailyDone: "",
  notifications: false,
  reminderTime: "19:30"
};

const iconFallbacks = {
  "arrow-right": ">",
  badge: "ID",
  bell: "B",
  "bell-ring": "B",
  "book-open": "Bk",
  check: "OK",
  "check-circle-2": "OK",
  "circle": "O",
  "clock-3": "3m",
  factory: "Fx",
  gem: "G",
  "git-branch": "Y",
  landmark: "L",
  lock: "L",
  map: "M",
  "message-square-text": "Q",
  network: "N",
  play: ">",
  "refresh-cw": "R",
  "rotate-ccw": "R",
  route: "Rt",
  shield: "CQ",
  sparkles: "XP",
  swords: "D",
  trophy: "T",
  "user-round": "Me",
  x: "X",
  "x-circle": "X",
  zap: "Z"
};

let state = loadState();
let currentView = "journey";
let lessonSession = null;
let dailySession = null;
let toastTimer = 0;

function loadState() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return { ...defaultState };
    return { ...defaultState, ...JSON.parse(stored) };
  } catch {
    return { ...defaultState };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function todayKey() {
  return new Date().toLocaleDateString("en-CA");
}

function levelInfo() {
  const level = Math.floor(state.xp / XP_PER_LEVEL) + 1;
  const current = state.xp % XP_PER_LEVEL;
  return {
    level,
    current,
    next: XP_PER_LEVEL,
    percent: Math.round((current / XP_PER_LEVEL) * 100)
  };
}

function activeLesson() {
  return lessons.find((lesson) => !state.completed.includes(lesson.id) && state.xp >= lesson.requiredXp) || lessons[0];
}

function unlockedLessons() {
  return lessons.filter((lesson) => state.xp >= lesson.requiredXp).length;
}

function completedCount() {
  return lessons.filter((lesson) => state.completed.includes(lesson.id)).length;
}

function icon(name) {
  return `<i class="fallback-icon" data-lucide="${name}" aria-hidden="true">${iconFallbacks[name] || "*"}</i>`;
}

function render() {
  const info = levelInfo();
  const app = document.querySelector("#app");
  app.innerHTML = `
    <header class="app-top">
      <div class="top-row">
        <div class="brand">
          <div class="brand-mark">${icon("shield")}</div>
          <div>
            <h1>Chronicle Quest</h1>
            <p>Story lessons for historical instincts</p>
          </div>
        </div>
        <button class="icon-button" type="button" data-action="show-profile" aria-label="Open profile">${icon("user-round")}</button>
      </div>
      <div class="status-grid">
        <div class="level-panel">
          <div class="level-value"><strong>${info.level}</strong><span>level</span></div>
          <div class="progress-track" aria-label="${info.current} of ${info.next} XP to next level">
            <div class="progress-fill" style="width:${info.percent}%"></div>
          </div>
          <p class="stat-label">${info.current}/${info.next} XP to next level</p>
        </div>
        <div class="streak-panel">
          <div class="streak-value"><strong>${state.streak}</strong><span>day streak</span></div>
          <p class="stat-label">${state.freeze} freeze saved</p>
        </div>
      </div>
    </header>
    <section class="content">
      ${renderView()}
    </section>
    <nav class="nav" aria-label="Main tabs">
      ${navButton("journey", "map", "Journey")}
      ${navButton("tree", "network", "Tree")}
      ${navButton("daily", "swords", "Daily")}
      ${navButton("profile", "badge", "Profile")}
    </nav>
    <section class="lesson-overlay hidden" id="lessonOverlay" aria-live="polite"></section>
    <div class="toast hidden" id="toast"></div>
  `;
  refreshIcons();
}

function navButton(view, iconName, label) {
  const active = currentView === view ? "active" : "";
  return `
    <button class="nav-button ${active}" type="button" data-action="nav" data-view="${view}" aria-label="${label}">
      ${icon(iconName)}
      <span>${label}</span>
    </button>
  `;
}

function renderView() {
  if (currentView === "tree") return renderTree();
  if (currentView === "daily") return renderDaily();
  if (currentView === "profile") return renderProfile();
  return renderJourney();
}

function renderJourney() {
  const lesson = activeLesson();
  return `
    <div class="view">
      <div class="section-title">
        <div>
          <h2>Continue Quest</h2>
          <p>${completedCount()} of ${lessons.length} lessons mastered</p>
        </div>
        <span class="mini-pill">${unlockedLessons()} unlocked</span>
      </div>
      <article class="active-lesson">
        <img class="asset-hero" src="${lesson.image}" alt="${lesson.title} scene art">
        <div class="active-body">
          <p class="eyebrow">${lesson.era} / ${lesson.region}</p>
          <h3>${lesson.title}</h3>
          <p>${lesson.summary}</p>
          <div class="pill-row">
            <span class="pill">${icon("clock-3")} ${lesson.minutes} min</span>
            <span class="pill">${icon("sparkles")} ${lesson.xp} XP</span>
            <span class="pill">${icon("message-square-text")} Choices</span>
          </div>
          <button class="lesson-action" type="button" data-action="start-lesson" data-lesson="${lesson.id}">
            ${icon("play")} ${state.completed.includes(lesson.id) ? "Replay lesson" : "Start lesson"}
          </button>
        </div>
      </article>
      <div class="section-title">
        <div>
          <h2>Era Deck</h2>
          <p>Micro-lessons unlock through XP and mastery</p>
        </div>
      </div>
      <div class="lesson-list">
        ${lessons.map(renderLessonCard).join("")}
      </div>
    </div>
  `;
}

function renderLessonCard(lesson) {
  const locked = state.xp < lesson.requiredXp;
  const done = state.completed.includes(lesson.id);
  return `
    <article class="card lesson-card ${locked ? "locked" : ""}">
      <img class="lesson-thumb" src="${lesson.image}" alt="${lesson.title} miniature">
      ${locked ? `<span class="lock-chip">${icon("lock")} ${lesson.requiredXp} XP</span>` : ""}
      ${done ? `<span class="done-chip">${icon("check")} Done</span>` : ""}
      <div class="card-body">
        <div class="card-top">
          <p class="eyebrow">${lesson.era}</p>
          <span class="mini-pill">${lesson.minutes}m</span>
        </div>
        <h3>${lesson.title}</h3>
        <p>${lesson.summary}</p>
        <div class="pill-row">
          <span class="mini-pill">${lesson.region}</span>
          <span class="mini-pill">${lesson.xp} XP</span>
        </div>
        <button class="tiny-button" type="button" data-action="start-lesson" data-lesson="${lesson.id}" ${locked ? "disabled" : ""}>
          ${icon(locked ? "lock" : "play")} ${locked ? "Locked" : done ? "Replay" : "Begin"}
        </button>
      </div>
    </article>
  `;
}

function renderTree() {
  return `
    <div class="view">
      <div class="section-title">
        <div>
          <h2>Skill Tree</h2>
          <p>Unlock eras by proving mastery across regions</p>
        </div>
        <span class="mini-pill">${state.xp} XP</span>
      </div>
      <section class="tree-panel">
        <div class="tree-map">
          ${skillNodes.map((node, index) => renderTreeNode(node, index)).join("")}
        </div>
      </section>
    </div>
  `;
}

function renderTreeNode(node, index) {
  const unlocked = state.xp >= node.requiredXp;
  const nextRequired = skillNodes[index + 1]?.requiredXp || node.requiredXp + XP_PER_LEVEL;
  const span = Math.max(nextRequired - node.requiredXp, 1);
  const progress = unlocked ? Math.min(100, Math.round(((state.xp - node.requiredXp) / span) * 100)) : 0;
  return `
    <div>
      <article class="tree-node ${unlocked ? "unlocked" : "locked"}" style="--node-color:${node.color}">
        <div class="tree-node-head">
          <div class="profile-row">
            <div class="node-icon">${icon(unlocked ? node.icon : "lock")}</div>
            <div>
              <h3>${node.title}</h3>
              <p class="node-copy">${node.copy}</p>
            </div>
          </div>
          <span class="mini-pill">${unlocked ? "Open" : `${node.requiredXp} XP`}</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill" style="width:${progress}%"></div>
        </div>
      </article>
      ${index < skillNodes.length - 1 ? `<div class="node-connector"></div>` : ""}
    </div>
  `;
}

function renderDaily() {
  if (dailySession) return renderDailySession();
  const done = state.dailyDone === todayKey();
  return `
    <div class="view">
      <div class="section-title">
        <div>
          <h2>Daily Challenge</h2>
          <p>One fast run keeps your streak alive</p>
        </div>
        <span class="mini-pill">${done ? "Complete" : "+80 XP"}</span>
      </div>
      <article class="daily-hero">
        <img class="asset-hero" src="assets/daily.png" alt="Daily challenge scene art">
        <div class="daily-body">
          <p class="eyebrow">Chronicle Sprint</p>
          <h3>${done ? "Challenge cleared" : "3 questions, one streak save"}</h3>
          <p>${done ? "You already banked today's XP. Replay for practice or come back tomorrow for the ranked sprint." : "Answer quickly to climb the weekly league and keep the reminder loop warm."}</p>
          <button class="lesson-action" type="button" data-action="start-daily">
            ${icon(done ? "rotate-ccw" : "zap")} ${done ? "Practice sprint" : "Start sprint"}
          </button>
          <div class="daily-stats">
            <div class="daily-stat"><strong>${state.streak}</strong><span>streak</span></div>
            <div class="daily-stat"><strong>${state.boosts}</strong><span>boosts</span></div>
            <div class="daily-stat"><strong>#18</strong><span>league</span></div>
          </div>
        </div>
      </article>
      <section class="leaderboard" aria-label="Daily leaderboard">
        <div class="section-title">
          <div>
            <h2>Iron Age League</h2>
            <p>Weekly XP race</p>
          </div>
        </div>
        ${renderLeaderboard()}
      </section>
    </div>
  `;
}

function renderDailySession() {
  const question = dailyQuestions[dailySession.index];
  if (!question) return renderDailyComplete();
  return `
    <div class="view">
      <section class="quiz-card">
        <p class="quiz-count">Daily ${dailySession.index + 1} / ${dailyQuestions.length}</p>
        <h2>${question.question}</h2>
        <div class="quiz-options">
          ${question.options.map((option, index) => `
            <button class="quiz-option" type="button" data-action="daily-answer" data-index="${index}">
              ${icon("circle")}
              <strong>${option}</strong>
            </button>
          `).join("")}
        </div>
      </section>
    </div>
  `;
}

function renderDailyComplete() {
  const alreadyDone = state.dailyDone === todayKey();
  const reward = alreadyDone ? 10 : 80;
  return `
    <div class="view">
      <section class="complete-card">
        <div class="reward-ring"><span>+${reward}</span></div>
        <p class="eyebrow">Sprint complete</p>
        <h2>${dailySession.correct}/${dailyQuestions.length} correct</h2>
        <p class="daily-subcopy">Your recall loop is active. Leaderboard score updates after you claim the reward.</p>
        <button class="lesson-action" type="button" data-action="claim-daily">
          ${icon("trophy")} Claim ${reward} XP
        </button>
      </section>
    </div>
  `;
}

function renderLeaderboard() {
  const rows = leaderboard
    .map((row) => (row.you ? { ...row, xp: state.xp } : row))
    .sort((a, b) => b.xp - a.xp);
  return rows.map((row, index) => `
    <div class="leader-row ${row.you ? "you" : ""}">
      <div class="rank-name">
        <span class="rank-badge">${index + 1}</span>
        <span>${row.name}</span>
      </div>
      <span class="rank-xp">${row.xp} XP</span>
    </div>
  `).join("");
}

function renderProfile() {
  const info = levelInfo();
  const notificationCopy = state.notifications
    ? `Reminder armed for ${state.reminderTime}`
    : "Enable a daily nudge to protect the streak";
  return `
    <div class="view">
      <div class="section-title">
        <div>
          <h2>Profile</h2>
          <p>Retention loops and mastery stats</p>
        </div>
        <span class="mini-pill">Level ${info.level}</span>
      </div>
      <section class="profile-grid">
        <article class="profile-panel">
          <h3>Mastery</h3>
          <div class="metric"><strong>${completedCount()}</strong><span>lessons complete</span></div>
          <div class="metric"><strong>${unlockedLessons()}</strong><span>eras open</span></div>
        </article>
        <article class="profile-panel">
          <h3>Momentum</h3>
          <div class="metric"><strong>${state.streak}</strong><span>day streak</span></div>
          <div class="metric"><strong>${state.freeze}</strong><span>streak freeze</span></div>
        </article>
        <article class="profile-panel wide">
          <div class="section-title">
            <div>
              <h3>Streak Path</h3>
              <p>Seven day rhythm</p>
            </div>
          </div>
          <div class="streak-strip">
            ${["M", "T", "W", "T", "F", "S", "S"].map((day, index) => `<div class="day-dot ${index < Math.min(state.streak, 7) ? "active" : ""}">${day}</div>`).join("")}
          </div>
        </article>
      </section>
      <section class="settings-panel">
        <h3>Reminder System</h3>
        <div class="setting-row">
          <div>
            <h4>Push notifications</h4>
            <p class="setting-copy">${notificationCopy}</p>
          </div>
          <button class="tiny-button" type="button" data-action="toggle-notifications">
            ${icon(state.notifications ? "bell-ring" : "bell")} ${state.notifications ? "On" : "Enable"}
          </button>
        </div>
        <div class="setting-row">
          <div>
            <h4>Daily reminder</h4>
            <p class="setting-copy">The app stores your preferred practice time locally.</p>
          </div>
          <input class="time-input" type="time" value="${state.reminderTime}" data-action="set-reminder" aria-label="Daily reminder time">
        </div>
        <div class="setting-row">
          <div>
            <h4>Demo progress</h4>
            <p class="setting-copy">Reset XP, completions, streaks, and daily state.</p>
          </div>
          <button class="tiny-button" type="button" data-action="reset-demo">${icon("refresh-cw")} Reset</button>
        </div>
      </section>
    </div>
  `;
}

function startLesson(lessonId) {
  const lesson = lessons.find((item) => item.id === lessonId);
  if (!lesson || state.xp < lesson.requiredXp) {
    showToast("This lesson is still locked.");
    return;
  }
  lessonSession = {
    lesson,
    mode: "story",
    sceneIndex: 0,
    selectedChoice: null,
    traits: [],
    quizIndex: 0,
    correct: 0,
    answered: null
  };
  renderLessonOverlay();
}

function renderLessonOverlay() {
  const overlay = document.querySelector("#lessonOverlay");
  overlay.classList.remove("hidden");
  overlay.innerHTML = `
    <header class="lesson-header">
      <div class="top-row">
        <div class="lesson-title">
          <h1>${lessonSession.lesson.title}</h1>
          <p>${lessonSession.lesson.era} / ${lessonSession.lesson.minutes} min</p>
        </div>
        <button class="icon-button" type="button" data-action="close-lesson" aria-label="Close lesson">${icon("x")}</button>
      </div>
    </header>
    <section class="lesson-stage">
      ${lessonSession.mode === "story" ? renderStoryScene() : renderQuizScene()}
    </section>
  `;
  refreshIcons();
}

function renderStoryScene() {
  const scene = lessonSession.lesson.scenes[lessonSession.sceneIndex];
  const totalSteps = lessonSession.lesson.scenes.length + lessonSession.lesson.quiz.length;
  const currentStep = lessonSession.sceneIndex + 1;
  return `
    <article class="scene-card">
      <img class="asset-hero" src="${lessonSession.lesson.image}" alt="${scene.title} scene">
      <div class="scene-body">
        <div class="lesson-meta">
          <p class="quiz-count">Story ${currentStep} / ${totalSteps}</p>
          <span class="mini-pill">${lessonSession.lesson.xp} XP</span>
        </div>
        <h2>${scene.title}</h2>
        <p class="scene-copy">${scene.copy}</p>
        <p class="eyebrow" style="margin-top:16px">${scene.prompt}</p>
        <div class="choice-grid">
          ${scene.choices.map((choice, index) => `
            <button class="choice-card ${lessonSession.selectedChoice === index ? "selected" : ""}" type="button" data-action="choose-story" data-index="${index}">
              ${icon("git-branch")}
              <span><strong>${choice.label}</strong><span>${choice.trait}</span></span>
            </button>
          `).join("")}
        </div>
        ${lessonSession.selectedChoice !== null ? renderChoiceOutcome(scene) : ""}
      </div>
    </article>
  `;
}

function renderChoiceOutcome(scene) {
  const choice = scene.choices[lessonSession.selectedChoice];
  return `
    <div class="choice-outcome">
      <strong>${choice.trait} insight:</strong> ${choice.result}
    </div>
    <button class="lesson-action" type="button" data-action="continue-story">
      ${icon("arrow-right")} Continue
    </button>
  `;
}

function renderQuizScene() {
  if (lessonSession.quizIndex >= lessonSession.lesson.quiz.length) {
    return renderLessonComplete();
  }
  const quiz = lessonSession.lesson.quiz[lessonSession.quizIndex];
  const totalSteps = lessonSession.lesson.scenes.length + lessonSession.lesson.quiz.length;
  const currentStep = lessonSession.lesson.scenes.length + lessonSession.quizIndex + 1;
  return `
    <section class="quiz-card">
      <p class="quiz-count">Quiz ${currentStep} / ${totalSteps}</p>
      <h2>${quiz.question}</h2>
      <div class="quiz-options">
        ${quiz.options.map((option, index) => {
          const answered = lessonSession.answered !== null;
          const isCorrect = answered && index === quiz.answer;
          const isWrong = answered && index === lessonSession.answered && index !== quiz.answer;
          return `
            <button class="quiz-option ${isCorrect ? "correct" : ""} ${isWrong ? "wrong" : ""}" type="button" data-action="quiz-answer" data-index="${index}" ${answered ? "disabled" : ""}>
              ${icon(isCorrect ? "check-circle-2" : isWrong ? "x-circle" : "circle")}
              <strong>${option}</strong>
            </button>
          `;
        }).join("")}
      </div>
      ${lessonSession.answered !== null ? `
        <div class="quiz-feedback">
          <strong>${lessonSession.answered === quiz.answer ? "Correct." : "Close."}</strong>
          <p class="quiz-lore">${quiz.lore}</p>
        </div>
        <button class="lesson-action" type="button" data-action="continue-quiz">
          ${icon("arrow-right")} ${lessonSession.quizIndex === lessonSession.lesson.quiz.length - 1 ? "Finish" : "Next question"}
        </button>
      ` : ""}
    </section>
  `;
}

function renderLessonComplete() {
  const alreadyComplete = state.completed.includes(lessonSession.lesson.id);
  const score = lessonSession.correct;
  const possible = lessonSession.lesson.quiz.length;
  const earned = alreadyComplete ? 15 : lessonSession.lesson.xp + score * 10;
  return `
    <section class="complete-card">
      <div class="reward-ring"><span>+${earned}</span></div>
      <p class="eyebrow">${alreadyComplete ? "Practice complete" : "Lesson mastered"}</p>
      <h2>${score}/${possible} quiz score</h2>
      <p class="daily-subcopy">Choices logged: ${lessonSession.traits.join(", ") || "steady observer"}. Your skill tree checks XP immediately after claiming.</p>
      <button class="lesson-action" type="button" data-action="claim-lesson">
        ${icon("sparkles")} Claim reward
      </button>
    </section>
  `;
}

function chooseStory(index) {
  const scene = lessonSession.lesson.scenes[lessonSession.sceneIndex];
  lessonSession.selectedChoice = index;
  const trait = scene.choices[index].trait;
  if (!lessonSession.traits.includes(trait)) {
    lessonSession.traits.push(trait);
  }
  state.choices[`${lessonSession.lesson.id}-${lessonSession.sceneIndex}`] = index;
  saveState();
  renderLessonOverlay();
}

function continueStory() {
  lessonSession.sceneIndex += 1;
  lessonSession.selectedChoice = null;
  if (lessonSession.sceneIndex >= lessonSession.lesson.scenes.length) {
    lessonSession.mode = "quiz";
  }
  renderLessonOverlay();
}

function answerQuiz(index) {
  if (lessonSession.answered !== null) return;
  const quiz = lessonSession.lesson.quiz[lessonSession.quizIndex];
  lessonSession.answered = index;
  if (index === quiz.answer) lessonSession.correct += 1;
  renderLessonOverlay();
}

function continueQuiz() {
  lessonSession.quizIndex += 1;
  lessonSession.answered = null;
  renderLessonOverlay();
}

function claimLesson() {
  const lesson = lessonSession.lesson;
  const alreadyComplete = state.completed.includes(lesson.id);
  const earned = alreadyComplete ? 15 : lesson.xp + lessonSession.correct * 10;
  state.xp += earned;
  state.lessonScores[lesson.id] = Math.max(state.lessonScores[lesson.id] || 0, lessonSession.correct);
  if (!alreadyComplete) {
    state.completed.push(lesson.id);
    state.streak += state.dailyDone === todayKey() ? 0 : 1;
  }
  saveState();
  lessonSession = null;
  render();
  showToast(`Reward claimed: +${earned} XP`);
}

function startDaily() {
  dailySession = { index: 0, correct: 0 };
  render();
}

function answerDaily(index) {
  const question = dailyQuestions[dailySession.index];
  if (index === question.answer) dailySession.correct += 1;
  dailySession.index += 1;
  render();
}

function claimDaily() {
  const alreadyDone = state.dailyDone === todayKey();
  const reward = alreadyDone ? 10 : 80;
  state.xp += reward;
  if (!alreadyDone) {
    state.dailyDone = todayKey();
    state.streak += 1;
    if (dailySession.correct === dailyQuestions.length) state.boosts += 1;
  }
  dailySession = null;
  saveState();
  render();
  showToast(`Daily sprint banked: +${reward} XP`);
}

async function toggleNotifications() {
  if (!("Notification" in window)) {
    showToast("This browser does not expose push notifications.");
    return;
  }
  if (!state.notifications) {
    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
      showToast("Notifications were not enabled.");
      return;
    }
    state.notifications = true;
    try {
      new Notification("Chronicle Quest reminder armed", {
        body: `Daily history sprint set for ${state.reminderTime}.`
      });
    } catch {
      // Some browsers block immediate local notifications; the app state still reflects the preference.
    }
    showToast("Push reminder enabled.");
  } else {
    state.notifications = false;
    showToast("Push reminder paused.");
  }
  saveState();
  render();
}

function setReminder(value) {
  state.reminderTime = value || "19:30";
  saveState();
  render();
  showToast(`Reminder set for ${state.reminderTime}`);
}

function resetDemo() {
  state = { ...defaultState, completed: [...defaultState.completed], lessonScores: { ...defaultState.lessonScores }, choices: {} };
  currentView = "journey";
  dailySession = null;
  lessonSession = null;
  saveState();
  render();
  showToast("Demo progress reset.");
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  if (!toast) return;
  window.clearTimeout(toastTimer);
  toast.innerHTML = `<div class="toast-row">${icon("sparkles")} <strong>${message}</strong></div>`;
  toast.classList.remove("hidden");
  refreshIcons();
  toastTimer = window.setTimeout(() => {
    toast.classList.add("hidden");
  }, 2600);
}

function closeLesson() {
  lessonSession = null;
  const overlay = document.querySelector("#lessonOverlay");
  overlay.classList.add("hidden");
  overlay.innerHTML = "";
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;

  if (action === "nav") {
    currentView = target.dataset.view;
    dailySession = null;
    render();
  }
  if (action === "show-profile") {
    currentView = "profile";
    render();
  }
  if (action === "start-lesson") startLesson(target.dataset.lesson);
  if (action === "close-lesson") closeLesson();
  if (action === "choose-story") chooseStory(Number(target.dataset.index));
  if (action === "continue-story") continueStory();
  if (action === "quiz-answer") answerQuiz(Number(target.dataset.index));
  if (action === "continue-quiz") continueQuiz();
  if (action === "claim-lesson") claimLesson();
  if (action === "start-daily") startDaily();
  if (action === "daily-answer") answerDaily(Number(target.dataset.index));
  if (action === "claim-daily") claimDaily();
  if (action === "toggle-notifications") toggleNotifications();
  if (action === "reset-demo") resetDemo();
});

document.addEventListener("change", (event) => {
  const target = event.target.closest("[data-action='set-reminder']");
  if (target) setReminder(target.value);
});

render();
