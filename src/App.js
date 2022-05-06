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
const HOST = "https://jsonplaceholder.typicode.com/users";
const URL = "https://jsonplaceholder.typicode.com/albums";
const URL2 = "https://jsonplaceholder.typicode.com/posts";

function App() {
  //useState
  const [darkMode, setDarkMode] = useState([]);

  //useEffect
  useEffect(() => {
    fetch(HOST)
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        localStorage.setItem("users", JSON.stringify(users));
      });
  }, []);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((albums) => {
        localStorage.setItem("albums", JSON.stringify(albums));
      });
  }, []);

  useEffect(() => {
    fetch(URL2)
      .then((response) => response.json())
      .then((posts) => {
        localStorage.setItem("posts", JSON.stringify(posts));
      });
  }, []);

  return (
    <DarkMoodContext.Provider value={[darkMode, setDarkMode]}>
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
