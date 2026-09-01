import { NEXT_COLUMN, PREV_COLUMN, findMeta, PRIORITIES, CATEGORIES } from "../data/constants.js";

export default function TaskCard({ task, onAdvance, onRetreat, onRemove }) {
  const priority = findMeta(PRIORITIES, task.priority);
  const category = findMeta(CATEGORIES, task.category);
  const canAdvance = !!NEXT_COLUMN[task.status];
  const canRetreat = !!PREV_COLUMN[task.status];

  return (
    <div className="task-card">
      <div className="task-card-top">
        <span className="task-id">{task.id}</span>
        <button
          className="task-remove"
          onClick={() => onRemove(task.id)}
          title="Delete task"
          aria-label="Delete task"
        >
          ×
        </button>
      </div>

      <h3 className="task-title">{task.title}</h3>

      {task.acceptanceCriteria && (
        <p className="task-criteria">{task.acceptanceCriteria}</p>
      )}

      <div className="task-tags">
        {priority && (
          <span
            className="chip"
            style={{ color: priority.color, background: priority.bg }}
          >
            {priority.id}
          </span>
        )}
        {category && (
          <span
            className="chip"
            style={{ color: category.color, background: category.bg }}
          >
            {category.id}
          </span>
        )}
      </div>

      <div className="task-footer">
        <span className="task-assignee" title={task.assignee}>
          {initials(task.assignee)}
        </span>

        <div className="task-actions">
          {canRetreat && (
            <button className="advance-btn ghost" onClick={() => onRetreat(task.id)} title="Move back">
              ←
            </button>
          )}
          {canAdvance ? (
            <button className="advance-btn" onClick={() => onAdvance(task.id)}>
              Advance →
            </button>
          ) : (
            <span className="done-label">✓ Done</span>
          )}
        </div>
      </div>
    </div>
  );
}

function initials(name) {
  if (!name) return "—";
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}
