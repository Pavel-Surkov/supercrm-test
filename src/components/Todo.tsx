import avatar from '../assets/todo-avatar.png';

function Todo() {
  return (
    <div className="todo">
      <div className="todo-wrapper">
        <label className="todo-title">
          <input type="checkbox" value="" />
          <span>
            For the sacke of example we are a building company and we have just
            closed
          </span>
        </label>
        <div className="todo-dates">
          <time>Oct 12, 01:00 PM</time>
          <time>Oct 13, 02:00 PM</time>
        </div>
        <div className="todo-description">
          <p>Task description with long long long text and many many letters</p>
        </div>
        <div className="todo-bottom">
          <span className="todo-bottom__purple">Entity title</span>
          <span className="todo-bottom__gray">Front-end</span>
          <img className="todo-bottom__avatar" src={avatar} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Todo;
