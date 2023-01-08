import "./CompletedTick.css";

interface Props {
  isCompleted: boolean;
}

function CompletedTick({ isCompleted }: Props) {
  return (
    
    <div className="completed-tick-container">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
    </div>
  );
}

export default CompletedTick;
