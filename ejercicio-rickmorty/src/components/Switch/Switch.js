import DarkMode from "../../contexts/darkMode";
import { useContext } from "react";

export default function Switch() {
  const { toggleDarkMode, darkMode } = useContext(DarkMode);

  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckChecked"
        onChange={toggleDarkMode}
        value={darkMode}
      />
    </div>
  );
}
