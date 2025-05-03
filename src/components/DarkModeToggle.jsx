import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Sync the dark mode state with the body class
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="toggle-theme-wrapper">
      <span>☀️</span>
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onChange={toggleDarkMode}
          checked={isDarkMode}
        />
        <div className="slider round"></div>
      </label>
      <span>🌙</span>
    </div>
  );
};

export default DarkModeToggle;