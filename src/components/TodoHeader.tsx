function TodoHeader() {
  return (
    <header className="todos-header">
      <p className="todos-header__day">Today</p>
      <div className="todos-panel">
        <button
          type="button"
          className="todos-panel__add"
          aria-label="add todo"
        >
          <span></span>
          <span></span>
        </button>
        <div className="todos-panel__count">2</div>
      </div>
    </header>
  );
}

export default TodoHeader;
