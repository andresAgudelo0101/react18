import './App.css';
import MainPage from './pages/MainPage';
import {createContext,useState} from "react";

export const ThemeContext = createContext(null);

function App() {

  const[theme,setTheme]=useState("light");

  const changeTheme=()=>{
    setTheme((curr)=>(curr==="light"?"dark":"light"));
  }

  return (
  <ThemeContext.Provider value={{theme,changeTheme}}>
    <div className="App" id="light">
      <MainPage/>
    </div>
  </ThemeContext.Provider>
  );
}

export default App;
