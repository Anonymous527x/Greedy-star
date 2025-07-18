import React from "react";
import "./App.css";

const foodOptions = [
  { name: "Fish", multiplier: 45, icon: "🐟" },
  { name: "Egg", multiplier: 25, icon: "🍳" },
  { name: "Hot Chicken", multiplier: 15, icon: "🍗🔥" },
  { name: "Shrimp", multiplier: 10, icon: "🦐" },
  { name: "Broccoli", multiplier: 5, icon: "🥦" },
  { name: "Tomato", multiplier: 5, icon: "🍅" },
  { name: "Corn", multiplier: 5, icon: "🌽" },
  { name: "Carrot", multiplier: 5, icon: "🥕" },
];

const wagerOptions = [1, 10, 50, 100, 1000];

function App() {
  return (
    <div className="app-bg">
      <header className="header">
        <div>
          <span className="round-info">
            Today Round: 1378<br />
            2025-06-22 UTC-4
          </span>
        </div>
        <h1 className="title">Greedy Star</h1>
        <button className="rule-btn">Rule</button>
      </header>

      <div className="wheel-section">
        <div className="wheel">
          {foodOptions.map((item, idx) => (
            <div
              key={item.name}
              className={`wheel-item wheel-item-${idx}`}
              title={item.name}
            >
              <span className="wheel-emoji">{item.icon}</span>
              <span className="wheel-multiplier">{item.multiplier} Times</span>
            </div>
          ))}
          <div className="wheel-center">
            <div className="star-face">⭐<br /><span>Show time</span></div>
          </div>
        </div>
      </div>

      <div className="food-select-row">
        <button className="food-btn">🥗 Salad</button>
        <span className="choose-instruction">
          Choose the amount of wager &gt; Choose food
        </span>
        <button className="food-btn">🍕 Pizza</button>
      </div>

      <div className="wager-row">
        {wagerOptions.map((w) => (
          <button key={w} className="wager-btn">
            <span role="img" aria-label="diamond">💎</span> {w}
          </button>
        ))}
      </div>

      <div className="info-row">
        <div className="info-box">Today Winning<br />0</div>
        <div className="info-box">My Records</div>
        <div className="info-box">Balance<br />9.40</div>
      </div>

      <div className="results-row">
        <span className="results-title">Results:</span>
        <span className="results-icons">
          🥕🍗🥦🍅🥦
        </span>
      </div>
    </div>
  );
}

export default App;