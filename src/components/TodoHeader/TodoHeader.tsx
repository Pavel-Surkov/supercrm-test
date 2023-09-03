import s from './TodoHeader.module.scss';

function TodoHeader() {
  return (
    <header className={s.header}>
      <p className={s.day}>Today</p>
      <div className={s.panel}>
        <button type="button" className={s.addBtn} aria-label="add todo">
          <span></span>
          <span></span>
        </button>
        <div className={s.todosCount}>2</div>
      </div>
    </header>
  );
}

export default TodoHeader;
