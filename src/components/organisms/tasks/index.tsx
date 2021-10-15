import Button from 'components/atoms/button';
import { FiMenu } from 'react-icons/fi';
import * as React from 'react';
import './style.scss';
import TaskList from 'components/molecules/tasklist';

const Tasks = (): JSX.Element => (
  <div className="tasks--wrapper">
    <div className="tasks--header">
      <span className="tasks--title">Tasks</span>
      <Button className="tasks--button__expand">
        <FiMenu size="16px" />
      </Button>
    </div>
    <TaskList />
  </div>
);

export default Tasks;
