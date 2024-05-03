import { Button } from "../ui/button";

export default function Tasks() {
  return (
    <div>
      <h3>Tasks</h3>
      <ul>
        <li>
          <div>Task 1</div>
        </li>
        <li>
          <div>Task 2</div>
        </li>
        <li>
          <div>Task 3</div>
        </li>
      </ul>
      <Button>Add Task</Button>
    </div>
  );
}
