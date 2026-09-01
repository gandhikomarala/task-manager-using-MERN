import { PRIORITIES, CATEGORIES } from "../data/constants.js";

export default function Header({
  search,
  onSearch,
  activeFilters,
  onToggleFilter,
  onClearFilters,
  onCreateClick,
  taskCount,
}) {
  return (
    <header className="app-header">
      <div className="header-top">
        <div className="brand">
          <span className="brand-mark">⌘</span>
          <div>
            <h1>TASKFLOW PRO</h1>
            <p>{taskCount} task{taskCount === 1 ? "" : "s"} tracked</p>
          </div>
        </div>

        <button className="btn-primary create-btn" onClick={onCreateClick}>
          + Create Task
        </button>
      </div>

      <div className="header-controls">
        <div className="search-wrap">
          <span className="search-icon">⌕</span>
          <input
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search tasks by title or assignee…"
            className="search-input"
          />
          {search && (
            <button className="search-clear" onClick={() => onSearch("")} aria-label="Clear search">
              ×
            </button>
          )}
        </div>

        <div className="filter-chips">
          {PRIORITIES.map((p) => (
            <button
              key={p.id}
              onClick={() => onToggleFilter("priority", p.id)}
              className={`filter-chip ${activeFilters.priority.has(p.id) ? "active" : ""}`}
              style={
                activeFilters.priority.has(p.id)
                  ? { color: p.color, background: p.bg, borderColor: p.color }
                  : undefined
              }
            >
              {p.id}
            </button>
          ))}
          <span className="chip-divider" />
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => onToggleFilter("category", c.id)}
              className={`filter-chip ${activeFilters.category.has(c.id) ? "active" : ""}`}
              style={
                activeFilters.category.has(c.id)
                  ? { color: c.color, background: c.bg, borderColor: c.color }
                  : undefined
              }
            >
              {c.id}
            </button>
          ))}
          {(activeFilters.priority.size > 0 || activeFilters.category.size > 0) && (
            <button className="filter-chip clear" onClick={onClearFilters}>
              Clear filters
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
