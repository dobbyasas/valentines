import { useEffect, useMemo, useState } from "react";
import YesGate from "./components/YesGate";
import ClueCard from "./components/ClueCard";
import ClueTimeline from "./components/ClueTimeline";
import { CLUES } from "./data/clues";
import { todayInPragueISO, isUnlocked } from "./utils/time";

const LS_KEY = "valentine_yes_v1";

export default function App() {
  const [saidYes, setSaidYes] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem(LS_KEY);
    if (raw === "yes") setSaidYes(true);
  }, []);

  // REAL Prague date
  const realToday = todayInPragueISO();

  // TEST override date
  const [testDate, setTestDate] = useState<string | null>(null);

  // Final date used everywhere
  const todayISO = testDate ?? realToday;

  // Latest unlocked clue
  const unlocked = useMemo(
    () => CLUES.filter((c) => isUnlocked(c.unlockOn, todayISO)),
    [todayISO]
  );

  const latest = unlocked[unlocked.length - 1] ?? null;

  function shiftDays(days: number) {
    const base = new Date((testDate ?? realToday) + "T12:00:00");
    base.setDate(base.getDate() + days);
    setTestDate(base.toISOString().slice(0, 10));
  }

  return (
    <div className="page">
      <div className="container">
        <header className="header">
          <div className="brand">✉️</div>
          <div className="headerText">
            <div className="kicker">a tiny secret</div>
            <div className="hTitle">one clue per day</div>
          </div>
          <div className="rightPill">
         {todayISO}
          </div>
        </header>

        {!saidYes && (
          <YesGate onUnlocked={() => setSaidYes(true)} />
        )}

        {saidYes && (
          <div className="stack">
            <div className="card">
              <h1 className="title">You said yes.</h1>
              <p className="subtitle">
                Come back each day for a new clue.
              </p>
            </div>

            {latest && <ClueCard clue={latest} />}

            <div className="card">
              <h2 className="cardTitle">Clue timeline</h2>
              <ClueTimeline clues={CLUES} todayISO={todayISO} />
            </div>

            {/* TESTING PANEL */}
            <div className="card">
              <h3>Testing tools (only you see this)</h3>

              <div className="btnRow">
                <button className="btn" onClick={() => shiftDays(-1)}>
                  ◀ Back 1 day
                </button>

                <button className="btn" onClick={() => shiftDays(1)}>
                  Forward 1 day ▶
                </button>

                <button
                  className="btn primary"
                  onClick={() => setTestDate("2026-02-20")}
                >
                  Unlock ALL clues
                </button>

                <button
                  className="btn ghost"
                  onClick={() => setTestDate(null)}
                >
                  Reset to real date
                </button>
              </div>

              <p className="tiny">
                Current test date: {todayISO}
              </p>
            </div>

            <div className="footer">
              <button
                className="btn ghost"
                onClick={() => {
                  localStorage.removeItem(LS_KEY);
                  location.reload();
                }}
              >
                Reset whole page
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
