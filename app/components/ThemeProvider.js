import { FaMoon } from 'react-icons/fa'; // Import icons from React Icons
import { GoSun } from "react-icons/go";
import { useContextProvider } from './UserContext';



const ThemeProvider = () => {
  const { theme, toggleTheme } = useContextProvider();


  return (
    <button onClick={toggleTheme} className="theme-toggle-button" style={{ display: 'flex', alignItems: 'center'}}>
      {theme === 'light' ? <FaMoon size="2em" /> : <GoSun size="2em" />}
      <span style={{ marginLeft: '10px' }}>{theme === 'light' ? 'Dark' : 'Light'} mode</span>
    </button>
  );
};

export default ThemeProvider;