import "../App.css";
import React from "react";
import { FaMoon } from "react-icons/fa";
interface HeaderProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
    searchQuery: string;
    setSearch: (value: string) => void;
    handleSearch: () => void;
  }
  
  const Header: React.FC<HeaderProps> = ({
    darkMode,
    toggleDarkMode,
    searchQuery,
    setSearch,
    handleSearch,
  }) => {
    return (
      <div className={`App ${darkMode ? "dark-mode" : ""}`}>
        <h2 style={{ color: darkMode ? "white" : "black" }}>REVIEW APP</h2>
        <input
          id="search-ip"
          type="text"
          placeholder="search here"
          value={searchQuery}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>{" "}
        <FaMoon onClick={toggleDarkMode} />
      </div>
    );
  };
  
  export default Header;