export type ClueType = "text" | "image" | "audio";

export type Clue = {
  id: string;
  unlockOn: string;
  title: string;
  type: ClueType;

  content: string;
  text?: string

  note?: string;
};

export const CLUES: Clue[] = [
  {
    id: "c1",
    unlockOn: "2026-02-06",
    title: "Clue #1",
    type: "text",
    content: "Feb 14 • 19:00",
    note: "Save the evening for me.",
  },

  {
    id: "c2",
    unlockOn: "2026-02-07",
    title: "Clue #2",
    type: "text",
    content: "Important detail: I’ll be there too.",
    note: "I know, shocking.",
  },

  {
    id: "c3",
    unlockOn: "2026-02-07",
    title: "BONUS",
    type: "image",
    content: "/placeholders/me.jpeg",
    text: "This guy likes you a lot. Enjoy. Also how the fuck is it possible that you are this beutiful. Melts my heart every time I see you.",
    note: "🙂",
  },

  {
    id: "c4",
    unlockOn: "2026-02-08",
    title: "Clue #3",
    type: "image",
    content: "/placeholders/dress.jpg",
    text: "Dress code: something you feel confident in. (Not overdressed. Just you.)",
  },

  {
    id: "c5",
    unlockOn: "2026-02-09",
    title: "Clue #4",
    type: "text",
    content: "No playlists. Live music.",
  },

  {
    id: "c6",
    unlockOn: "2026-02-10",
    title: "Clue #5",
    type: "text",
    content: "A city with trams, bridges, and streets that look better at night.",
    note: "We’re not staying in town.",
  },

  {
    id: "c7",
    unlockOn: "2026-02-11",
    title: "Clue #6",
    type: "text",
    content: "Sir L. Andrew D. from Oklahoma.",
    note: "That’s all you get for now.",
  },

  {
    id: "c8",
    unlockOn: "2026-02-12",
    title: "Clue #7",
    type: "text",
    content: "It’s jazz.",
    note: "The good kind (like you didnt know that already).",
  },

  {
    id: "c9",
    unlockOn: "2026-02-13",
    title: "Clue #8",
    type: "image",
    content: "/placeholders/train-ticket.jpg",
    text: "Transportation unlocked. (Ticket reveal soon.)",
  },

  {
    id: "c10",
    unlockOn: "2026-02-14",
    title: "Clue #9",
    type: "image",
    content: "/placeholders/club-ticket.jpg",
    text: "Tonight’s entry. (Ticket reveal soon.)",
  },
];
