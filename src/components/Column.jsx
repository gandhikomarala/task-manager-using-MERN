import TaskCard from "./TaskCard.jsx";

export default function Column({ column, tasks, onAdvance, onRetreat, onRemove }) {
  return (
    <div className="column">
      <div className="column-header">
        <span className={`column-dot dot-${column.id}`} />
        <h2>{column.label}</h2>
        <span className="column-count">{tasks.length}</span>
      </div>

      <div className="column-body">
        {tasks.length === 0 && <p className="column-empty">No tasks here</p>}
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onAdvance={onAdvance}
            onRetreat={onRetreat}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
}
