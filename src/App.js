//react hooks
import { Route, Routes } from 'react-router';
import { useEffect } from 'react';
//components
import Users from "./components/Users";
import AboutUsers from "./components/AboutUsers"
import Albums from './components/Albums';
import NoFound from './components/NoFound';
import Posts from './components/Posts';

//styles
import './App.css';



const URL = "https://jsonplaceholder.typicode.com/albums";
const URL2 = "https://jsonplaceholder.typicode.com/posts"


function App() {

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(albums => {
        localStorage.setItem("albums", JSON.stringify(albums))
      })
  }, [])

  useEffect(() => {
    fetch(URL2)
      .then(response => response.json())
      .then(posts => {
      localStorage.setItem("posts", JSON.stringify(posts))
      })
  }, [])

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='/aboutUsers/:userId' element={<AboutUsers />} />
        <Route path='/albums/:usId' element={<Albums />} />
        <Route path='/posts/:usId' element={<Posts />} />
        <Route path='*' element={<NoFound />} />
      </Routes>
    </div>
  );
}

export default App;
