import './Pokemon.css';
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
    <div className="containerMain" id={theme}>
      <MainPage cambiarTema={changeTheme}/>
    </div>
  </ThemeContext.Provider>
  );
}

export default App;
