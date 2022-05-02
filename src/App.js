import { Route, Routes } from 'react-router';
//components
import Users from "./components/Users";
import AboutUsers from "./components/AboutUsers"
import Albums from './components/Albums';
import NoFound from './components/NoFound';
import Posts from './components/Posts';

//styles
import './App.css';





function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='/aboutUsers/:userId' element={<AboutUsers />} />
        <Route path='/albums/:usId' element={<Albums />} />
        <Route path='/posts/:usId' element={ <Posts />} />
        <Route path='*' element={<NoFound />} />
      </Routes>
    </div>
  );
}

export default App;
