export type ClueType = "text" | "image" | "audio";

export type Clue = {
  id: string;
  unlockOn: string; // YYYY-MM-DD in Europe/Prague
  title: string;
  type: ClueType;
  content: string; // text OR url
  note?: string;
};

export const CLUES: Clue[] = [
  // Clue 1: date + time
  {
    id: "c1",
    unlockOn: "2026-02-06",
    title: "Clue #1",
    type: "text",
    content: "Feb 14 • 19:00",
    note: "Save the evening for me.",
  },

  // Clue 2: joke that you'll be there too
  {
    id: "c2",
    unlockOn: "2026-02-07",
    title: "Clue #2",
    type: "text",
    content: "Important detail: I’ll be there too.",
    note: "I know, shocking.",
  },

  // Clue 3: image of a dress + text
  {
    id: "c3",
    unlockOn: "2026-02-08",
    title: "Clue #3",
    type: "image",
    content: "/placeholders/dress.jpg",
    note: "Dress code: something you feel confident in. (Not overdressed. Just you.)",
  },

  // Clue 4: live music
  {
    id: "c4",
    unlockOn: "2026-02-09",
    title: "Clue #4",
    type: "text",
    content: "No playlists. Live music.",
  },

  // Clue 5: hint Prague
  {
    id: "c5",
    unlockOn: "2026-02-10",
    title: "Clue #5",
    type: "text",
    content: "A city with trams, bridges, and streets that look better at night.",
    note: "We’re not staying in town.",
  },

  // Clue 6: hint Lee Andrew Davidson
  {
    id: "c6",
    unlockOn: "2026-02-11",
    title: "Clue #6",
    type: "text",
    content: "Sir L. Andrew D. from Oklahoma.",
    note: "That’s all you get for now.",
  },

  // Clue 7: jazz
  {
    id: "c7",
    unlockOn: "2026-02-12",
    title: "Clue #7",
    type: "text",
    content: "It’s jazz.",
    note: "The good kind (like you didnt know that already).",
  },

  // Clue 8: train ticket placeholder
  {
    id: "c8",
    unlockOn: "2026-02-13",
    title: "Clue #8",
    type: "image",
    content: "/placeholders/train-ticket.jpg",
    note: "Transportation unlocked. (Ticket reveal soon.)",
  },

  // Clue 9: club ticket placeholder
  {
    id: "c9",
    unlockOn: "2026-02-14",
    title: "Clue #9",
    type: "image",
    content: "/placeholders/club-ticket.jpg",
    note: "Tonight’s entry. (Ticket reveal soon.)",
  },
];
