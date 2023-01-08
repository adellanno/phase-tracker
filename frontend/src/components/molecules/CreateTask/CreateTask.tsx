import "./CreateTask.css";
import { useMutation } from "@apollo/client";
import { CREATE_TASK, GET_PHASES } from "../../../queries/queries";

interface Props {
  phaseId: number;
}

function CreateTask({ phaseId }: Props) {

  let input: any;

  const [createTask, { data, loading, error }] = useMutation(CREATE_TASK, {
    refetchQueries: [{ query: GET_PHASES }, "GetPhases"],
  });

  return (
    <div className="create-task-container">
      <form
        className="create-task-form"
        onSubmit={(e) => {
          e.preventDefault();
          createTask({ variables: { name: input.value, phaseId } });
          input.value = "";
        }}
      >
        <input
          placeholder="Create a task"
          required
          ref={(node) => {
            input = node;
          }}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateTask;
