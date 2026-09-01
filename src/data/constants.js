export const COLUMNS = [
  { id: "backlog", label: "Backlog" },
  { id: "in-progress", label: "In Progress" },
  { id: "in-review", label: "In Review" },
  { id: "completed", label: "Completed" },
];

export const NEXT_COLUMN = {
  backlog: "in-progress",
  "in-progress": "in-review",
  "in-review": "completed",
  completed: null,
};

export const PREV_COLUMN = {
  backlog: null,
  "in-progress": "backlog",
  "in-review": "in-progress",
  completed: "in-review",
};

export const PRIORITIES = [
  { id: "Urgent", color: "#FF4D5E", bg: "rgba(255,77,94,0.14)" },
  { id: "High", color: "#FF9F43", bg: "rgba(255,159,67,0.14)" },
  { id: "Medium", color: "#FFD43B", bg: "rgba(255,212,59,0.14)" },
  { id: "Low", color: "#51CF66", bg: "rgba(81,207,102,0.14)" },
];

export const CATEGORIES = [
  { id: "Backend", color: "#8C6CFF", bg: "rgba(140,108,255,0.14)" },
  { id: "Frontend", color: "#4DABF7", bg: "rgba(77,171,247,0.14)" },
  { id: "DevOps", color: "#20C997", bg: "rgba(32,201,151,0.14)" },
  { id: "Security", color: "#FF6B9D", bg: "rgba(255,107,157,0.14)" },
];

export function findMeta(list, id) {
  return list.find((item) => item.id === id) || null;
}
