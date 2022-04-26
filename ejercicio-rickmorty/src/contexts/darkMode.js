import { useState, createContext } from "react";

const DarkMode = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

export default DarkMode;

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(function (oldDarkMode) {
      if (oldDarkMode === false) {
        return true;
      } else {
        return false;
      }
    });
  }

  const value = {
    darkMode,
    toggleDarkMode,
  };

  return <DarkMode.Provider value={value}>{children}</DarkMode.Provider>;
}
