import s from './Todo.module.scss';
import avatar from '../../assets/todo-avatar.png';

import { useState, useMemo } from 'react';
import { faker } from '@faker-js/faker';
import type { UserData } from '../../types';

function transformDate(date: Date) {
  return new Intl.DateTimeFormat('en-US', {
    hour12: true,
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

function Todo({ data }: { data: UserData }) {
  const [completed, setCompleted] = useState<boolean>(data.completed);

  const description = useMemo(() => faker.lorem.sentence(10), []);
  const tagPurpleValue = useMemo(() => faker.lorem.word(), []);
  const tagGrayValue = useMemo(() => faker.lorem.word(), []);
  const startDate = useMemo(() => faker.date.soon({ days: 1 }), []);
  const endDate = useMemo(() => faker.date.soon({ days: 3 }), []);

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
          <time>{transformDate(startDate)}</time>
          <time>{transformDate(endDate)}</time>
        </div>
        <div className={s.description}>
          <p>{description}</p>
        </div>
        <div className={s.todoBottom}>
          <span className={s.btnPurple}>{tagPurpleValue}</span>
          <span className={s.btnGray}>{tagGrayValue}</span>
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
