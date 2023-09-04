import s from './Todo.module.scss';

import avatar from '../../assets/todo-avatar.png';

import { useState } from 'react';

type UserData = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function Todo({ data }: { data: UserData }) {
  const [completed, setCompleted] = useState<boolean>(data.completed);

  return (
    <div className={s.todo}>
      <div className={s.wrapper}>
        <label className={s.title}>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => setCompleted((prev) => !prev)}
          />
          <span>{data.title}</span>
        </label>
        <div className={s.dates}>
          <time>Oct 12, 01:00 PM</time>
          <time>Oct 13, 02:00 PM</time>
        </div>
        <div className={s.description}>
          <p>Task description with long long long text and many many letters</p>
        </div>
        <div className={s.todoBottom}>
          <span className={s.btnPurple}>Entity title</span>
          <span className={s.btnGray}>Front-end</span>
          <img
            className={s.avatar}
            width={24}
            height={24}
            src={avatar}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Todo;
