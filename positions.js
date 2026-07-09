// BJJ Escape Challenge - Question Database
// Comprehensive questions covering escapes, submissions, positions, sweeps, guard passes, and IBJJF rules

const BJJ_QUESTIONS = [
  // MOUNT ESCAPES (White Belt)
  {
    category: "Mount Escape",
    difficulty: "white",
    question: "You're mounted. What's the first priority?",
    correct: "Trap an arm and leg on the same side",
    wrong: ["Bridge randomly", "Give up your back", "Try to bench press opponent"],
    explanation: "Upa escape requires trapping arm and leg on same side, then bridge at 45 degrees.",
    imageUrl: "mount"
  },
  {
    category: "Mount Escape",
    difficulty: "white",
    question: "In mount, your opponent is sitting high on your chest. Best escape?",
    correct: "Elbow escape (shrimp) to recover guard",
    wrong: ["Bridge straight up", "Turn to your side quickly", "Push their hips"],
    explanation: "Elbow escape creates space to get your knee inside and recover guard.",
    imageUrl: "mount"
  },
  {
    category: "Mount Escape",
    difficulty: "blue",
    question: "Your opponent has high mount with grapevine. What do?",
    correct: "Walk your hips up to create space, then shrimp",
    wrong: ["Bridge explosively", "Straighten your legs", "Accept your fate"],
    explanation: "Walking hips up creates the space needed to start escaping the grapevine.",
    imageUrl: "mount"
  },

  // SIDE CONTROL ESCAPES (White-Blue Belt)
  {
    category: "Side Control Escape",
    difficulty: "white",
    question: "Trapped in side control. What's your frame?",
    correct: "Near arm frames on hip, far arm on neck/shoulder",
    wrong: ["Both hands push the chest", "Grab their gi randomly", "T-Rex arms tucked in"],
    explanation: "Proper frames prevent your opponent from advancing and create escape opportunities.",
    imageUrl: "side"
  },
  {
    category: "Side Control Escape",
    difficulty: "blue",
    question: "Escaping side control: opponent is heavy on your chest. Next move?",
    correct: "Create space with bridge, insert knee, recover guard",
    wrong: ["Roll to turtle immediately", "Grab their belt and hold", "Stay flat and pray"],
    explanation: "Bridge creates space, then shrimp and get the knee in to recover guard.",
    imageUrl: "side"
  },
  {
    category: "Side Control Escape",
    difficulty: "blue",
    question: "Opponent transitions from side control to north-south. Your escape?",
    correct: "Bridge and turn into them to recover guard",
    wrong: ["Bridge away", "Stay flat", "Give up the mount"],
    explanation: "Turning INTO them during north-south allows you to recover guard or half guard.",
    imageUrl: "side"
  },

  // BACK CONTROL ESCAPES (Blue-Purple Belt)
  {
    category: "Back Escape",
    difficulty: "blue",
    question: "Opponent has your back with both hooks in. First defense?",
    correct: "Protect your neck with both hands",
    wrong: ["Remove the hooks first", "Bridge backwards", "Relax and accept it"],
    explanation: "Always protect the neck first. You can't tap if you're unconscious!",
    imageUrl: "back"
  },
  {
    category: "Back Escape",
    difficulty: "purple",
    question: "One hook is in, opponent attacking the choke. Your escape?",
    correct: "Remove the bottom hook, face them, recover guard",
    wrong: ["Remove top hook first", "Roll forward", "Go to turtle"],
    explanation: "Bottom hook removal allows you to turn and face them, recovering to guard.",
    imageUrl: "back"
  },
  {
    category: "Back Escape",
    difficulty: "purple",
    question: "They have your back, you cleared one hook. Next priority?",
    correct: "Turn into them and recover guard",
    wrong: ["Stand up immediately", "Remove other hook first", "Go to turtle position"],
    explanation: "After clearing a hook, turn in to prevent them from re-establishing position.",
    imageUrl: "back"
  },

  // CLOSED GUARD (White-Blue Belt)
  {
    category: "Closed Guard",
    difficulty: "white",
    question: "In someone's closed guard. How to open it?",
    correct: "Stand up with good posture and break grips",
    wrong: ["Pull their legs apart with hands", "Stay kneeling and muscle it", "Ask nicely"],
    explanation: "Standing with proper posture is the most effective way to open closed guard.",
    imageUrl: "guard"
  },
  {
    category: "Closed Guard",
    difficulty: "blue",
    question: "You're in closed guard. Opponent has strong collar grip. Defense?",
    correct: "Two-on-one grip break, establish posture",
    wrong: ["Ignore it and pass", "Sit back in their guard", "Pull their arm down"],
    explanation: "Two-on-one grip break is fundamental to maintaining posture in closed guard.",
    imageUrl: "guard"
  },

  // GUARD PASSES (Blue-Purple Belt)
  {
    category: "Guard Pass",
    difficulty: "blue",
    question: "Passing half guard: opponent has underhook. Counter?",
    correct: "Get the whizzer (overhook) and drive into them",
    wrong: ["Let them take your back", "Stand up quickly", "Pull away"],
    explanation: "Whizzer neutralizes the underhook and allows you to control the pass.",
    imageUrl: "half"
  },
  {
    category: "Guard Pass",
    difficulty: "purple",
    question: "Opponent is playing spider guard. Best pass option?",
    correct: "Strip grips, stack, and pass to one side",
    wrong: ["Jump over their legs", "Stay in their guard", "Pull their legs apart"],
    explanation: "Grip stripping neutralizes spider guard control, then stack to pass.",
    imageUrl: "guard"
  },
  {
    category: "Guard Pass",
    difficulty: "purple",
    question: "Passing de la riva guard: what's your first priority?",
    correct: "Clear the hook and kill the angle",
    wrong: ["Cartwheel over", "Pull back hard", "Sit down"],
    explanation: "Clearing the DLR hook removes their control and angle.",
    imageUrl: "guard"
  },

  // SUBMISSIONS - CHOKES (White-Purple Belt)
  {
    category: "Submissions",
    difficulty: "white",
    question: "Setting up rear naked choke: where should your choking arm be?",
    correct: "Across the neck, blade of forearm on carotid",
    wrong: ["Under the chin", "On top of head", "Around the throat"],
    explanation: "Blood choke targeting carotids is faster and more effective than airway choke.",
    imageUrl: "choke"
  },
  {
    category: "Submissions",
    difficulty: "blue",
    question: "Applying bow and arrow choke. Where does your leg go?",
    correct: "Across their body for maximum torque",
    wrong: ["Behind their back", "Over their head", "Nowhere special"],
    explanation: "Leg across body creates the torque that makes bow and arrow so effective.",
    imageUrl: "choke"
  },
  {
    category: "Submissions",
    difficulty: "blue",
    question: "Triangle choke isn't tight. What adjustment?",
    correct: "Angle off, pull head down, squeeze knees together",
    wrong: ["Let it go", "Straighten both legs", "Arch your back"],
    explanation: "Proper angle and head control are essential for tight triangle.",
    imageUrl: "triangle"
  },

  // SUBMISSIONS - ARM LOCKS (White-Purple Belt)
  {
    category: "Submissions",
    difficulty: "white",
    question: "Finishing armbar from guard. Which way do your hips go?",
    correct: "Hips up toward their head",
    wrong: ["Hips down to floor", "Hips stay neutral", "Spin around"],
    explanation: "Hip elevation increases the leverage on the arm lock.",
    imageUrl: "armbar"
  },
  {
    category: "Submissions",
    difficulty: "blue",
    question: "They're defending armbar by clasping hands. Best counter?",
    correct: "Pry hands apart, or switch to triangle/omoplata",
    wrong: ["Give up", "Arm-drag to back", "Let go and start over"],
    explanation: "Multiple attacks from armbar position force them to defend everything.",
    imageUrl: "armbar"
  },
  {
    category: "Submissions",
    difficulty: "purple",
    question: "Setting up Kimura from half guard. Where's your grip?",
    correct: "Figure-four on their wrist, control the elbow",
    wrong: ["Both hands on wrist", "Grab their gi", "One hand only"],
    explanation: "Figure-four grip gives maximum control for Kimura finish.",
    imageUrl: "kimura"
  },

  // SUBMISSIONS - LEG LOCKS (Purple Belt+)
  {
    category: "Submissions",
    difficulty: "purple",
    question: "Straight ankle lock: which way do you rotate?",
    correct: "Rotate toward the outside of their foot",
    wrong: ["Toward the inside", "Don't rotate", "Straight back only"],
    explanation: "External rotation adds pressure to the ankle joint.",
    imageUrl: "leglock"
  },
  {
    category: "Submissions",
    difficulty: "brown",
    question: "Defending heel hook: what's the priority?",
    correct: "Clear the heel grip and straighten your leg immediately",
    wrong: ["Roll with it", "Try to kick out", "Counter heel hook"],
    explanation: "Heel hooks are extremely dangerous - clear the grip before injury occurs.",
    imageUrl: "leglock"
  },

  // SWEEPS (Blue-Purple Belt)
  {
    category: "Sweeps",
    difficulty: "blue",
    question: "Scissor sweep from closed guard. When do you execute?",
    correct: "When they're leaning forward with weight on you",
    wrong: ["When they have perfect posture", "When they're standing", "Random timing"],
    explanation: "Timing the sweep when weight is forward makes it effortless.",
    imageUrl: "sweep"
  },
  {
    category: "Sweeps",
    difficulty: "blue",
    question: "Flower sweep setup: what grips do you need?",
    correct: "Collar and control their posting arm",
    wrong: ["Both sleeves", "Just their pants", "No grips needed"],
    explanation: "Controlling the collar and posting arm prevents them from basing.",
    imageUrl: "sweep"
  },
  {
    category: "Sweeps",
    difficulty: "purple",
    question: "X-guard sweep: where does your top hook go?",
    correct: "Behind their knee for lift and control",
    wrong: ["Around their waist", "Their ankle", "Nowhere"],
    explanation: "Top hook behind knee gives elevation control for X-guard sweeps.",
    imageUrl: "xguard"
  },
  {
    category: "Sweeps",
    difficulty: "purple",
    question: "Attempting butterfly sweep. They sprawl back. Counter?",
    correct: "Follow them up, take the back or single leg",
    wrong: ["Give up", "Pull them back into guard", "Lie flat"],
    explanation: "Following their weight leads to back takes or single leg opportunities.",
    imageUrl: "butterfly"
  },

  // TAKEDOWNS (White-Blue Belt)
  {
    category: "Takedowns",
    difficulty: "white",
    question: "Setting up double leg takedown. What's the level change?",
    correct: "Drop your level, penetration step, drive through",
    wrong: ["Stay upright", "Jump at them", "Bend at waist only"],
    explanation: "Proper level change and penetration are key to successful takedowns.",
    imageUrl: "takedown"
  },
  {
    category: "Takedowns",
    difficulty: "blue",
    question: "Opponent sprawls on your double leg. Best response?",
    correct: "Run the pipe or switch to single leg",
    wrong: ["Give up", "Pull guard", "Stay there"],
    explanation: "Multiple options from failed takedown keep the pressure on.",
    imageUrl: "takedown"
  },

  // IBJJF RULES (All Belts)
  {
    category: "IBJJF Rules",
    difficulty: "white",
    question: "How many points for mount?",
    correct: "4 points",
    wrong: ["2 points", "3 points", "5 points"],
    explanation: "Mount is worth 4 points in IBJJF scoring.",
    imageUrl: "rules"
  },
  {
    category: "IBJJF Rules",
    difficulty: "white",
    question: "Points for passing guard?",
    correct: "3 points",
    wrong: ["2 points", "4 points", "5 points"],
    explanation: "Guard pass is 3 points, must stabilize for 3 seconds.",
    imageUrl: "rules"
  },
  {
    category: "IBJJF Rules",
    difficulty: "blue",
    question: "Points for sweep from guard?",
    correct: "2 points",
    wrong: ["3 points", "4 points", "1 point"],
    explanation: "Sweeps from guard or half guard are worth 2 points.",
    imageUrl: "rules"
  },
  {
    category: "IBJJF Rules",
    difficulty: "blue",
    question: "Points for knee on belly?",
    correct: "2 points",
    wrong: ["3 points", "4 points", "1 point"],
    explanation: "Knee on belly scores 2 points when stabilized.",
    imageUrl: "rules"
  },
  {
    category: "IBJJF Rules",
    difficulty: "white",
    question: "Points for taking the back with both hooks?",
    correct: "4 points",
    wrong: ["2 points", "3 points", "5 points"],
    explanation: "Back control with both hooks scores 4 points.",
    imageUrl: "rules"
  },
  {
    category: "IBJJF Rules",
    difficulty: "blue",
    question: "At white belt, are heel hooks legal?",
    correct: "No, heel hooks are illegal",
    wrong: ["Yes, always legal", "Only in gi", "Only in no-gi"],
    explanation: "Heel hooks are illegal at white, blue, purple, and brown belt in IBJJF.",
    imageUrl: "rules"
  },
  {
    category: "IBJJF Rules",
    difficulty: "blue",
    question: "Can you slam to escape a submission?",
    correct: "No, slamming is illegal and results in disqualification",
    wrong: ["Yes, always allowed", "Only in finals", "Only triangle escapes"],
    explanation: "Slamming is never legal in IBJJF competition.",
    imageUrl: "rules"
  },
  {
    category: "IBJJF Rules",
    difficulty: "purple",
    question: "How long must you stabilize for points?",
    correct: "3 seconds",
    wrong: ["5 seconds", "2 seconds", "1 second"],
    explanation: "All positions must be stabilized for 3 seconds to score points.",
    imageUrl: "rules"
  },
  {
    category: "IBJJF Rules",
    difficulty: "white",
    question: "What determines winner if points are tied?",
    correct: "Advantages, then referee decision",
    wrong: ["Coin flip", "Overtime round", "Both lose"],
    explanation: "Advantages break ties, then referee decides based on who was more aggressive.",
    imageUrl: "rules"
  },
  {
    category: "IBJJF Rules",
    difficulty: "blue",
    question: "When can you get an advantage?",
    correct: "Almost achieving a position, sweep, or submission",
    wrong: ["For good technique", "Randomly by referee", "For takedown attempts"],
    explanation: "Advantages are awarded for near-successful techniques.",
    imageUrl: "rules"
  },

  // POSITIONS & CONCEPTS (All Belts)
  {
    category: "Position Concepts",
    difficulty: "white",
    question: "What is 'base' in jiu-jitsu?",
    correct: "Your structural balance and stability",
    wrong: ["The gym you train at", "Your main technique", "Starting position"],
    explanation: "Good base prevents sweeps and makes you hard to move.",
    imageUrl: "concept"
  },
  {
    category: "Position Concepts",
    difficulty: "blue",
    question: "What does 'posture' mean in guard?",
    correct: "Upright spine preventing opponent's attacks",
    wrong: ["How you sit", "Your gi position", "Your attitude"],
    explanation: "Good posture in guard breaks their grips and prevents submissions.",
    imageUrl: "concept"
  },
  {
    category: "Position Concepts",
    difficulty: "blue",
    question: "What is 'pressure passing'?",
    correct: "Using heavy weight to control and pass guard",
    wrong: ["Rushing through guard", "Emotional pressure", "Standing passes only"],
    explanation: "Pressure passing uses weight to limit opponent's movement and options.",
    imageUrl: "concept"
  },
  {
    category: "Position Concepts",
    difficulty: "purple",
    question: "The hierarchy of positions - what's the goal?",
    correct: "Advance position toward mount, back, or submission",
    wrong: ["Stay in guard", "Random movement", "Stall for time"],
    explanation: "Always seek to improve your position in the hierarchy.",
    imageUrl: "concept"
  },
  {
    category: "Position Concepts",
    difficulty: "white",
    question: "What is 'shrimping' or 'hip escape'?",
    correct: "Moving hips away while on your side to create space",
    wrong: ["A type of submission", "A fish technique", "Spinning move"],
    explanation: "Shrimping is the fundamental movement for creating space and escaping.",
    imageUrl: "concept"
  },
  {
    category: "Position Concepts",
    difficulty: "blue",
    question: "What is an 'underhook'?",
    correct: "Your arm under their arm, controlling their torso",
    wrong: ["A hook under the leg", "A foot sweep", "A type of choke"],
    explanation: "Underhooks are crucial for control in many positions.",
    imageUrl: "concept"
  },
  {
    category: "Position Concepts",
    difficulty: "purple",
    question: "What is 'inside position'?",
    correct: "Having your control points closer to opponent's center",
    wrong: ["Being inside the gym", "Guard position", "Any top position"],
    explanation: "Inside position gives superior control and limits opponent's options.",
    imageUrl: "concept"
  },

  // HALF GUARD (Blue-Purple Belt)
  {
    category: "Half Guard",
    difficulty: "blue",
    question: "You're on bottom half guard. Essential frame?",
    correct: "Underhook on far side and knee shield",
    wrong: ["Both hands on chest", "No frames needed", "Overhook only"],
    explanation: "Underhook and knee shield prevent them from flattening you and passing.",
    imageUrl: "half"
  },
  {
    category: "Half Guard",
    difficulty: "purple",
    question: "Top half guard: opponent has underhook. Your goal?",
    correct: "Get the whizzer and head control",
    wrong: ["Let them sweep", "Stand up and disengage", "Give up the pass"],
    explanation: "Whizzer and head control neutralize the underhook threat.",
    imageUrl: "half"
  },
  {
    category: "Half Guard",
    difficulty: "purple",
    question: "Bottom half guard: they're flattening you out. Escape?",
    correct: "Recover underhook or go to deep half guard",
    wrong: ["Accept side control", "Bridge randomly", "Stay flat"],
    explanation: "Recovering underhook or transitioning to deep half restores your defense.",
    imageUrl: "half"
  },

  // TURTLE POSITION (Blue-Purple Belt)
  {
    category: "Turtle",
    difficulty: "blue",
    question: "You're in turtle. Opponent has seatbelt grip. Defense?",
    correct: "Clear the choking arm, roll to guard or stand up",
    wrong: ["Stay in turtle", "Roll to your back", "Reach behind you"],
    explanation: "Clearing the choke and moving prevents back take.",
    imageUrl: "turtle"
  },
  {
    category: "Turtle",
    difficulty: "purple",
    question: "Attacking turtle: what's the best back take path?",
    correct: "Seatbelt grip, insert hooks while controlling",
    wrong: ["Jump on their back", "Pull them over", "Go for guillotine"],
    explanation: "Methodical control with seatbelt leads to clean back takes.",
    imageUrl: "turtle"
  },

  // 50/50 & LEG ENTANGLEMENTS (Purple-Brown Belt)
  {
    category: "Leg Entanglements",
    difficulty: "purple",
    question: "You're in 50/50 guard. What's neutral?",
    correct: "Both players have similar control of each other's legs",
    wrong: ["Nobody has control", "You're losing", "You're winning"],
    explanation: "50/50 is characterized by equal leg entanglement and control.",
    imageUrl: "5050"
  },
  {
    category: "Leg Entanglements",
    difficulty: "brown",
    question: "In ashi garami, which leg are you controlling?",
    correct: "One leg isolated with your legs",
    wrong: ["Both their legs", "Neither leg", "Your own leg"],
    explanation: "Ashi garami (single leg X) controls one leg for attacks.",
    imageUrl: "leglock"
  },

  // SPIDER GUARD (Blue-Purple Belt)
  {
    category: "Spider Guard",
    difficulty: "blue",
    question: "Playing spider guard. Where are your feet?",
    correct: "On their biceps with sleeve grips",
    wrong: ["On their hips", "On their chest", "Crossed behind them"],
    explanation: "Feet on biceps with sleeve control is classic spider guard.",
    imageUrl: "spider"
  },
  {
    category: "Spider Guard",
    difficulty: "purple",
    question: "Spider guard attack: opponent stands tall. Best sweep?",
    correct: "Scissor sweep or lasso sweep",
    wrong: ["Pull them down", "Let go and restart", "Armbar"],
    explanation: "When they stand, use their posture against them with sweeps.",
    imageUrl: "spider"
  }
];

// Shuffle array utility
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Get questions based on difficulty
function getQuestionsByDifficulty(difficulty, count = 10) {
  const filtered = BJJ_QUESTIONS.filter(q => q.difficulty === difficulty);
  const shuffled = shuffleArray(filtered);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Get random questions from all difficulties
function getRandomQuestions(count = 10) {
  const shuffled = shuffleArray(BJJ_QUESTIONS);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Generate answer array for a question
function generateAnswers(question) {
  const answers = [
    { text: question.correct, correct: true },
    ...question.wrong.map(w => ({ text: w, correct: false }))
  ];
  return shuffleArray(answers);
}

// Belt progression and scoring
const BELT_SYSTEM = {
  white: { name: "White Belt", questionsNeeded: 5, color: "#FFFFFF" },
  blue: { name: "Blue Belt", questionsNeeded: 10, color: "#2E5EAA" },
  purple: { name: "Purple Belt", questionsNeeded: 15, color: "#6B2E9A" },
  brown: { name: "Brown Belt", questionsNeeded: 20, color: "#5C4033" },
  black: { name: "Black Belt", questionsNeeded: 25, color: "#1A1A1A" }
};

// Get current belt based on score
function getCurrentBelt(correctAnswers) {
  if (correctAnswers >= BELT_SYSTEM.black.questionsNeeded) return "black";
  if (correctAnswers >= BELT_SYSTEM.brown.questionsNeeded) return "brown";
  if (correctAnswers >= BELT_SYSTEM.purple.questionsNeeded) return "purple";
  if (correctAnswers >= BELT_SYSTEM.blue.questionsNeeded) return "blue";
  return "white";
}

// Get next belt info
function getNextBeltInfo(correctAnswers) {
  const currentBelt = getCurrentBelt(correctAnswers);
  const belts = ["white", "blue", "purple", "brown", "black"];
  const currentIndex = belts.indexOf(currentBelt);
  
  if (currentIndex === belts.length - 1) {
    return { isMaxBelt: true, name: "Black Belt - Master!" };
  }
  
  const nextBelt = belts[currentIndex + 1];
  const needed = BELT_SYSTEM[nextBelt].questionsNeeded - correctAnswers;
  
  return {
    isMaxBelt: false,
    name: BELT_SYSTEM[nextBelt].name,
    questionsNeeded: needed
  };
}
