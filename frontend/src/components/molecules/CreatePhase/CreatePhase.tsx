import "./CreatePhase.css";
import { useMutation } from "@apollo/client";
import { CREATE_PHASE, GET_PHASES } from "../../../queries/queries";

function CreatePhase() {
  let input: any;

  const [createPhase] = useMutation(CREATE_PHASE, {
    refetchQueries: [{ query: GET_PHASES }, "GetPhases"],
  });

  return (
    <div className="create-phase-container">
      <p className="create-phase-title">Create a phase</p>
      <form
        className="create-phase-form"
        onSubmit={(e) => {
          e.preventDefault();
          createPhase({ variables: { name: input.value } });
          input.value = "";
        }}
      >
        <input
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

export default CreatePhase;
