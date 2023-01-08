import "./Home.css";
import CreatePhase from "../../molecules/CreatePhase/CreatePhase";
import { useQuery, useMutation } from "@apollo/client";
import Phase from "../../organisms/Phase/Phase";
import { UPDATE_PHASE, GET_PHASES } from "../../../queries/queries";
import { PhaseObject } from "../../../types";
import RandomFact from "../../atoms/RandomFact/RandomFact";

function Home() {
  const { loading, error, data } = useQuery(GET_PHASES);
  let areAllPhasesComplete: boolean = false;
  
  const [updatePhase] = useMutation(UPDATE_PHASE, {
    refetchQueries: [{ query: GET_PHASES }, "GetPhases"],
  });

  function unlockNextPhase(phases: PhaseObject[]): void {
    const phaseToUnlock: PhaseObject = phases.find((phase: PhaseObject) => !phase.isCompleted) as PhaseObject;
    updatePhase({ variables: { id: phaseToUnlock.id, isLocked: false } })
  } 

  if (data) {
    if (data.phases.length !== 0) {
      if (data.phases.every((phase: PhaseObject) => phase.isLocked && !(data.phases.every((phase: PhaseObject) => phase.isCompleted)))) {
        unlockNextPhase(data.phases)
      }
      if ((data.phases.every((phase: PhaseObject) => phase.isLocked && data.phases.every((phase: PhaseObject) => phase.isCompleted)))) {
        areAllPhasesComplete = true;
      }
    }
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="home-container">
      <h1>My startup progress</h1>

      <div className="home-content">
        {data.phases.length === 0 ? (
          <CreatePhase />
        ) : (
          <>
            {areAllPhasesComplete ? <RandomFact /> : null}
            {data.phases.map((phase: PhaseObject, idx: number) => (
              <Phase
                key={`${phase.name}${phase.id}`}
                name={phase.name}
                tasks={phase.tasks}
                id={phase.id}
                isLocked={phase.isLocked}
                index={idx + 1}
                isComplete={phase.isCompleted}
              />
            ))}
            <CreatePhase />
          </>
        )}
      </div>

    </div>
  );
}

export default Home;
