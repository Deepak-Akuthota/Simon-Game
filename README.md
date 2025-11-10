# Simon-Game

## 📌 Overview

This is a **Simon Memory Game** built using **HTML, CSS, and JavaScript (with jQuery)**. The objective of the game is to test and improve your memory by repeating an ever‑increasing sequence of colors.

The game displays a series of colored button flashes. Your task is to remember the order and repeat the sequence correctly. Each successful round increases the game level.

---

## 🎮 How to Play

1. **Start the Game**
   Press **any key** on your keyboard to begin the game.

2. **Watch the Sequence**
   One of the four colored buttons (Green, Red, Yellow, Blue) will flash. This is the start of the pattern.

3. **Repeat the Sequence**
   Click on the buttons in the exact same order as the pattern displayed by the game.

4. **Level Up**
   After each correct sequence, the game will automatically generate a new pattern by adding one more color to the sequence.

5. **Game Over**
   If you press the wrong color, the game will:

   * Play a 'wrong' animation/sound.
   * Display **"Game Over, Press Any Key to Restart"**.
   * Reset the level and sequence.

6. **Restart**
   Press any key again to restart from Level 1.

---

## 🧩 File Structure

```
├── index.html   # Main HTML structure
├── styles.css   # Styles for the game buttons and layout
└── game.js      # Game logic (sequence generation, clicks, sounds, etc.)
```

---

## 🛠️ Technologies Used

* **HTML5** – Layout/structure
* **CSS3** – Styling and animations
* **JavaScript (ES6)** – Game logic
* **jQuery 3.7.1** – Button events, animations, DOM manipulation

---

## 🚀 Features

* Increasing difficulty with each new level
* Pattern generation using random colors
* Click validation to check player's input
* Visual (flash) and audio feedback
* Smooth restart feature after game over

---

## 👨‍💻 How to Run

1. Place all three files (`index.html`, `styles.css`, `game.js`) in the same folder.
2. Open **index.html** in any modern web browser.
3. Press a key to start playing!

---

## 📄 License

This project is free to use and modify for learning and personal development.

---

Enjoy playing the Simon Game and have fun testing your memory!

