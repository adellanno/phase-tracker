import "./PhaseNumber.css";

type Props = {
  phaseCount: number;
};

function PhaseNumber({ phaseCount }: Props) {
  return (
    <div className="phase-number-container">
      <div>{phaseCount}</div>
    </div>
  );
}

export default PhaseNumber;
