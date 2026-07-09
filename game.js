// BJJ Escape Challenge - Main Game Logic
// Enhanced with belt ranking system, animations, high scores, and restart functionality

let currentQuestion = 0;
let correctAnswers = 0;
let totalQuestions = 10;
let questions = [];
let gameMode = 'progressive'; // 'progressive' or 'difficulty-specific'
let highScores = [];

// DOM elements
let startScreen, gameScreen, endScreen;
let questionText, answersContainer, feedbackDiv, progressBar, progressText;
let scoreDisplay, finalScoreDisplay, beltDisplay, currentBeltDisplay, nextBeltDisplay;
let playAgainBtn, backToMenuBtn, restartBtn;

// Initialize game
function init() {
  // Get DOM elements
  startScreen = document.getElementById('startScreen');
  gameScreen = document.getElementById('gameScreen');
  endScreen = document.getElementById('endScreen');
  
  questionText = document.getElementById('questionText');
  answersContainer = document.getElementById('answers');
  feedbackDiv = document.getElementById('feedback');
  progressBar = document.getElementById('progressBar');
  progressText = document.getElementById('progressText');
  
  scoreDisplay = document.getElementById('scoreDisplay');
  finalScoreDisplay = document.getElementById('finalScore');
  beltDisplay = document.getElementById('beltDisplay');
  currentBeltDisplay = document.getElementById('currentBelt');
  nextBeltDisplay = document.getElementById('nextBelt');
  
  playAgainBtn = document.getElementById('playAgain');
  backToMenuBtn = document.getElementById('backToMenu');
  restartBtn = document.getElementById('restartBtn');
  
  // Load high scores from localStorage
  loadHighScores();
  
  // Setup event listeners
  setupEventListeners();
  
  // Show start screen
  showScreen('start');
}

// Setup all event listeners
function setupEventListeners() {
  // Start game buttons
  document.getElementById('startRandom').addEventListener('click', () => startGame('random'));
  document.getElementById('startWhite').addEventListener('click', () => startGame('white'));
  document.getElementById('startBlue').addEventListener('click', () => startGame('blue'));
  document.getElementById('startPurple').addEventListener('click', () => startGame('purple'));
  document.getElementById('startBrown').addEventListener('click', () => startGame('brown'));
  
  // End screen buttons
  playAgainBtn.addEventListener('click', () => {
    startGame(gameMode);
  });
  
  backToMenuBtn.addEventListener('click', () => {
    showScreen('start');
  });
  
  // Restart button during game
  restartBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to restart? Your progress will be lost.')) {
      showScreen('start');
    }
  });
}

// Start game with selected difficulty
function startGame(difficulty) {
  gameMode = difficulty;
  currentQuestion = 0;
  correctAnswers = 0;
  
  // Get questions based on difficulty
  if (difficulty === 'random') {
    questions = getRandomQuestions(totalQuestions);
  } else {
    questions = getQuestionsByDifficulty(difficulty, totalQuestions);
    // If not enough questions of that difficulty, add random ones
    if (questions.length < totalQuestions) {
      const additionalNeeded = totalQuestions - questions.length;
      const additionalQuestions = getRandomQuestions(additionalNeeded);
      questions = [...questions, ...additionalQuestions];
    }
  }
  
  // Show game screen and load first question
  showScreen('game');
  updateScore();
  loadQuestion();
}

// Show specific screen
function showScreen(screen) {
  startScreen.classList.remove('active');
  gameScreen.classList.remove('active');
  endScreen.classList.remove('active');
  
  if (screen === 'start') {
    startScreen.classList.add('active');
    updateHighScoreDisplay();
  } else if (screen === 'game') {
    gameScreen.classList.add('active');
  } else if (screen === 'end') {
    endScreen.classList.add('active');
    showResults();
  }
}

// Load current question
function loadQuestion() {
  if (currentQuestion >= questions.length) {
    endGame();
    return;
  }
  
  const question = questions[currentQuestion];
  
  // Update question text
  questionText.textContent = question.question;
  
  // Show category and difficulty badge
  const categoryBadge = `<span class="category-badge ${question.difficulty}">${question.category}</span>`;
  questionText.innerHTML = `${categoryBadge}<br>${question.question}`;
  
  // Generate answers
  const answers = generateAnswers(question);
  
  // Clear previous answers
  answersContainer.innerHTML = '';
  feedbackDiv.style.display = 'none';
  feedbackDiv.className = 'feedback';
  
  // Create answer buttons
  answers.forEach((answer, index) => {
    const button = document.createElement('button');
    button.className = 'answer-btn';
    button.textContent = answer.text;
    button.addEventListener('click', () => selectAnswer(answer, button));
    answersContainer.appendChild(button);
  });
  
  // Update progress
  updateProgress();
}

// Update progress bar and text
function updateProgress() {
  const progress = ((currentQuestion) / questions.length) * 100;
  progressBar.style.width = progress + '%';
  progressText.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
}

// Update score display
function updateScore() {
  scoreDisplay.textContent = `Score: ${correctAnswers}/${totalQuestions}`;
  updateBeltDisplay();
}

// Update belt display during game
function updateBeltDisplay() {
  const currentBelt = getCurrentBelt(correctAnswers);
  const beltInfo = BELT_SYSTEM[currentBelt];
  const nextInfo = getNextBeltInfo(correctAnswers);
  
  if (beltDisplay) {
    beltDisplay.innerHTML = `
      <div class="belt-icon ${currentBelt}"></div>
      <span>${beltInfo.name}</span>
    `;
  }
  
  if (currentBeltDisplay) {
    currentBeltDisplay.innerHTML = `
      <div class="belt-display-large ${currentBelt}">
        <div class="belt-icon ${currentBelt}"></div>
        <div class="belt-name">${beltInfo.name}</div>
      </div>
    `;
  }
  
  if (nextBeltDisplay && !nextInfo.isMaxBelt) {
    nextBeltDisplay.innerHTML = `
      <p>Next: ${nextInfo.name}</p>
      <p class="questions-needed">${nextInfo.questionsNeeded} more correct answers needed</p>
    `;
  } else if (nextBeltDisplay && nextInfo.isMaxBelt) {
    nextBeltDisplay.innerHTML = `
      <p class="max-belt">Maximum Rank Achieved!</p>
      <p>You are a true BJJ master!</p>
    `;
  }
}

// Handle answer selection
function selectAnswer(answer, button) {
  const question = questions[currentQuestion];
  const allButtons = answersContainer.querySelectorAll('.answer-btn');
  
  // Disable all buttons
  allButtons.forEach(btn => {
    btn.disabled = true;
    if (btn !== button) {
      btn.classList.add('disabled');
    }
  });
  
  // Check if answer is correct
  if (answer.correct) {
    correctAnswers++;
    button.classList.add('correct');
    showFeedback(true, question.explanation);
    updateScore();
    
    // Trigger confetti for correct answer
    createConfetti();
  } else {
    button.classList.add('wrong');
    
    // Show correct answer
    allButtons.forEach(btn => {
      const btnText = btn.textContent;
      if (btnText === question.correct) {
        btn.classList.add('correct');
      }
    });
    
    showFeedback(false, question.explanation);
  }
  
  // Auto-advance after delay
  setTimeout(() => {
    nextQuestion();
  }, 3000);
}

// Show feedback message
function showFeedback(isCorrect, explanation) {
  feedbackDiv.style.display = 'block';
  
  if (isCorrect) {
    feedbackDiv.className = 'feedback correct';
    feedbackDiv.innerHTML = `
      <strong>Correct!</strong>
      <p>${explanation}</p>
    `;
  } else {
    feedbackDiv.className = 'feedback wrong';
    feedbackDiv.innerHTML = `
      <strong>Incorrect</strong>
      <p>${explanation}</p>
    `;
  }
  
  feedbackDiv.classList.add('show');
}

// Move to next question
function nextQuestion() {
  currentQuestion++;
  loadQuestion();
}

// End game and show results
function endGame() {
  // Save high score
  saveHighScore();
  
  showScreen('end');
}

// Show results screen
function showResults() {
  finalScoreDisplay.textContent = `${correctAnswers} / ${totalQuestions}`;
  
  // Update belt displays
  updateBeltDisplay();
  
  // Show performance message
  const percentage = (correctAnswers / totalQuestions) * 100;
  let message = '';
  
  if (percentage === 100) {
    message = 'Perfect! You are a true BJJ master!';
    createMegaConfetti();
  } else if (percentage >= 80) {
    message = 'Excellent work! You know your techniques!';
  } else if (percentage >= 60) {
    message = 'Good job! Keep training!';
  } else if (percentage >= 40) {
    message = 'Not bad! More mat time needed!';
  } else {
    message = 'Keep studying! OSS!';
  }
  
  const messageDiv = document.getElementById('performanceMessage');
  if (messageDiv) {
    messageDiv.textContent = message;
  }
  
  // Update high scores display
  updateHighScoreDisplay();
}

// Confetti animation for correct answers
function createConfetti() {
  const confettiCount = 30;
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8'];
  
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDelay = Math.random() * 0.5 + 's';
    confetti.style.animationDuration = Math.random() * 2 + 2 + 's';
    document.body.appendChild(confetti);
    
    setTimeout(() => {
      confetti.remove();
    }, 4000);
  }
}

// Mega confetti for perfect score
function createMegaConfetti() {
  const confettiCount = 100;
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#FFD700'];
  
  for (let i = 0; i < confettiCount; i++) {
    setTimeout(() => {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDelay = '0s';
      confetti.style.animationDuration = Math.random() * 2 + 3 + 's';
      document.body.appendChild(confetti);
      
      setTimeout(() => {
        confetti.remove();
      }, 5000);
    }, i * 20);
  }
}

// High score management
function loadHighScores() {
  const saved = localStorage.getItem('bjjHighScores');
  if (saved) {
    try {
      highScores = JSON.parse(saved);
    } catch (e) {
      highScores = [];
    }
  } else {
    highScores = [];
  }
}

function saveHighScore() {
  const score = {
    score: correctAnswers,
    total: totalQuestions,
    belt: getCurrentBelt(correctAnswers),
    date: new Date().toLocaleDateString(),
    mode: gameMode
  };
  
  highScores.push(score);
  
  // Sort by score descending
  highScores.sort((a, b) => {
    const percentA = (a.score / a.total);
    const percentB = (b.score / b.total);
    return percentB - percentA;
  });
  
  // Keep top 10
  highScores = highScores.slice(0, 10);
  
  // Save to localStorage
  localStorage.setItem('bjjHighScores', JSON.stringify(highScores));
}

function updateHighScoreDisplay() {
  const highScoreList = document.getElementById('highScoreList');
  if (!highScoreList) return;
  
  if (highScores.length === 0) {
    highScoreList.innerHTML = '<p class="no-scores">No high scores yet. Be the first!</p>';
    return;
  }
  
  highScoreList.innerHTML = highScores.map((score, index) => {
    const beltInfo = BELT_SYSTEM[score.belt];
    return `
      <div class="high-score-item">
        <span class="rank">#${index + 1}</span>
        <div class="belt-icon ${score.belt}"></div>
        <span class="score-text">${score.score}/${score.total}</span>
        <span class="score-date">${score.date}</span>
      </div>
    `;
  }).join('');
}

// Initialize game when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
