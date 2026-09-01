import { useMemo, useState } from "react";
import Header from "./components/Header.jsx";
import Column from "./components/Column.jsx";
import CreateTaskModal from "./components/CreateTaskModal.jsx";
import { COLUMNS, NEXT_COLUMN, PREV_COLUMN } from "./data/constants.js";
import { useLocalStorageTasks, nextTaskId } from "./hooks/useLocalStorageTasks.js";

export default function App() {
  const { tasks, addTask, moveTask, removeTask } = useLocalStorageTasks();
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [filters, setFilters] = useState({ priority: new Set(), category: new Set() });

  function toggleFilter(kind, value) {
    setFilters((prev) => {
      const next = new Set(prev[kind]);
      if (next.has(value)) next.delete(value);
      else next.add(value);
      return { ...prev, [kind]: next };
    });
  }

  function clearFilters() {
    setFilters({ priority: new Set(), category: new Set() });
  }

  function handleCreate(form) {
    const task = {
      id: nextTaskId(tasks),
      title: form.title.trim(),
      acceptanceCriteria: form.acceptanceCriteria.trim(),
      priority: form.priority,
      category: form.category,
      assignee: form.assignee.trim() || "Unassigned",
      status: "backlog",
      createdAt: Date.now(),
    };
    addTask(task);
    setModalOpen(false);
  }

  function handleAdvance(id) {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;
    const next = NEXT_COLUMN[task.status];
    if (next) moveTask(id, next);
  }

  function handleRetreat(id) {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;
    const prev = PREV_COLUMN[task.status];
    if (prev) moveTask(id, prev);
  }

  const filteredTasks = useMemo(() => {
    const q = search.trim().toLowerCase();
    return tasks.filter((t) => {
      if (q && !`${t.title} ${t.assignee} ${t.id}`.toLowerCase().includes(q)) return false;
      if (filters.priority.size > 0 && !filters.priority.has(t.priority)) return false;
      if (filters.category.size > 0 && !filters.category.has(t.category)) return false;
      return true;
    });
  }, [tasks, search, filters]);

  const tasksByColumn = useMemo(() => {
    const map = {};
    for (const col of COLUMNS) map[col.id] = [];
    for (const t of filteredTasks) {
      if (map[t.status]) map[t.status].push(t);
    }
    for (const col of COLUMNS) {
      map[col.id].sort((a, b) => b.createdAt - a.createdAt);
    }
    return map;
  }, [filteredTasks]);

  return (
    <div className="app">
      <Header
        search={search}
        onSearch={setSearch}
        activeFilters={filters}
        onToggleFilter={toggleFilter}
        onClearFilters={clearFilters}
        onCreateClick={() => setModalOpen(true)}
        taskCount={tasks.length}
      />

      <main className="board">
        {COLUMNS.map((col) => (
          <Column
            key={col.id}
            column={col}
            tasks={tasksByColumn[col.id]}
            onAdvance={handleAdvance}
            onRetreat={handleRetreat}
            onRemove={removeTask}
          />
        ))}
      </main>

      {modalOpen && (
        <CreateTaskModal onClose={() => setModalOpen(false)} onCreate={handleCreate} />
      )}
    </div>
  );
}
