import { useEffect, useState } from "react";
import YesGate from "./components/YesGate";
import ClueTimeline from "./components/ClueTimeline";
import { CLUES } from "./data/clues";
import { todayInPragueISO } from "./utils/time";

const LS_KEY = "valentine_yes_v1";

export default function App() {
  const [saidYes, setSaidYes] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem(LS_KEY);
    if (raw === "yes") setSaidYes(true);
  }, []);

  const todayISO = todayInPragueISO();

  return (
    <div className="page">
      <div className="container">
        <header className="header">
          <div className="brand">✉️</div>
          <div className="headerText">
            <div className="kicker">a tiny secret</div>
            <div className="hTitle">one clue per day</div>
          </div>
          <div className="rightPill">Prague time • {todayISO}</div>
        </header>

        {!saidYes && <YesGate onUnlocked={() => setSaidYes(true)} />}

        {saidYes && (
          <div className="stack">
            <div className="card">
              <h1 className="title">You said yes.</h1>
              <p className="subtitle">Come back each day for a new clue.</p>
            </div>

            <div className="card">
              <h2 className="cardTitle">Clue timeline</h2>
              <ClueTimeline clues={CLUES} todayISO={todayISO} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
