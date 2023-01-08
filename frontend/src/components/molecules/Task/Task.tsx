import "./Task.css";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import { useMutation } from "@apollo/client";
import { UPDATE_TASK, GET_PHASES } from "../../../queries/queries";

type Props = { 
  name: string;
  taskId: number;
  phaseId: number;
  isCompleted: boolean;
  isLocked: boolean;
};

function Task({ name, taskId, phaseId, isCompleted, isLocked }: Props) {
  const [updateTask, { data, loading, error }] = useMutation(UPDATE_TASK, {
    refetchQueries: [{ query: GET_PHASES }, "GetPhases"],
  });

  return (
    <div className="task-container">
      <Checkbox
        key={`${name}${taskId}`}
        handleChange={(isChecked: boolean) =>
          updateTask({
            variables: { id: taskId, phaseId, isCompleted: isChecked },
          })
        }
        isChecked={isCompleted}
        isLocked={isLocked}
      />
      <p className="task-title">{name}</p>
    </div>
  );
}

export default Task;
