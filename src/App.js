//react hooks
import { Route, Routes } from "react-router";
import { useEffect, useState } from "react";
//components
import Users from "./components/Users";
import AboutUsers from "./components/AboutUsers";
import Albums from "./components/Albums";
import NoFound from "./components/NoFound";
import Posts from "./components/Posts";
import DarkMoodContext from "./context/DarkMoodContext";

//styles
import "./App.css";

//urls for request

const URL2 = "https://jsonplaceholder.typicode.com/posts";

function App() {
  //useState
  const [darkMode, setDarkMode] = useState([]);

  return (
    <DarkMoodContext.Provider value={{ darkTheme: darkMode, setDark: setDarkMode }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/aboutUsers/:usId" element={<AboutUsers />} />
          <Route path="/albums/:usId" element={<Albums />} />
          <Route path="/posts/:usId" element={<Posts />} />
          <Route path="*" element={<NoFound />} />
        </Routes>
      </div>
    </DarkMoodContext.Provider>
  );
}

export default App;
