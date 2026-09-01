import { useState } from "react";
import { PRIORITIES, CATEGORIES } from "../data/constants.js";

const empty = {
  title: "",
  acceptanceCriteria: "",
  priority: "Medium",
  category: "Backend",
  assignee: "",
};

export default function CreateTaskModal({ onClose, onCreate }) {
  const [form, setForm] = useState(empty);
  const [error, setError] = useState("");

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.title.trim()) {
      setError("Give the task a title.");
      return;
    }
    onCreate(form);
  }

  return (
    <div className="modal-overlay" onMouseDown={onClose}>
      <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>+ Create Task</h2>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <label className="field">
            <span>Task title</span>
            <input
              autoFocus
              value={form.title}
              onChange={(e) => update("title", e.target.value)}
              placeholder="e.g. Add rate limiting to auth endpoint"
            />
          </label>

          <label className="field">
            <span>Acceptance criteria</span>
            <textarea
              rows={3}
              value={form.acceptanceCriteria}
              onChange={(e) => update("acceptanceCriteria", e.target.value)}
              placeholder="What does 'done' look like?"
            />
          </label>

          <div className="field-row">
            <label className="field">
              <span>Priority</span>
              <select value={form.priority} onChange={(e) => update("priority", e.target.value)}>
                {PRIORITIES.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.id}
                  </option>
                ))}
              </select>
            </label>

            <label className="field">
              <span>Category</span>
              <select value={form.category} onChange={(e) => update("category", e.target.value)}>
                {CATEGORIES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.id}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="field">
            <span>Assignee</span>
            <input
              value={form.assignee}
              onChange={(e) => update("assignee", e.target.value)}
              placeholder="e.g. Priya Menon"
            />
          </label>

          {error && <p className="form-error">{error}</p>}

          <div className="modal-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Add to Backlog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
