import { useEffect, useState } from "react";
import { SEED_TASKS } from "../data/seed.js";

const STORAGE_KEY = "taskflow-pro:tasks";

function loadInitial() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    // fall through to seed data if storage is unavailable or corrupted
  }
  return SEED_TASKS;
}

export function useLocalStorageTasks() {
  const [tasks, setTasks] = useState(loadInitial);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch {
      // localStorage may be unavailable (private browsing, quota) — fail silently
    }
  }, [tasks]);

  function addTask(task) {
    setTasks((prev) => [task, ...prev]);
  }

  function moveTask(id, newStatus) {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, status: newStatus } : t)));
  }

  function removeTask(id) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  return { tasks, addTask, moveTask, removeTask };
}

export function nextTaskId(tasks) {
  const nums = tasks
    .map((t) => parseInt(String(t.id).replace(/\D/g, ""), 10))
    .filter((n) => !Number.isNaN(n));
  const max = nums.length ? Math.max(...nums) : 100;
  return `TF-${max + 1}`;
}
