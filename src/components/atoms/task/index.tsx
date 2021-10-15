import * as React from 'react';
import { TaskData } from 'types/task';
import { FaCheckCircle } from 'react-icons/fa';
import './style.scss';

const Task = ({ task }: TaskData): JSX.Element => (
  <div className="task--wrapper">
    <FaCheckCircle size="24px" className="task--checkbox__isdone" />
    <div className="task--text__todo">{task.todo}</div>
  </div>
);

export default Task;
