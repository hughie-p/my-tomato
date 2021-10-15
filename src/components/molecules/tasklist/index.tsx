import Button from 'components/atoms/button';
import { HiPlusCircle } from 'react-icons/hi';
import * as React from 'react';
import './style.scss';
import Task from 'components/atoms/task';

const dummyData = [
  {
    id: 1,
    done: false,
    todo: 'Go working',
    pomodoro: 4,
    note: 'Notes',
  },
  {
    id: 2,
    done: true,
    todo: 'Go home',
    pomodoro: 2,
    note: '',
  },
];

const TaskList = (): JSX.Element => (
  <div className="tasklist--wrapper">
    <div className="tasklist--list">
      {dummyData?.map((_task) => (
        <Task key={_task.id} task={_task} />
      ))}
    </div>
    <Button>
      <HiPlusCircle size="22px" />
      <span className="tasklist--button__text">Add Task</span>
    </Button>
  </div>
);

export default TaskList;
