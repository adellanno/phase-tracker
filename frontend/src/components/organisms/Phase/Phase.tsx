import "./Phase.css";
import PhaseNumber from "../../atoms/PhaseNumber/PhaseNumber";
import Task from "../../molecules/Task/Task";
import { useMutation } from "@apollo/client";
import CreateTask from "../../molecules/CreateTask/CreateTask";
import { UPDATE_PHASE, GET_PHASES } from "../../../queries/queries";
import CompletedTick from '../../atoms/CompletedTick/CompletedTick'
import { TaskObject  } from "../../../types";
type Props = {
  name: string;
  tasks: Record<string, any>;
  id: number;
  index: number;
  isLocked: boolean;
  isComplete: boolean;
};

function Phase({ name, tasks, id, index, isComplete, isLocked }: Props) {

  const [updatePhase] = useMutation(UPDATE_PHASE, {
    refetchQueries: [{ query: GET_PHASES }, "GetPhases"],
  });

  if (tasks.length !== 0 && tasks.every((task: TaskObject) => task.isCompleted) && !isComplete) {
    updatePhase({ variables: { id, isCompleted: true, isLocked: true } })
  } 

  return (
    <div className="phase-container">
      <div className="phase-header">
          <PhaseNumber phaseCount={index} />
          <p>{name} </p>
          { isComplete ? <CompletedTick isCompleted={isComplete} /> : null }
        </div>
        <div>
          {tasks.map((task: TaskObject) => (
            <Task
              name={task.name}
              phaseId={id}
              taskId={task.id}
              isCompleted={task.isCompleted}
              isLocked={isLocked}
            />
          ))}
          { !isComplete ? <CreateTask phaseId={id} /> : null }
        </div>
    </div>
  );
}

export default Phase;
