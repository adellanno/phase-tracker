import "./Checkbox.css";

interface Props {
  handleChange: (isChecked: boolean) => void;
  isChecked: boolean;
  isLocked: boolean;
}

function Checkbox({ handleChange, isChecked, isLocked }: Props) {
  return (
    <div className="checkbox-container">
      <form>
        <input
          disabled={isLocked}
          name="checkbox-container"
          type="checkbox"
          checked={isChecked}
          onChange={(e) => handleChange(!isChecked)}
        />
      </form>
    </div>
  );
}

export default Checkbox;
