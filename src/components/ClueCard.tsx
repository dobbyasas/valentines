import type { Clue } from "../data/clues";

type Props = {
  clue: Clue;
};

export default function ClueCard({ clue }: Props) {
  return (
    <div className="card">
      <div className="cardHeader">
        <div className="badge">{clue.unlockOn}</div>
        <h2 className="cardTitle">{clue.title}</h2>
      </div>

      {clue.type === "text" && <p className="clueText">{clue.content}</p>}

      {clue.type === "image" && (
        <div className="mediaWrap">
          <img className="media" src={clue.content} alt={clue.title} />
        </div>
      )}

      {clue.type === "audio" && (
        <div className="mediaWrap">
          <audio className="audio" controls src={clue.content} />
        </div>
      )}

      {clue.note && <p className="note">{clue.note}</p>}
    </div>
  );
}
