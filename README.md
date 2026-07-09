# BJJ Escape Challenge Game

A fully responsive Brazilian Jiu-Jitsu escape quiz game that works on all modern browsers and mobile devices.

## Features

### Game Mechanics
- **Three Difficulty Levels**
  - Beginner: 10 questions, 60 seconds
  - Intermediate: 15 questions, 90 seconds
  - Advanced: 20 questions, 120 seconds

### BJJ Positions Covered
- Side Control
- Mount
- Back Control
- Closed Guard Bottom
- Turtle
- North-South

### Game Elements
- **Scoring System**: 10 points per correct answer
- **Countdown Timer**: Visual warning when time is running low
- **Progress Bar**: Track your progress through the quiz
- **Instant Feedback**: Learn why each answer is correct or incorrect
- **High Scores**: Persistent storage using localStorage
- **Sound Effects**: Audio feedback for actions (correct, incorrect, timer, etc.)
- **Smooth Animations**: CSS animations for better user experience

### Responsive Design
- **Mobile-Optimized**: Touch-friendly buttons and layout
- **Desktop Support**: Full keyboard and mouse support
- **Cross-Browser Compatible**: Works on Chrome, Firefox, Safari, Edge
- **Accessibility**: Respects prefers-reduced-motion settings

## How to Play

1. Select your difficulty level
2. Read the BJJ position presented
3. Choose the correct escape technique
4. Get instant feedback with explanations
5. Try to beat your high score!

## Technical Details

### Files
- `index.html` - Main HTML structure
- `styles.css` - Responsive CSS with martial arts theme
- `positions.js` - BJJ positions database with escapes and explanations
- `game.js` - Game logic, timer, scoring, and sound effects

### Technologies Used
- Pure JavaScript (no frameworks required)
- CSS3 animations and transitions
- HTML5 localStorage API
- Web Audio API for sound effects
- Responsive design using CSS Flexbox

### Browser Compatibility
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile, Samsung Internet)

## Running the Game

### Option 1: Open directly
Simply open `index.html` in any modern web browser.

### Option 2: Use a local server
```bash
# Python 3
python -m http.server 8000

# Node.js (with npx)
npx serve

# VS Code Live Server extension
Right-click index.html > Open with Live Server
```

Then navigate to `http://localhost:8000` (or the appropriate port).

## Game Design

### Scoring
- Each correct answer: +10 points
- No penalty for incorrect answers (learning-focused)
- High scores saved per difficulty level

### Educational Approach
The game provides detailed explanations for every answer, including:
- Why the correct answer works
- Why incorrect options are ineffective or dangerous
- Proper BJJ technique principles

### Accessibility
- Large touch targets for mobile devices
- High contrast text for readability
- Smooth animations that can be disabled
- Clear visual feedback for all actions

## Credits

Created as an educational tool for Brazilian Jiu-Jitsu practitioners to test and improve their escape knowledge.

## License

Free to use for educational purposes.