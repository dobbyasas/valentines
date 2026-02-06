import { useEffect, useMemo, useState } from "react";
import { todayInPragueISO } from "../utils/time";

const LS_KEY = "valentine_yes_v1";

type Props = {
  onUnlocked: () => void;
};

type Screen = "ask" | "no";

const FUNNY_NO_LINES = [
  "Well fuck you too! (respectfully). Also come here, look into Geralts eyes and tell him the news.",
  "I thought we had something.. (Geralt thought we did).",
  "I mean we can still go out and eat kebab (or just kill that son of a bitch Geralt for making a mess at 3AM IN THE FUCKING MORNING).",
  "Okay time to cry till I fall asleep (Geralt is gonna cry with me).’",
];

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function YesGate({ onUnlocked }: Props) {
  const [screen, setScreen] = useState<Screen>("ask");
  const [noLine, setNoLine] = useState<string>(() => pickRandom(FUNNY_NO_LINES));

  useEffect(() => {
    const raw = localStorage.getItem(LS_KEY);
    if (raw === "yes") {
      onUnlocked();
    }
  }, [onUnlocked]);

  const today = useMemo(() => todayInPragueISO(), []);

  function accept() {
    localStorage.setItem(LS_KEY, "yes");
    onUnlocked();
  }

  function decline() {
    setNoLine(pickRandom(FUNNY_NO_LINES));
    setScreen("no");
  }

  if (screen === "no") {
    return (
      <div className="card">
        <div className="badge">All good • {today}</div>
        <h1 className="title">She said no.</h1>
        <p className="subtitle">{noLine}</p>

        <div className="btnRow">
          <button className="btn primary" onClick={() => setScreen("ask")}>
            Actually… ask me again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="badge">Feb 14 • {today}</div>
      <h1 className="title">Will you be my Valentine?</h1>
      <p className="subtitle">
        If you say yes, you’ll get one clue per day until the night.
      </p>

      <div className="btnRow">
        <button className="btn" onClick={accept}>
          Yes
        </button>
        <button className="btn primary" onClick={accept}>
          Yes (obviously)
        </button>
        <button className="btn ghost" onClick={decline}>
          No
        </button>
      </div>

    </div>
  );
}
