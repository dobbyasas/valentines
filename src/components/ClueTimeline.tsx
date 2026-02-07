import { useEffect, useMemo, useState } from "react";
import type { Clue } from "../data/clues";

type Props = {
  clues: Clue[];
  todayISO: string;
};

const LS_OPENED = "valentine_opened_clues_v1";

type OpenedMap = Record<string, boolean>;

function loadOpened(): OpenedMap {
  try {
    const raw = localStorage.getItem(LS_OPENED);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as OpenedMap;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveOpened(map: OpenedMap) {
  localStorage.setItem(LS_OPENED, JSON.stringify(map));
}

export default function ClueTimeline({ clues, todayISO }: Props) {
  const [opened, setOpened] = useState<OpenedMap>({});

  useEffect(() => {
    setOpened(loadOpened());
  }, []);

  const newestUnlockedId = useMemo(() => {
    const unlocked = clues.filter((c) => c.unlockOn <= todayISO);
    return unlocked.length ? unlocked[unlocked.length - 1].id : null;
  }, [clues, todayISO]);

  function reveal(clue: Clue) {
    const unlocked = clue.unlockOn <= todayISO;
    if (!unlocked) return;

    setOpened((prev) => {
      if (prev[clue.id]) return prev;
      const next: OpenedMap = { ...prev, [clue.id]: true };
      saveOpened(next);
      return next;
    });
  }

  return (
    <div className="timeline">
      {clues.map((c) => {
        const unlocked = c.unlockOn <= todayISO;
        const isOpen = !!opened[c.id];
        const canReveal = unlocked && !isOpen;

        return (
          <button
            key={c.id}
            type="button"
            className={[
              "tlItem",
              unlocked ? "unlocked" : "locked",
              canReveal ? "available" : "",
              isOpen ? "open" : "",
              newestUnlockedId === c.id && canReveal ? "newest" : "",
            ].join(" ")}
            onClick={() => reveal(c)}
            disabled={!unlocked}
            aria-expanded={isOpen}
          >
            <div className="dot" />

            <div className="tlContent">
              <div className="tlTop">
                <span className="tlTitle">{c.title}</span>
                <span className="tlDate">{c.unlockOn}</span>
              </div>

              <div className="tlStatus">
                {!unlocked && "Locked"}
                {unlocked && !isOpen && "Tap to reveal"}
                {unlocked && isOpen && "Opened"}
              </div>

              {/* Letter opening animation area */}
              <div className="revealWrap" data-open={isOpen ? "1" : "0"}>
                <div className="envelope" aria-hidden="true" />
                <div className="letter" aria-hidden="true" />

                <div className="letterPaper">
                  {/* TEXT clue */}
                  {c.type === "text" && <p className="tlClueText">{c.content}</p>}

                  {/* IMAGE clue */}
                  {c.type === "image" && (
                    <>
                      {c.text && <p className="tlClueText">{c.text}</p>}
                      <img src={c.content} alt={c.title} className="tlClueImage" />
                    </>
                  )}

                  {/* AUDIO clue */}
                  {c.type === "audio" && (
                    <>
                      {c.text && <p className="tlClueText">{c.text}</p>}
                      <audio controls src={c.content} className="tlClueAudio" />
                    </>
                  )}

                  {c.note && <p className="tlClueNote">{c.note}</p>}
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
